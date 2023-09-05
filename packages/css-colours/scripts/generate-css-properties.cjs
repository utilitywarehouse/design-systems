const { light } = require('@utilitywarehouse/colour-system/raw/colours.json');
const prettier = require('prettier');
const fs = require('fs-extra');
const path = require('path');

const generateCSSProps = async () => {
  const prefix = 'color';
  let result = '';
  // Add a note that this is auto generated
  result += `
    /* VARIABLES GENERATED FROM COLOUR-SYSTEM ON ${new Date().toLocaleDateString()}. */

    :root {
  `;

  // Loop through the light mode colour scale objects, using each object's name
  // & value to define a :root custom prop
  Object.keys(light).forEach(colourScale => {
    result += `\n/* ${colourScale} */\n`;
    Object.values(light[colourScale]).forEach(({ name, value }) => {
      result += `--${prefix}-${name}: ${value};`;
    });
  });

  // Close the :root block
  result += `
    }
  `;

  // Make the CSS readable to help people with auto-complete in their editors
  result = prettier.format(result, { parser: 'scss' });

  // Push this file into the CSS dir, ready to go
  await fs.outputFile(path.resolve(__dirname, '../src', 'css', 'colours.css'), result);
};

async function main() {
  const result = await generateCSSProps();
  console.log(result);
}

main()
  .then(() => {
    console.log('Thanks, see ya 👋');
  })
  .catch(err => console.error(err));
