figma.showUI(__html__, { width: 400, height: 260 });

const debugMode = true;
const consoleLog = debugMode
  ? console
  : { log: () => {}, warn: () => {}, error: () => {}, clear: () => {} };
consoleLog.clear();

async function exportVariables() {
  // Asynchronously get all local variables in the current file
  const localVariables = await figma.variables.getLocalVariablesAsync();

  // Asynchronously get all local variable collections in the current file
  const localCollections = await figma.variables.getLocalVariableCollectionsAsync();

  interface ResolvedVariable {
    name: string;
    path: string[]; // Array of name segments
    values: Record<string, any>; // Mode name to value mapping
  }

  async function resolveVariable(
    variable: Variable,
    collections: VariableCollection[],
    visitedVariables = new Set<string>()
  ): Promise<ResolvedVariable> {
    const resolvedValues: Record<string, any> = {};

    // Find collections that include this variable
    const variableCollections = collections.filter(collection =>
      collection.variableIds.includes(variable.id)
    );

    // For each collection, resolve values for each mode
    for (const collection of variableCollections) {
      for (const mode of collection.modes) {
        const modeId = mode.modeId;
        const modeName = mode.name;
        let value = variable.valuesByMode[modeId];

        // Resolve aliases recursively
        const visited = new Set<string>(visitedVariables);
        // @ts-expect-error - TS doesn't recognize the type of value
        while (value && value.type === 'VARIABLE_ALIAS') {
          // @ts-expect-error - TS doesn't recognize the type of value
          if (visited.has(value.id)) {
            consoleLog.warn(`Circular reference detected for variable ${variable.name}`);
            break;
          }
          // @ts-expect-error - TS doesn't recognize the type of value
          visited.add(value.id);

          // Fetch the alias variable, possibly from external libraries
          // @ts-expect-error - TS doesn't recognize the type of value
          const aliasVariable = await figma.variables.getVariableByIdAsync(value.id);
          if (aliasVariable && aliasVariable !== variable) {
            // Map modes between the current collection and the alias variable's collection
            const aliasCollections = await getVariableCollectionsForVariable(aliasVariable);

            // Attempt to find a matching mode in the alias variable's collections
            const aliasValue = await getValueForMatchingMode(
              aliasVariable,
              aliasCollections,
              modeName
            );

            if (aliasValue !== undefined) {
              value = aliasValue;
            } else {
              // If no matching mode, use a default value or break
              consoleLog.warn(
                `No matching mode found for variable ${aliasVariable.name} in mode ${modeName}`
              );
              value = undefined;
              break;
            }
          } else {
            break;
          }
        }

        resolvedValues[modeName] = value;
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

  // Helper function to get the collections that include a variable
  async function getVariableCollectionsForVariable(
    variable: Variable
  ): Promise<VariableCollection[]> {
    // Attempt to get the collections that include this variable
    const collections: VariableCollection[] = [];

    // Check local collections
    const localCollections = await figma.variables.getLocalVariableCollectionsAsync();
    for (const collection of localCollections) {
      if (collection.variableIds.includes(variable.id)) {
        collections.push(collection);
      }
    }

    // For variables from external libraries, we may not have access to their collections directly
    // So we can try to get the collection by the variable's collectionId
    if (variable.variableCollectionId) {
      const collection = await figma.variables.getVariableCollectionByIdAsync(
        variable.variableCollectionId
      );
      if (collection) {
        collections.push(collection);
      }
    }

    return collections;
  }

  // Helper function to get the value for a matching mode
  async function getValueForMatchingMode(
    variable: Variable,
    collections: VariableCollection[],
    targetModeName: string
  ): Promise<VariableValue | undefined> {
    for (const collection of collections) {
      // Find the mode in the alias variable's collection that matches the target mode name
      const matchingMode = collection.modes.find(mode => mode.name === targetModeName);

      if (matchingMode) {
        const value = variable.valuesByMode[matchingMode.modeId];
        if (value !== undefined) {
          return value;
        }
      }
    }

    // If no matching mode, return a default value if available
    // You might choose to return the value from the first available mode
    const defaultModeId = Object.keys(variable.valuesByMode)[0];
    return variable.valuesByMode[defaultModeId];
  }

  // Process all variables
  const allVariables = localVariables;
  const allCollections = localCollections;

  // Resolve all variables
  const resolvedVariablesPromises = allVariables.map(variable =>
    resolveVariable(variable, allCollections)
  );
  const resolvedVariables = await Promise.all(resolvedVariablesPromises);

  // Initialize the tokens object with modes at the top level
  const styleDictionaryTokens: Record<string, any> = {};

  for (const variable of resolvedVariables) {
    for (const [modeName, value] of Object.entries(variable.values)) {
      if (value !== undefined) {
        const tokenValue = {
          value: formatValue(value),
          // Optionally add type or other attributes
        };

        // Ensure the mode object exists
        if (!styleDictionaryTokens[modeName]) {
          styleDictionaryTokens[modeName] = {};
        }

        // Nest the token under its path in the mode object
        nestTokens(styleDictionaryTokens[modeName], variable.path, tokenValue);
      }
    }
  }

  // Function to nest tokens based on path
  function nestTokens(tokens: Record<string, any>, path: string[], value: any): void {
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

  function formatValue(value: any): any {
    // Convert Figma types to plain values suitable for Style Dictionary
    if (value && value.r !== undefined && value.g !== undefined && value.b !== undefined) {
      return figmaColorToHex(value);
    } else if (typeof value === 'number') {
      return value;
    } else if (typeof value === 'string') {
      return value;
    }
    // Handle other types as needed
    return value;
  }

  // Helper function to convert Figma color to HEX
  function figmaColorToHex(color: RGBA): string {
    const r = Math.round(color.r * 255);
    const g = Math.round(color.g * 255);
    const b = Math.round(color.b * 255);
    const a = color.a !== undefined ? Math.round(color.a * 255) : 255;

    if (a < 255) {
      // Return RGBA hex
      return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}${componentToHex(a)}`;
    } else {
      // Return RGB hex
      return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
    }
  }

  function componentToHex(c: number): string {
    const hex = c.toString(16);
    return hex.length == 1 ? '0' + hex : hex;
  }

  // Convert the tokens object to JSON
  const tokensJson = JSON.stringify(styleDictionaryTokens, null, 2);

  // Send the data back to the UI
  figma.ui.postMessage({ type: 'variables-exported', data: tokensJson });
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
  }
  if (msg.type === 'export-variables') {
    await exportVariables();
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
