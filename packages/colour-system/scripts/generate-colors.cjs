/* eslint-disable @typescript-eslint/naming-convention */
const _ = require('lodash');
const tinycolor = require('tinycolor2');
const fs = require('fs-extra');
const path = require('path');
const { render } = require('ejs');

const figmaConfig = {
  baseUrl: 'https://api.figma.com',
  fileKey: '6lQm8QMegMx1CHchbzkHyc',
  headers: new Headers({ 'X-Figma-Token': process.env.FIGMA_ACCESS_TOKEN }),
};

/**
 * Gets the UW Colour System figma styles.
 */
async function getStyles() {
  const resp = await fetch(`${figmaConfig.baseUrl}/v1/files/${figmaConfig.fileKey}/styles`, {
    headers: figmaConfig.headers,
  });
  const data = await resp.json();
  if (data.status === 403 && data.err === 'Invalid token') {
    throw new Error(
      'An invalid token was used. Follow the Auth Guide (https://git.io/Je87i), and try again.'
    );
  }

  return data.meta.styles
    .filter(s => !s.name.toLowerCase().includes('white')) // temporary
    .filter(s => !s.name.toLowerCase().includes('midnight')) // temporary
    .reduce((styles, style) => {
      const { name, description, node_id, created_at, updated_at } = style;
      const [colourMode, colour, step] = name.split('/');

      const mode = colourMode.toLowerCase();
      const scale = _.lowerFirst(colour);
      const colourName = _.lowerFirst(`${colour}${step}`);
      const colourDescription = `${description}`.replace(/[\n\r]+/g, ' ');

      styles[node_id] = {
        id: node_id,
        mode,
        scale,
        step,
        name: colourName,
        description: colourDescription,
        created_at,
        updated_at,
      };

      return styles;
    }, {});
}

/**
 * Gets the colour styles values
 */
async function getColours(styles) {
  const nodes = Object.keys(styles);
  const resp = await fetch(
    `${figmaConfig.baseUrl}/v1/files/${figmaConfig.fileKey}/nodes?ids=${nodes.join(',')}`,
    {
      headers: figmaConfig.headers,
    }
  );
  const data = await resp.json();
  if (data.status === 403 && data.err === 'Invalid token') {
    throw new Error(
      'An invalid token was used. Follow the Auth Guide (https://git.io/Je87i), and try again.'
    );
  }

  // add the hex value to the colour
  Object.keys(data.nodes)
    .sort()
    .forEach(node => {
      const nodeData = data.nodes[node];
      const { r, g, b } = nodeData.document.fills[0].color;
      const hex = `#${tinycolor({ r: r * 255, g: g * 255, b: b * 255 }).toHex()}`;
      styles[nodeData.document.id].value = hex;
    });

  // rebuild the object into light/dark mode, then colour scales
  // ie. { light: { cyan: { cyan100: { ... }}}, dark: { cyan: { cyan100: { ... }}}}
  return Object.values(styles).reduce((colours, style) => {
    colours[style.mode] = { ...colours[style.mode] };
    colours[style.mode][style.scale] = {
      ...colours[style.mode][style.scale],
      [style.name]: style,
    };

    // sort by colour name
    const unordered = colours[style.mode][style.scale];
    const ordered = Object.keys(unordered)
      .sort((a, b) => Number(unordered[a].step) - Number(unordered[b].step))
      .reduce((obj, key) => {
        obj[key] = unordered[key];
        return obj;
      }, {});

    colours[style.mode][style.scale] = ordered;

    return colours;
  }, {});
}

async function generateColoursFiles(colours) {
  await fs.outputFile(
    path.resolve(__dirname, '..', 'raw', 'colours.json'),
    JSON.stringify(colours, null, 2),
    {
      encoding: 'utf8',
    }
  );

  Object.keys(colours).forEach(async colourMode => {
    const colorScales = Object.keys(colours[colourMode]);
    // generate color mode index files
    const colorModeIndexTemplateSrc = await fs.readFileSync(
      path.resolve(__dirname, '../templates', 'color-mode-index.ts.ejs'),
      { encoding: 'utf8' }
    );
    const colorModeIndexRendered = render(colorModeIndexTemplateSrc, {
      colorScales,
    });
    await fs.outputFile(
      path.resolve(__dirname, '../src', colourMode, 'index.ts'),
      colorModeIndexRendered
    );

    // generate colour scales
    colorScales.forEach(async colourScale => {
      const colorScalesTemplateSrc = await fs.readFileSync(
        path.resolve(__dirname, '../templates', 'color-scale.ts.ejs'),
        { encoding: 'utf8' }
      );
      const colorScaleRendered = render(colorScalesTemplateSrc, {
        colors: Object.values(colours[colourMode][colourScale]),
        color: colourScale,
      });
      await fs.outputFile(
        path.resolve(__dirname, '../src', colourMode, `${colourScale}.ts`),
        colorScaleRendered
      );
    });
  });
}

async function main() {
  console.log('getting figma styles');
  const styles = await getStyles();
  console.log('getting colours');
  const colours = await getColours(styles);
  console.log('generating colours file');
  await generateColoursFiles(colours);
}

main()
  .then(() => {
    console.log('Thanks, see ya 👋');
  })
  .catch(err => console.error(err));
