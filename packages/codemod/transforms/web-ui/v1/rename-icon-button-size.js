function transformer(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);

  const getFirstNode = () => root.find(j.Program).get('body', 0).node;
  // Save the comments attached to the first node
  const firstNode = getFirstNode();
  const { comments } = firstNode;

  const hasWebUIIconButton =
    root
      .find(j.ImportDeclaration)
      .filter(path => path.value.source.value === '@utilitywarehouse/web-ui')
      .find(j.ImportSpecifier)
      .filter(path => path.node.imported.name === 'IconButton').length > 0;

  if (hasWebUIIconButton) {
    root
      .findJSXElements('IconButton')
      .find(j.JSXAttribute, { name: { type: 'JSXIdentifier', name: 'size' } })
      .find(j.Literal)
      .forEach(path => {
        const value = path.node.value;
        if (value === 'large') {
          path.node.value = 'medium';
        }
      });
  }

  // If the first node has been modified or deleted, reattach the comments
  const firstNode2 = getFirstNode();
  if (firstNode2 !== firstNode) {
    firstNode2.comments = comments;
  }
  return root.toSource({ quote: 'single' });
}

module.exports = transformer;
