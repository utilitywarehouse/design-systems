function transformer(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);

  const getFirstNode = () => root.find(j.Program).get('body', 0).node;
  // Save the comments attached to the first node
  const firstNode = getFirstNode();
  const { comments } = firstNode;

  const variantTranslation = {
    primary: 'solid',
    secondary: 'outline',
  };

  const webUIButtons = root.findJSXElements('Button');

  const getVariantPropValue = path => {
    const variant = [];
    path.value.openingElement.attributes.forEach(attr => {
      if (attr?.name?.name === 'variant') {
        variant.push(attr.value.value);
      }
    });
    return variant[0];
  };

  // update simple variant translation
  webUIButtons
    .find(j.JSXAttribute, { name: { type: 'JSXIdentifier', name: 'variant' } })
    .find(j.Literal)
    .forEach(path => {
      const variant = path.node.value;
      const newVariant = variantTranslation[variant];
      if (newVariant) {
        path.node.value = newVariant;
      }
      if (variant === 'tertiary') {
        // add Link import
        // Finding all Web UI import declarations
        const webUiImports = root
          .find(j.ImportDeclaration)
          .filter(path => path.node.source.value === '@utilitywarehouse/web-ui');

        // Build our new import specifier
        const importSpecifier = j.importSpecifier(j.identifier('Link'));

        // Iterate over Web UI imports
        webUiImports.forEach(webUiImport =>
          // Replace the existing node with a new one
          j(webUiImport).replaceWith(
            // Build a new import declaration node based on the existing one
            j.importDeclaration(
              [...webUiImport.node.specifiers, importSpecifier], // Insert our new import specificer
              webUiImport.node.source
            )
          )
        );
      }
    });

  // replace tertiary variant with button component
  webUIButtons.forEach(path => {
    // get variant
    const buttonVariant = getVariantPropValue(path);
    if (buttonVariant === 'tertiary') {
      path.value.openingElement.name = 'button';
      if (path.value.closingElement) {
        path.value.closingElement.name = 'button';
      }
      // // add asChild prop
      // path.node.openingElement.attributes = [
      //   ...path.node.openingElement.attributes,
      //   // build and insert our new prop
      //   j.jsxAttribute(j.jsxIdentifier('asChild')),
      // ];
      // remove variant prop
      path.value.openingElement.attributes = path.value.openingElement.attributes.filter(
        attr => attr === 'variant'
      );

      const wrappedButton = j.jsxElement(
        j.jsxOpeningElement(j.jsxIdentifier('Link'), [
          // Create a prop on the tooltip so it works as expected
          j.jsxAttribute(j.jsxIdentifier('asChild')),
        ]),
        j.jsxClosingElement(j.jsxIdentifier('Link')),
        [path.value] // Pass in the original component as children
      );
      j(path).replaceWith(wrappedButton);

      return path;
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
