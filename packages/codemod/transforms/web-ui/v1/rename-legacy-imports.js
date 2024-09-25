function transformer(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);

  const getFirstNode = () => root.find(j.Program).get('body', 0).node;
  // Save the comments attached to the first node
  const firstNode = getFirstNode();
  const { comments } = firstNode;

  root
    .find(j.ImportDeclaration)
    .filter(path => path.node.source.value === '@utilitywarehouse/web-ui')
    .forEach(v0Import =>
      j(v0Import).replaceWith(
        j.importDeclaration(
          v0Import.node.specifiers,
          j.stringLiteral('@utilitywarehouse/web-ui-v0')
        )
      )
    );

  root
    .find(j.ImportDeclaration)
    .filter(path => path.node.source.value === '@utilitywarehouse/web-ui/dist/lab')
    .forEach(v0Import =>
      j(v0Import).replaceWith(
        j.importDeclaration(
          v0Import.node.specifiers,
          j.stringLiteral('@utilitywarehouse/web-ui-v0/dist/lab')
        )
      )
    );

  // If the first node has been modified or deleted, reattach the comments
  const firstNode2 = getFirstNode();
  if (firstNode2 !== firstNode) {
    firstNode2.comments = comments;
  }
  return root.toSource({ quote: 'single' });
}

module.exports = transformer;
