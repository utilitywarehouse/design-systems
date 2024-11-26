import { figmaColorToHex } from '../app/utils';

figma.showUI(__html__, { width: 400, height: 480 });

const debugMode = false;
const consoleLog = debugMode
  ? console
  : { log: () => {}, warn: () => {}, error: () => {}, clear: () => {} };
consoleLog.clear();

// Update the exportVariables function to conditionally rename modes
async function exportVariables(selectedCollectionKeys: Array<string>) {
  consoleLog.log('Selected Collection Keys:', selectedCollectionKeys);
  try {
    figma.ui.postMessage({ type: 'show-loading' });

    // Fetch available library collections
    const libraryCollections =
      await figma.teamLibrary.getAvailableLibraryVariableCollectionsAsync();

    consoleLog.log('Available Library Collections:', libraryCollections);

    // Map collections without relying on `id` and `modes`
    const collectionsData = libraryCollections.map(collection => ({
      key: collection.key,
      name: collection.name,
      libraryName: collection.libraryName,
    }));

    // Filter collections based on selected keys
    const selectedLibraryCollections = collectionsData.filter(collection => {
      consoleLog.log(`Checking if selected keys include: ${collection.key}`);
      return selectedCollectionKeys.includes(collection.key);
    });

    consoleLog.log('Selected Library Collections:', selectedLibraryCollections);

    const tokensPerCollection = [];

    for (const collection of selectedLibraryCollections) {
      // Get variables in the collection using `collection.key`
      const libraryVariables = await figma.teamLibrary.getVariablesInLibraryCollectionAsync(
        collection.key
      );

      const importedVariables = [];
      for (const variable of libraryVariables) {
        const importedVariable = await figma.variables.importVariableByKeyAsync(variable.key);
        importedVariables.push(importedVariable);
      }

      consoleLog.log(`Imported Variables for "${collection.name}":`, importedVariables);

      // Process variables without collections
      let tokens = await processVariables(importedVariables);

      consoleLog.log(`Generated tokens for "${collection.name}":`, tokens);

      // Check if there are exactly two modes before renaming
      const modeCount = Object.keys(tokens).length;
      if (modeCount === 2) {
        // check keys of the token for numbers and a colon in the key e.g 9356:0
        const isNumber = Object.keys(tokens).every(key => /^\d+:\d+$/.test(key));
        const isColon = Object.keys(tokens).every(key => key.includes(':'));
        if (isNumber && isColon) {
          tokens = renameModes(tokens, ['light', 'dark']);
          consoleLog.log(`Renamed tokens for "${collection.name}":`, tokens);
        }
      }

      tokensPerCollection.push({
        collectionName: `${collection.libraryName}--${collection.name}`,
        tokensJson: JSON.stringify(tokens, null, 2),
      });
    }

    // Send tokens back to the UI
    figma.ui.postMessage({ type: 'variables-exported', data: tokensPerCollection });
  } catch (error) {
    consoleLog.error('Error during exportVariables:', error);
    figma.ui.postMessage({ type: 'export-error', message: error.message });
  } finally {
    // Hide loading indicator
    figma.ui.postMessage({ type: 'hide-loading' });
  }
}

// Modify the renameModes function to handle 'light' and 'dark' renaming
function renameModes(tokens: Record<string, any>, customNames: Array<string>): Record<string, any> {
  const renamedTokens: Record<string, any> = {};
  const modeKeys = Object.keys(tokens);
  modeKeys.sort(); // Ensure consistent order if necessary

  modeKeys.forEach((modeKey, index) => {
    const newModeName = customNames[index];
    renamedTokens[newModeName] = tokens[modeKey];
  });

  return renamedTokens;
}

// Update the processVariables function to handle named modes
async function processVariables(variables: Array<Variable>): Promise<Record<string, any>> {
  // Map to store resolved variables
  const resolvedVariablesPromises = variables.map(variable => resolveVariable(variable));
  const resolvedVariables = await Promise.all(resolvedVariablesPromises);

  const tokens: Record<string, any> = {};

  for (const variable of resolvedVariables) {
    const modes = Object.keys(variable.values);
    if (modes.length === 1) {
      // Single mode, place values at root
      nestTokens(tokens, variable.path, { value: formatValue(variable.values[modes[0]]) });
    } else {
      // Multiple modes, create mode objects
      for (const [modeName, value] of Object.entries(variable.values)) {
        if (!tokens[modeName]) tokens[modeName] = {};
        nestTokens(tokens[modeName], variable.path, { value: formatValue(value) });
      }
    }
  }

  return tokens;
}

