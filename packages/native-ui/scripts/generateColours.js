// Import the necessary modules from the colour-system package
const { colors, colorsCommon, colorsDark } = require('@utilitywarehouse/colour-system');
const fs = require('fs');

// Function to transform the keys of the colorsDark object
function transformColorsDark(colorsDark) {
  const transformed = {};
  Object.keys(colorsDark).forEach(key => {
    // Splitting the key to handle cases like 'cyan400'
    const parts = key.match(/[a-z]+|[\d]+/g) || [];
    const transformedKey = parts
      .map((part, index) => {
        // Capitalize the first letter of each part
        return index === 0
          ? 'dark' + part.charAt(0).toUpperCase() + part.slice(1)
          : part.charAt(0).toUpperCase() + part.slice(1);
      })
      .join('');
    transformed[transformedKey] = colorsDark[key];
  });
  return transformed;
}

// Merge the colors, colorsCommon, and transformed colorsDark objects
const mergedColors = {
  ...colors,
  ...colorsCommon,
  ...transformColorsDark(colorsDark),
};

// Convert the mergedColors object to a string representation of its JavaScript code
const colorsJsContent = `export const colors = ${JSON.stringify(mergedColors, null, 2)};`;

// Write the JavaScript code to a file
fs.writeFile('./src/config/colors.ts', colorsJsContent, err => {
  if (err) {
    console.error('Error writing file:', err);
  } else {
    console.log('File colors.js has been generated successfully.');
  }
});
