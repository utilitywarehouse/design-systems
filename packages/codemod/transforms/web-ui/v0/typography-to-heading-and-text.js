const deprecatedComponentName = 'Typography';
const textVariants = ['subtitle', 'body', 'legalNote', 'caption'];
const headingVariants = ['displayHeading', 'h1', 'h2', 'h3', 'h4'];

function transformer(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);

  const getVariantPropValue = path => {
    const variant = [];
    path.value.openingElement.attributes.forEach(attr => {
      if (attr?.name?.name === 'variant') {
        variant.push(attr.value.value);
      }
    });
    return variant[0];
  };

  const getFirstNode = () => root.find(j.Program).get('body', 0).node;
  // Save the comments attached to the first node
  const firstNode = getFirstNode();
  const { comments } = firstNode;

  const webUiImportedComponents = [];

  const webUiImports = root
    .find(j.ImportDeclaration)
    .filter(path => path.value.source.value === '@utilitywarehouse/web-ui');

  webUiImports.forEach(path =>
    path.value.specifiers.map(s => webUiImportedComponents.push(s.local.name))
  );

  // if the file is importing the deprecated Typography component
  if (webUiImportedComponents.includes(deprecatedComponentName)) {
    // remove the Web Ui import
    webUiImports.forEach(path => path.prune());

    // get all the `Typography` components
    const typographyComponents = root.findJSXElements(deprecatedComponentName);

    // transform the gutterBottom prop
    typographyComponents
      .find(j.JSXAttribute, {
        name: { type: 'JSXIdentifier', name: 'gutterBottom' },
      })
      .replaceWith(() =>
        j.jsxAttribute(
          j.jsxIdentifier('sx'),
          j.jsxExpressionContainer(j.identifier("{ marginBottom: '0.35em' }"))
        )
      );

    const addParagraphComponentProp = path => {
      const paragraph = j.jsxAttribute(j.jsxIdentifier('component'), j.literal('p'));
      path.parentPath.parentPath.value.attributes.unshift(paragraph);
    };

    // transform the paragraph prop
    typographyComponents
      .find(j.JSXAttribute, {
        name: { type: 'JSXIdentifier', name: 'paragraph' },
      })
      .forEach(addParagraphComponentProp)
      .replaceWith(() =>
        j.jsxAttribute(
          j.jsxIdentifier('sx'),
          j.jsxExpressionContainer(j.identifier("{ marginBottom: '16px' }"))
        )
      );

    // rename components
    typographyComponents.forEach(path => {
      const props = path.value.openingElement.attributes.map(attr => attr?.name?.name);

      if (!props.includes('variant')) {
        webUiImportedComponents.push('Text');
        path.value.openingElement.name = 'Text';
        if (path.value.closingElement) {
          path.value.closingElement.name = 'Text';
        }
        return path;
      }

      const componentVariant = getVariantPropValue(path);
      if (textVariants.includes(componentVariant)) {
        webUiImportedComponents.push('Text');
        path.value.openingElement.name = 'Text';
        if (path.value.closingElement) {
          path.value.closingElement.name = 'Text';
        }
        return path;
      }
      if (headingVariants.includes(componentVariant)) {
        webUiImportedComponents.push('Heading');
        path.value.openingElement.name = 'Heading';
        if (path.value.closingElement) {
          path.value.closingElement.name = 'Heading';
        }
        return path;
      }
    });

    // add the web-ui imports back in
    const importSpecifiers = Array.from(
      // eslint-disable-next-line no-undef
      new Set(webUiImportedComponents.filter(component => component !== deprecatedComponentName))
    ).map(specifier => j.importSpecifier(j.identifier(specifier)));
    root
      .find(j.Program)
      .get('body', 0)
      .insertAfter(j.importDeclaration(importSpecifiers, j.literal('@utilitywarehouse/web-ui')));
  }

  // If the first node has been modified or deleted, reattach the comments
  const firstNode2 = getFirstNode();
  if (firstNode2 !== firstNode) {
    firstNode2.comments = comments;
  }
  return root.toSource({ quote: 'single' });
}

module.exports = transformer;
