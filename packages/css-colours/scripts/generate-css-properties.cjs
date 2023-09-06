const { light } = require('@utilitywarehouse/colour-system/raw/colours.json');
const prettier = require('prettier');
const fs = require('fs-extra');
const path = require('path');

const generateCSSProps = async () => {
  const prefix = 'color';
  let cssResult = '';
  let scssResult = '';
  // Add a note that this is auto generated
  cssResult += `
    /* HEY, DON'T EDIT THIS FILE DIRECTLY, IT WAS MAGICALLY GENERATED ON ${new Date().toLocaleDateString()}. */

    :root {
  `;
  scssResult += `
    /* HEY, DON'T EDIT THIS FILE DIRECTLY, IT WAS MAGICALLY GENERATED ON ${new Date().toLocaleDateString()}. */

  `;

  // Loop through the light mode colour scale objects, using each object's name
  // & value to define a :root custom prop
  Object.keys(light).forEach(colourScale => {
    cssResult += `\n/* ${colourScale} */\n`;
    scssResult += `\n/* ${colourScale} */\n`;
    Object.values(light[colourScale]).forEach(({ name, value }) => {
      cssResult += `--${prefix}-${name}: ${value};`;
      scssResult += `$${name}: ${value};`;
    });
  });

  // Close the :root block
  cssResult += `
    }
  `;

  cssResult = prettier.format(cssResult, { parser: 'scss' });
  scssResult = prettier.format(scssResult, { parser: 'scss' });

  // Push this file into the CSS dir, ready to go
  await fs.outputFile(path.resolve(__dirname, '../src', 'css', 'colours.css'), cssResult);
  await fs.outputFile(path.resolve(__dirname, '../src', 'scss', '_colours.scss'), scssResult);
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
