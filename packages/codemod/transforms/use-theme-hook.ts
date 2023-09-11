/* eslint-disable @typescript-eslint/no-explicit-any */
import { API, FileInfo, Options } from 'jscodeshift';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function transformer(file: FileInfo, api: API, options: Options) {
  const j = api.jscodeshift;

  const root = j(file.source);
  const getFirstNode = () => root.find(j.Program).get('body', 0).node;
  // Save the comments attached to the first node
  const firstNode = getFirstNode();
  const { comments } = firstNode;

  root
    .find(j.CallExpression, node => node.callee && node.callee.name === 'useMuiTheme')
    .replaceWith(path => j.callExpression(j.identifier('useTheme'), path.node.arguments));

  root
    .find(j.ImportDeclaration)
    .filter(path => path.value.source.value === '@utilitywarehouse/customer-ui-material')
    .forEach(path => {
      j(path)
        .find(j.ImportSpecifier)
        .filter(p => p.node.local.name === 'useMuiTheme')
        .replaceWith(j.importSpecifier(j.identifier('useTheme')));
    });

  // If the first node has been modified or deleted, reattach the comments
  const firstNode2 = getFirstNode();
  if (firstNode2 !== firstNode) {
    firstNode2.comments = comments;
  }

  return root.toSource();
}
