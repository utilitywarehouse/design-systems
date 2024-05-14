/* eslint-disable */
const colorTransforms = {
  white: 'colorsCommon.brandWhite',
  whiteOwl: 'colors.grey75',
  lightTint: 'colors.purple100',
  purple: 'colorsCommon.brandPrimaryPurple',
  midnight: 'colorsCommon.brandMidnight',
};

const deprecatedComponentName = 'Background';
const deprecatedPropName = 'backgroundColor';
const newComponentName = 'Box';
const newPropName = 'background';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function transformer(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);

  const getFirstNode = () => root.find(j.Program).get('body', 0).node;
  // Save the comments attached to the first node
  const firstNode = getFirstNode();
  const { comments } = firstNode;

  // root
  //   .findJSXElements(deprecatedComponentName)
  //   .find(j.JSXAttribute)
  //   // .find(j.JSXAttribute, {
  //   //   name: { type: 'JSXIdentifier', name: deprecatedPropName },
  //   //   value: { type: 'StringLiteral' },
  //   // })
  //   .filter(attribute => attribute.node.name.name === deprecatedPropName)
  //   .forEach(attribute => {
  //     const replacement = colorTransforms[attribute.node.value.value];
  //     if (!replacement) {
  //       console.error('Unknown backgroundColor value');
  //       return attribute;
  //     }
  //
  //     return j(attribute).replaceWith(
  //       j.jsxAttribute(j.jsxIdentifier(newPropName), attribute.node.value)
  //     );
  //   });
  // .find(j.StringLiteral)
  // .replaceWith(nodePath => {
  //   const { node } = nodePath;
  //   const replacement = colorTransforms[node.value];
  //   if (!replacement) {
  //     console.error('Unknown backgroundColor value');
  //     return `"${node.value}"`;
  //   }
  //   return `{${replacement}}`;
  // });

  // root
  //   .findJSXElements(deprecatedComponentName)
  //   .forEach(path => {
  //     path.value.openingElement.name = newComponentName;
  //     path.value.closingElement.name = newComponentName;
  //     return path;
  //   })
  //   .find(j.JSXAttribute, {
  //     name: { type: 'JSXIdentifier', name: deprecatedPropName },
  //     value: { type: 'StringLiteral' },
  //   })
  //   .find(j.JSXIdentifier)
  //   .replaceWith(newPropName)
  //   .find(j.StringLiteral)
  //   .replaceWith(nodePath => {
  //     console.log({ nodePath });
  //     const { node } = nodePath;
  //     const replacement = colorTransforms[node.value];
  //     if (!replacement) {
  //       console.error('Unknown backgroundColor value');
  //       return `"${node.value}"`;
  //     }
  //     return `{${replacement}}`;
  //   });

  root
    .findJSXElements(deprecatedComponentName)
    .forEach(path => {
      path.value.openingElement.name = newComponentName;
      path.value.closingElement.name = newComponentName;
      return path;
    })
    .find(j.JSXAttribute, { name: { type: 'JSXIdentifier', name: deprecatedPropName } })
    .replaceWith(nodePath => {
      const node = nodePath.node.value;
      const replacement = colorTransforms[node.value];
      if (node?.type === 'StringLiteral') {
        return j.jsxAttribute(
          j.jsxIdentifier(newPropName),
          j.jsxExpressionContainer(j.identifier(replacement))
        );
      } else {
        return node;
      }
    });

  // root.findJSXElements(deprecatedComponentName).forEach(path => {
  //   path.value.openingElement.name = newComponentName;
  //   path.value.closingElement.name = newComponentName;
  //   return path;
  // });

  // If the first node has been modified or deleted, reattach the comments
  const firstNode2 = getFirstNode();
  if (firstNode2 !== firstNode) {
    firstNode2.comments = comments;
  }
  return root.toSource({ quote: 'single' });
}

module.exports = transformer;
