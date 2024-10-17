#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const { program } = require('commander');

const {
  createParentDirectoryIfNecessary,
  logIntro,
  logItemCompletion,
  logConclusion,
  logError,
} = require('./helpers.cjs');
const { mkDirPromise, readFilePromiseRelative, writeFilePromise } = require('./utils.cjs');

/**
 *
 * This script has been copied from https://github.com/joshwcomeau/new-component and updated to suit our needs. Thankyou Josh!
 *
 */

program
  .arguments('<componentName>')
  .option(
    '-d, --dir <pathToDirectory>',
    'Path to the "components" directory (default: "src/components")',
    'src/components'
  )
  .parse(process.argv);

const [componentName] = program.args;

const options = program.opts();

// Find the path to the selected template file.
const templatesPath = '../templates';
const componentTemplatePath = `${templatesPath}/component.tsx`;
const propsTemplatePath = `${templatesPath}/props.ts`;
const docsTemplatePath = `${templatesPath}/docs.mdx`;
const storiesTemplatePath = `${templatesPath}/stories.tsx`;

// Get all of our file paths worked out, for the user's project.
const componentDir = path.resolve(__dirname, '..', options.dir, componentName);
const componentFilePath = `${componentDir}/${componentName}.tsx`;
const propsFilePath = `${componentDir}/${componentName}.props.ts`;
const docsFilePath = `${componentDir}/${componentName}.docs.mdx`;
const storiesFilePath = `${componentDir}/${componentName}.stories.tsx`;
const indexFilePath = `${componentDir}/index.ts`;

// Our index template is super straightforward, so we'll just inline it for now.
const indexTemplate = `\
export { ${componentName} } from './${componentName}';
export type { ${componentName}Props } from './${componentName}.props';
`;

logIntro({ name: componentName, dir: componentDir });

// Check if componentName is provided
if (!componentName) {
  logError(`Sorry, you need to specify a name for your component like this: new-component <name>`);
  process.exit(0);
}

// Check to see if the parent directory exists.
// Create it if not
createParentDirectoryIfNecessary(options.dir);

// Check to see if this component has already been created
const fullPathToComponentDir = path.resolve(componentDir);
if (fs.existsSync(fullPathToComponentDir)) {
  logError(
    `Looks like this component already exists! There's already a component at ${componentDir}.\nPlease delete this directory and try again.`
  );
  process.exit(0);
}

// Start by creating the directory that our component lives in.
mkDirPromise(componentDir)
  .then(() => readFilePromiseRelative(componentTemplatePath))
  .then(template => {
    logItemCompletion('Directory created.');
    return template;
  })
  .then(template =>
    // Replace our placeholders with real data (so far, just the component name)
    template.replace(/COMPONENT_NAME/g, componentName)
  )
  .then(template => writeFilePromise(componentFilePath, template))
  .then(template => {
    logItemCompletion('Component built and saved to disk.');
    return template;
  })
  .then(() => readFilePromiseRelative(propsTemplatePath))
  .then(template => template.replace(/COMPONENT_NAME/g, componentName))
  .then(template => writeFilePromise(propsFilePath, template))
  .then(template => {
    logItemCompletion('Props file built and saved to disk.');
    return template;
  })
  .then(() =>
    // We also need the `index.js` file, which allows easy importing.
    writeFilePromise(indexFilePath, indexTemplate)
  )
  .then(template => {
    logItemCompletion('Index file built and saved to disk.');
    return template;
  })
  .then(() => readFilePromiseRelative(docsTemplatePath))
  .then(template => template.replace(/COMPONENT_NAME/g, componentName))
  .then(template => writeFilePromise(docsFilePath, template))
  .then(template => {
    logItemCompletion('Docs file built and saved to disk.');
    return template;
  })
  .then(() => readFilePromiseRelative(storiesTemplatePath))
  .then(template => template.replace(/COMPONENT_NAME/g, componentName))
  .then(template => writeFilePromise(storiesFilePath, template))
  .then(template => {
    logItemCompletion('Stories file built and saved to disk.');
    return template;
  })
  .then(() => {
    logConclusion();
  })
  .catch(err => {
    console.error(err);
  });
