function transformer(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);

  const getFirstNode = () => root.find(j.Program).get('body', 0).node;
  // Save the comments attached to the first node
  const firstNode = getFirstNode();
  const { comments } = firstNode;

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

  // update sizes
  webUIButtons
    .find(j.JSXAttribute, { name: { type: 'JSXIdentifier', name: 'size' } })
    .find(j.Literal)
    .forEach(path => {
      const size = path.node.value;

      if (size === 'large') {
        path.node.value = 'medium';
      }
    });

  // update simple variant translations
  webUIButtons
    .find(j.JSXAttribute, { name: { type: 'JSXIdentifier', name: 'variant' } })
    .find(j.Literal)
    .forEach(path => {
      const variant = path.node.value;
      const newVariant = {
        primary: 'solid',
        secondary: 'outline',
      }[variant];

      if (newVariant) {
        path.node.value = newVariant;
      }
    });

  // replace tertiary variant with a Link component with asChild prop and an
  // inner button element
  webUIButtons.forEach(path => {
    // get variant
    const buttonVariant = getVariantPropValue(path);
    if (buttonVariant === 'tertiary') {
      // change to button
      path.value.openingElement.name = 'button';
      if (path.value.closingElement) {
        path.value.closingElement.name = 'button';
      }
      // remove variant prop
      path.value.openingElement.attributes = path.value.openingElement.attributes.filter(
        attr => attr === 'variant'
      );

      // create button wrapped in Link
      const wrappedButton = j.jsxElement(
        j.jsxOpeningElement(j.jsxIdentifier('Link'), [j.jsxAttribute(j.jsxIdentifier('asChild'))]),
        j.jsxClosingElement(j.jsxIdentifier('Link')),
        [path.value] // Pass in the original component as children
      );
      j(path).replaceWith(wrappedButton);

      // add Link import
      // Finding all Web UI import declarations
      const webUiImports = root
        .find(j.ImportDeclaration)
        .filter(path => path.node.source.value === '@utilitywarehouse/web-ui');

      // Build our new import specifier
      const importSpecifier = j.importSpecifier(j.identifier('Link'));

      // Iterate over Web UI imports
      webUiImports.forEach((webUiImport, i) => {
        // we only want to do this to 1 Web UI import, just in case there is multiple
        if (i > 0) return;
        // we only want to add `Link` once
        if (
          webUiImport.node.specifiers.map(specifier => specifier.imported.name).includes('Link')
        ) {
          return;
        }
        // Replace the existing node with a new one
        j(webUiImport).replaceWith(
          // Build a new import declaration node based on the existing one
          j.importDeclaration(
            [...webUiImport.node.specifiers, importSpecifier], // Insert our new import specificer
            webUiImport.node.source
          )
        );
      });

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
