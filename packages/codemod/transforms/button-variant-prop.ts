import { API, FileInfo, Options } from 'jscodeshift';

const variantTransforms = {
  contained: 'primary',
  outlined: 'secondary',
  tertiary: 'tertiary',
};

const componentName = 'Button';
const propName = 'variant';

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
      const replacement = variantTransforms[node.value];
      if (!replacement) {
        console.error('Unknown variant value');
        return `"${node.value}"`;
      }
      return `"${replacement}"`;
    });

  return root.toSource();
}
