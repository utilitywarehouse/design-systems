import { API, FileInfo, Options } from 'jscodeshift';

const colorTransforms = {
  level5: 'white',
  level4: 'whiteOwl',
  level3: 'lightTint',
  level1: 'purple',
  level0: 'midnight',
};

const componentName = 'Background';
const propName = 'backgroundColor';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function transformer(file: FileInfo, api: API, options: Options) {
  const j = api.jscodeshift;
  const root = j(file.source);
  root
    .findJSXElements(componentName)
    .find(j.JSXAttribute, {
      name: { type: 'JSXIdentifier', name: propName },
      value: { type: 'StringLiteral' },
    })
    .find(j.StringLiteral)
    .replaceWith(nodePath => {
      const { node } = nodePath;
      const replacement = colorTransforms[node.value];
      if (!replacement) {
        console.error('Unknown backgroundColor value');
        return `"${node.value}"`;
      }
      return `"${replacement}"`;
    });

  return root.toSource();
}
