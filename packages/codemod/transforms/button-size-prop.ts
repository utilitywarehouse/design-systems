/* eslint-disable @typescript-eslint/no-explicit-any */
import { API, FileInfo, Options } from 'jscodeshift';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function transformer(file: FileInfo, api: API, options: Options) {
  const j = api.jscodeshift;

  const hasNoSizeProp = (path: any) => {
    return !path.value.openingElement.attributes.some((attr: any) => {
      if (attr.name.name !== 'size') {
        return false;
      }
      return true;
    });
  };

  const addDefaultSizeProp = (path: any) => {
    const size = j.jsxAttribute(j.jsxIdentifier('size'), j.literal('small'));
    path.value.openingElement.attributes.unshift(size);
  };

  const root = j(file.source);
  const buttons = root.findJSXElements('Button');

  buttons.filter(hasNoSizeProp).forEach(addDefaultSizeProp);

  const updateSizeValue = (path: any) => {
    const { node } = path;
    if (node.value === 'regular') {
      return `"small"`;
    }
    return `"${node.value}"`;
  };

  buttons
    .find(j.JSXAttribute, {
      name: { type: 'JSXIdentifier', name: 'size' },
      value: { type: 'StringLiteral' },
    })
    .find(j.StringLiteral)
    .replaceWith(updateSizeValue);

  return root.toSource();
}
