/* eslint-disable */
const validWebUiElements = [
  'useBackground',
  'BackgroundProvider',
  'Box',
  'BoxProps',
  'Button',
  'ButtonProps',
  'Grid',
  'GridProps',
  'Spacer',
  'SpacerProps',
  'Link',
  'LinkProps',
  'Menu',
  'MenuProps',
  'MenuItem',
  'MenuItemProps',
  'TextField',
  'TextFieldProps',
  'Typography',
  'TypographyProps',
  'Stack',
  'StackProps',
  'ThemeProvider',
  'ThemeProviderProps',
  'ToggleButton',
  'ToggleButtonProps',
  'ToggleButtonGroup',
  'ToggleButtonGroupProps',
  'styled',
];

const localMyAccountComponents = ['CardVariant', 'Container', 'NavLink', 'Card', 'CardProps'];
const localMyAccountHooks = ['useDeviceSize'];

const cwuiElements = [
  // useTheme is still available in web-ui, however we're going to recommend
  // migrating manually as you would have to include a ThemeProvider wrapper.
  'useTheme',
  'Theme',
  // deprecated/removed components
  'Background',
  'Icon',
  'IconProps',
  'Hidden',
  'HiddenProps',
  'InteractiveCard',
  'InteractiveCardProps',
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function transformer(file, api) {
  const j = api.jscodeshift;

  const root = j(file.source);
  const getFirstNode = () => root.find(j.Program).get('body', 0).node;
  // Save the comments attached to the first node
  const firstNode = getFirstNode();
  const { comments } = firstNode;

  const cwuiSpecifiers = [];
  const webUiSpecifiers = [];
  const localComponentSpecifiers = [];
  const localHooksSpecifiers = [];

  root
    .find(j.ImportDeclaration)
    .filter(path => path.value.source.value === '@utilitywarehouse/customer-ui-material')
    .forEach(path => {
      j(path)
        .find(j.ImportSpecifier)
        .forEach(p => {
          const localName = p.node.local.name;
          if (validWebUiElements.includes(localName)) {
            webUiSpecifiers.push(j.importSpecifier(j.identifier(localName)));
          } else if (localMyAccountComponents.includes(localName)) {
            localComponentSpecifiers.push(j.importSpecifier(j.identifier(localName)));
          } else if (localMyAccountHooks.includes(localName)) {
            localHooksSpecifiers.push(j.importSpecifier(j.identifier(localName)));
          } else if (cwuiElements.includes(localName)) {
            cwuiSpecifiers.push(j.importSpecifier(j.identifier(localName)));
          }
        });
    })
    .forEach(path => {
      if (webUiSpecifiers.length === 0) {
        j(path).remove();
      }
      if (webUiSpecifiers.length > 0) {
        j(path).replaceWith(
          j.importDeclaration(webUiSpecifiers, j.literal('@utilitywarehouse/web-ui'))
        );
      }
    });

  if (localComponentSpecifiers.length > 0) {
    root
      .find(j.Program)
      .get('body', 0)
      .insertAfter(j.importDeclaration(localComponentSpecifiers, j.literal('~/components')));
  }

  if (localHooksSpecifiers.length > 0) {
    root
      .find(j.Program)
      .get('body', 0)
      .insertAfter(j.importDeclaration(localHooksSpecifiers, j.literal('~/hooks')));
  }

  if (cwuiSpecifiers.length > 0) {
    root
      .find(j.Program)
      .get('body', 0)
      .insertAfter(
        j.importDeclaration(cwuiSpecifiers, j.literal('@utilitywarehouse/customer-ui-material'))
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
