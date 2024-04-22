import { API, FileInfo, Options } from 'jscodeshift';

const validWebUiElements = [
  'Box',
  'BoxProps',
  'Button',
  'ButtonProps',
  'CardVariant',
  'Container',
  'Grid',
  'GridProps',
  'Link',
  'LinkProps',
  'Menu',
  'MenuItem',
  'MenuItemProps',
  'MenuProps',
  'Stack',
  'StackProps',
  'TextField',
  'TextFieldProps',
  'ThemeProvider',
  'ThemeProviderProps',
  'Typography',
  'TypographyProps',
  'styled',
  'useTheme',
];

const removedCwuiElements = ['Card','Container','Hidden', 'Icon', 'useDeviceSize', 'InteractiveCard', 'NavLink'];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function transformer(file: FileInfo, api: API, options: Options) {
  const j = api.jscodeshift;

  const root = j(file.source);
  const getFirstNode = () => root.find(j.Program).get('body', 0).node;
  // Save the comments attached to the first node
  const firstNode = getFirstNode();
  const { comments } = firstNode;

  const cwuiSpecifiers = [];
  const muiSpecifiers = [];

  const cwuiImports = root
    .find(j.ImportDeclaration)
    .filter(path => path.value.source.value === '@utilitywarehouse/customer-ui-material');

  root
    .find(j.ImportDeclaration)
    .filter(path => path.value.source.value === '@mui/material')
    .forEach(path => {
      j(path)
        .find(j.ImportSpecifier)
        .forEach(p => muiSpecifiers.push(j.importSpecifier(j.identifier(p.node.local.name))));
    })
    .remove();

  cwuiImports
    .forEach(path => {
      j(path)
        .find(j.ImportSpecifier)
        .forEach(p => {
          const localName = p.node.local.name;
          const importedName = p.node.imported.name;
          if (validCwuiElements.includes(localName)) {
            cwuiSpecifiers.push(j.importSpecifier(j.identifier(localName)));
          } else if (localName.startsWith('Mui')) {
            muiSpecifiers.push(
              j.importSpecifier(j.identifier(`${localName.replace('Mui', '')} as ${localName}`))
            );
          } else if (localName !== importedName) {
            muiSpecifiers.push(j.importSpecifier(j.identifier(`${importedName} as ${localName}`)));
          } else if (
            !removedCwuiElements.includes(localName) &&
            !muiSpecifiers.includes(localName)
          ) {
            muiSpecifiers.push(j.importSpecifier(j.identifier(localName)));
          }
        });
    })
    .forEach(path => {
      if (cwuiSpecifiers.length === 0) {
        j(path).remove();
      }
      if (cwuiSpecifiers.length > 0) {
        j(path).replaceWith(j.importDeclaration(cwuiSpecifiers, j.literal('cwui-v2')));
      }
    });

  if (muiSpecifiers.length > 0) {
    root
      .find(j.Program)
      .get('body', 0)
      .insertAfter(j.importDeclaration(muiSpecifiers, j.literal('@mui/material')));
  }

  // If the first node has been modified or deleted, reattach the comments
  const firstNode2 = getFirstNode();
  if (firstNode2 !== firstNode) {
    firstNode2.comments = comments;
  }
  return root.toSource({ quote: 'single' });
}
