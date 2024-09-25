figma.showUI(__html__, { width: 400, height: 260 });

// Function to resolve variable aliases recursively

const debugMode = true;
const consoleLog = debugMode ? console : { log: () => {}, warn: () => {}, error: () => {}, clear: () => {} };
consoleLog.clear();

/* eslint-disable @typescript-eslint/no-misused-promises */
figma.ui.onmessage = async (msg) => {
  if (msg.type === 'export-variables') {
    // Fetch all local variables
    const variables = await figma.variables.getLocalVariablesAsync();

    // Fetch all local variable collections
    const collections = await figma.variables.getLocalVariableCollectionsAsync();

    // Create maps for quick access
    const collectionsMap = new Map<string, VariableCollection>();
    collections.forEach((collection) => {
      collectionsMap.set(collection.id, collection);
    });

    const variablesMap = new Map<string, Variable>();
    variables.forEach((variable) => {
      variablesMap.set(variable.id, variable);
    });

    // Function to resolve variable aliases recursively
    const resolveVariableValue = (
      value: VariableValue | undefined,
      currentModeId: string,
      visitedVariables: Set<string>
      /* eslint-disable @typescript-eslint/no-explicit-any */
    ): any => {
      try {
        if (value === undefined) {
          consoleLog.warn(`Value is undefined for mode ID: ${currentModeId}`);
          return { error: 'Value is undefined' };
        }

        if (typeof value === 'object' && value !== null && 'type' in value && value.type === 'VARIABLE_ALIAS') {
          consoleLog.log(`Resolving alias variable with ID: ${value.id} in mode: ${currentModeId}`);

          if (visitedVariables.has(value.id)) {
            consoleLog.warn(`Circular reference detected for variable ID: ${value.id}`);
            return { error: 'Circular reference detected' };
          }
          visitedVariables.add(value.id);

          const aliasVariable = variablesMap.get(value.id);
          if (aliasVariable) {
            // Attempt to find a matching mode in the alias variable
            let aliasModeId = currentModeId;

            // Check if the alias variable has the current mode
            if (!Object.prototype.hasOwnProperty.call(aliasVariable.valuesByMode, aliasModeId)) {
              // If not, use the default mode of the alias variable's collection
              const aliasCollection = collectionsMap.get(aliasVariable.variableCollectionId);
              aliasModeId = aliasCollection ? aliasCollection.defaultModeId : null;

              if (!aliasModeId || !Object.prototype.hasOwnProperty.call(aliasVariable.valuesByMode, aliasModeId)) {
                consoleLog.warn(`No matching mode found for alias variable ID ${value.id}. Cannot resolve value.`);
                return { error: 'No matching mode for alias variable' };
              }
            }

            const aliasValue = aliasVariable.valuesByMode[aliasModeId];

            consoleLog.log(`Alias variable value for ID ${value.id} in mode ${aliasModeId}:`, aliasValue);

            // Handle undefined aliasValue
            if (aliasValue === undefined) {
              consoleLog.warn(`No value found for alias variable ID ${value.id} in mode ${aliasModeId}`);
              return { error: 'No value for alias variable in mode' };
            }

            return resolveVariableValue(aliasValue, aliasModeId, visitedVariables);
          } else {
            consoleLog.error(`Alias variable not found for ID: ${value.id}`);
            return { error: 'Alias variable not found' };
          }
        } else {
          // For non-alias values, return the value directly
          return value;
        }
      } catch (error) {
        consoleLog.error('Error resolving variable value:', error);
        return { error: 'Error resolving variable value' };
      }
    };

    // Transform variables into a serializable format
    const variableData = variables.map((variable) => {
      const collection = collectionsMap.get(variable.variableCollectionId);
      const collectionInfo = collection
        ? {
            id: collection.id,
            name: collection.name,
          }
        : null;

      // Get modes from the collection
      const modes = collection ? collection.modes : [];

      // Build valuesByMode with mode names and resolved values
      const valuesByMode = {};
      for (const modeId of Object.keys(variable.valuesByMode)) {
        const mode = modes.find((m) => m.modeId === modeId);
        const modeName = mode ? mode.name : 'Unknown Mode';

        consoleLog.log(`Resolving variable '${variable.name}' (${variable.id}) for mode '${modeName}' (${modeId})`);

        const rawValue = variable.valuesByMode[modeId];

        const resolvedValue = resolveVariableValue(rawValue, modeId, new Set([variable.id]));

        valuesByMode[modeId] = {
          modeId: modeId,
          modeName: modeName,
          value: resolvedValue,
          rawValue,
        };
      }

      return {
        id: variable.id,
        name: variable.name,
        description: variable.description,
        collection: collectionInfo,
        valuesByMode: valuesByMode,
        remote: variable.remote,
      };
    });

    consoleLog.log('variableData', variableData);

    // Send the data back to the UI
    // figma.ui.postMessage({ type: 'variables-exported', data: variableData });
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
