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

function transformer(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);

  const getFirstNode = () => root.find(j.Program).get('body', 0).node;
  // Save the comments attached to the first node
  const firstNode = getFirstNode();
  const { comments } = firstNode;

  root
    .find(j.ImportDeclaration)
    .filter(path => path.value.source.value === '@utilitywarehouse/customer-ui-material')
    // add in the Box import
    .insertAfter(
      j.importDeclaration(
        [j.importSpecifier(j.identifier(newComponentName))],
        j.stringLiteral('@utilitywarehouse/web-ui')
      )
    )
    // remove the Background import
    .forEach(path => {
      j(path)
        .find(j.ImportSpecifier)
        .forEach(path => {
          if (path.node.local.name === deprecatedComponentName) {
            path.parentPath.parentPath.prune();
          }
        });
    });

  const colourSystemSpecifiers = [];

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

  // find all `Background` components
  const backgroundComponents = root.findJSXElements(deprecatedComponentName);

  // add the default `background` prop for the `Box` component
  backgroundComponents.filter(hasNoBackgroundProp).forEach(addDefaultBackgroundProp);

  backgroundComponents
    // rename `Background` to `Box`
    .forEach(path => {
      path.value.openingElement.name = newComponentName;

      if (path.value.closingElement.name) {
        path.value.closingElement.name = newComponentName;
      }
      return path;
    })
    .find(j.JSXAttribute, { name: { type: 'JSXIdentifier', name: deprecatedPropName } })
    // replace the `backgroundColor` prop with `background` and update the value to the colour-system colours
    .replaceWith(path => {
      const node = path.node.value;
      const replacement = colorTransforms[node.value];
      if (replacement.includes('colors.')) {
        colourSystemSpecifiers.push('colors');
      }
      if (replacement.includes('colorsCommon')) {
        colourSystemSpecifiers.push('colorsCommon');
      }
      if (node?.type === 'StringLiteral') {
        return j.jsxAttribute(
          j.jsxIdentifier(newPropName),
          j.jsxExpressionContainer(j.identifier(replacement))
        );
      } else {
        return node;
      }
    });

  // add in the colour-system import
  if (colourSystemSpecifiers.length > 0) {
    // eslint-disable-next-line no-undef
    const importSpecifiers = Array.from(new Set(colourSystemSpecifiers)).map(specifier =>
      j.importSpecifier(j.identifier(specifier))
    );
    root
      .find(j.Program)
      .get('body', 0)
      .insertAfter(
        j.importDeclaration(importSpecifiers, j.literal('@utilitywarehouse/colour-system'))
      );
  }

  // If the first node has been modified or deleted, reattach the comments
  const firstNode2 = getFirstNode();
  if (firstNode2 !== firstNode) {
    firstNode2.comments = comments;
  }
  return root.toSource({ quote: 'single' });
}

module.exports = transformer;
