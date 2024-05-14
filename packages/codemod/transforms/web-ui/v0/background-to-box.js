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

  const hasNoBackgroundProp = path => {
    return !path.value.openingElement.attributes.some(attr => {
      if (attr.name.name !== deprecatedPropName) {
        return false;
      }
      return true;
    });
  };

  const addDefaultBackgroundProp = path => {
    const replacement = colorTransforms['white'];
    const background = j.jsxAttribute(
      j.jsxIdentifier(newPropName),
      j.jsxExpressionContainer(j.identifier(replacement))
    );
    path.value.openingElement.attributes.unshift(background);
  };

  const backgroundComponents = root.findJSXElements(deprecatedComponentName);

  backgroundComponents.filter(hasNoBackgroundProp).forEach(addDefaultBackgroundProp);

  backgroundComponents
    .forEach(path => {
      path.value.openingElement.name = newComponentName;
      path.value.closingElement.name = newComponentName;
      return path;
    })
    .find(j.JSXAttribute, { name: { type: 'JSXIdentifier', name: deprecatedPropName } })
    .replaceWith(path => {
      const node = path.node.value;
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

  // If the first node has been modified or deleted, reattach the comments
  const firstNode2 = getFirstNode();
  if (firstNode2 !== firstNode) {
    firstNode2.comments = comments;
  }
  return root.toSource({ quote: 'single' });
}

module.exports = transformer;
