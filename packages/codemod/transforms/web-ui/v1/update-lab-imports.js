function transformer(file, api) {
  const j = api.jscodeshift;

  const root = j(file.source);
  const getFirstNode = () => root.find(j.Program).get('body', 0).node;
  // Save the comments attached to the first node
  const firstNode = getFirstNode();
  const { comments } = firstNode;

  const components = ['Link', 'TextLink'];
  const localComponents = [];

  root
    .find(j.ImportDeclaration)
    .filter(path => path.value.source.value === '@utilitywarehouse/web-ui/dist/lab')
    .forEach(path => {
      j(path)
        .find(j.ImportSpecifier)
        .forEach(p => {
          const localName = p.node.local.name;
          if (components.includes(localName)) {
            localComponents.push(j.importSpecifier(j.identifier(localName)));
          }
        });
    })
    .forEach(path => {
      if (localComponents.length > 0) {
        j(path).replaceWith(
          j.importDeclaration(localComponents, j.literal('@utilitywarehouse/web-ui'))
        );
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
