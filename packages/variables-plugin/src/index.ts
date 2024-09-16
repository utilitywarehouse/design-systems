import { THING } from 'env';
console.log(`PATH is ${THING}sss`);
// This plugin creates 5 rectangles on the screen.
const numberOfRectangles = 5;

// This file holds the main code for plugins. Code in this file has access to
// the *figma document* via the figma global object.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (See https://www.figma.com/plugin-docs/how-plugins-run).

(async () => {
  // const nodes: SceneNode[] = [];
  // for (let i = 0; i < numberOfRectangles; i++) {
  //   const rect = figma.createRectangle();
  //   rect.x = i * 150;
  //   rect.fills = [{ type: 'SOLID', color: { r: 1, g: 0.5, b: 0 } }];
  //   figma.currentPage.appendChild(rect);
  //   nodes.push(rect);
  // }
  // figma.currentPage.selection = nodes;
  // figma.viewport.scrollAndZoomIntoView(nodes);

  async function getCollections() {
    console.clear();
    alert(THING);
    const localCollections = await figma.variables.getLocalVariableCollectionsAsync();
    let colorVariables = [];

    for (const collection of localCollections) {
      console.log(JSON.stringify(collection.name));
      console.log(JSON.stringify(collection.modes));
      console.log(JSON.stringify(collection.variableIds));

      if (collection.name === 'Primitive Colors') {
        for (const variableId of collection.variableIds) {
          const {
            id,
            codeSyntax,
            description,
            key,
            hiddenFromPublishing,
            name,
            scopes,
            valuesByMode,
          } = await figma.variables.getVariableByIdAsync(variableId);
          const mode = collection.modes[0].modeId;
          const value = {
            id,
            codeSyntax,
            description,
            key,
            hiddenFromPublishing,
            name,
            scopes,
            value: valuesByMode[mode],
          };
          console.log(value);
          colorVariables.push(value);
        }
      }
    }
    figma.notify('The variables have been exported!');
    console.log(JSON.stringify(colorVariables));
  }

  await getCollections();

  // Make sure to close the plugin when you're done. Otherwise the plugin will
  // keep running, which shows the cancel button at the bottom of the screen.
  figma.closePlugin();
})();