// Enhance the resolveVariable function to handle nested aliases
async function resolveVariable(
  variable: Variable,
  visitedVariables = new Set<string>()
): Promise<Variable> {
  const resolvedValues: Record<string, any> = {};

  consoleLog.log(`Resolving variable: ${variable.name}`);

  // Process each mode directly from valuesByMode
  for (const [modeId, value] of Object.entries(variable.valuesByMode)) {
    const modeName = modeId; // Use raw modeId as modeName

    if (value === undefined) {
      consoleLog.warn(`Variable "${variable.name}" has no value for mode ID "${modeId}"`);
      continue;
    }

    // Start resolving aliases recursively
    let currentValue = value;
    const visited = new Set<string>(visitedVariables);

    while (isVariableAlias(currentValue)) {
      if (visited.has(currentValue.id)) {
        consoleLog.warn(`Circular reference detected for variable "${variable.name}"`);
        break;
      }
      visited.add(currentValue.id);

      consoleLog.log(
        `Resolving alias for variable "${variable.name}": alias ID "${currentValue.id}"`
      );

      const aliasVariable = await figma.variables.getVariableByIdAsync(currentValue.id);

      if (aliasVariable && aliasVariable !== variable) {
        // Use the first available value from aliasVariable.valuesByMode
        const aliasValue = Object.values(aliasVariable.valuesByMode)[0]; // Use first available mode value

        console.log(aliasValue); // Existing log

        if (aliasValue !== undefined) {
          consoleLog.log(`Alias variable found: "${aliasVariable.name}"`);
          currentValue = aliasValue;
        } else {
          consoleLog.warn(`No available value found for alias variable "${aliasVariable.name}"`);
          currentValue = undefined;
          break;
        }
      } else {
        consoleLog.warn(
          `Alias variable with ID "${currentValue.id}" not found or is the same as the current variable`
        );
        break;
      }
    }

    if (currentValue !== undefined) {
      resolvedValues[modeName] = currentValue;
    } else {
      consoleLog.warn(
        `Value for variable "${variable.name}" in mode ID "${modeId}" could not be resolved`
      );
    }
  }

  // Split the variable name into path segments based on '/'
  const path = variable.name.split('/').map(segment => segment.trim());

  return {
    name: variable.name,
    path,
    values: resolvedValues,
  };
}

// Type guard for VariableValueAlias
function isVariableAlias(value: VariableValue): value is VariableAlias {
  return (value as VariableAlias).type === 'VARIABLE_ALIAS';
}

// Function to nest tokens based on path
function nestTokens(tokens: Record<string, any>, path: Array<string>, value: any): void {
  let currentLevel = tokens;
  for (let i = 0; i < path.length; i++) {
    const segment = path[i].replaceAll(' ', '-');
    if (i === path.length - 1) {
      // Last segment, assign the value
      currentLevel[segment] = value;
    } else {
      // Intermediate segment, create object if it doesn't exist
      if (!currentLevel[segment]) {
        currentLevel[segment] = {};
      }
      currentLevel = currentLevel[segment];
    }
  }
}

// Improve the formatValue function to handle all possible resolved value types
function formatValue(value: any): any {
  // Convert Figma color types to HEX
  if (value && typeof value === 'object' && 'r' in value && 'g' in value && 'b' in value) {
    return figmaColorToHex(value);
  }
  // Handle numeric values
  else if (typeof value === 'number') {
    return value;
  }
  // Handle string values
  else if (typeof value === 'string') {
    return value;
  }
  // Handle other types as needed
  consoleLog.warn(`Unrecognised value type: ${JSON.stringify(value)}`);
  return value;
}

/* eslint-disable @typescript-eslint/no-misused-promises */
figma.ui.onmessage = async msg => {
  if (msg.type === 'get-filename') {
    // Get the current file name
    const fileName = figma.root.name;
    // Filename to kebab case and remove special characters
    const fileNameKebab = fileName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
    figma.ui.postMessage({ type: 'filename', data: fileNameKebab });
  } else if (msg.type === 'get-collections') {
    const libraryCollections =
      await figma.teamLibrary.getAvailableLibraryVariableCollectionsAsync();
    const collectionsData = libraryCollections.map(collection => ({
      key: collection.key,
      name: collection.name,
      libraryName: collection.libraryName,
    }));
    figma.ui.postMessage({ type: 'collections-loaded', data: collectionsData });
  } else if (msg.type === 'export-variables') {
    const selectedCollectionKeys = msg.selectedCollections; // Array of selected collection keys
    await exportVariables(selectedCollectionKeys);
  } else if (msg.type === 'save-token') {
    // Save the GitHub token
    await figma.clientStorage.setAsync('githubToken', msg.token);
    figma.ui.postMessage({ type: 'token-saved' });
  } else if (msg.type === 'load-token') {
    // Load the GitHub token
    const token = await figma.clientStorage.getAsync('githubToken');
    figma.ui.postMessage({ type: 'token-loaded', token });
  }
};
