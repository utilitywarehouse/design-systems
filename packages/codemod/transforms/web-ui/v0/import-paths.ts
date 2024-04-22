/* eslint-disable */
import { API, FileInfo, Options } from 'jscodeshift';

const validWebUiElements = [
  'Background',
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

const localMyAccountComponents = ['Card', 'CardProps', 'CardVariant', 'Container', 'NavLink'];
const localMyAccountHooks = ['useDeviceSize'];

const removedCwuiElements = [
  'Icon',
  'IconProps',
  'Hidden',
  'HiddenProps',
  'InteractiveCard',
  'InteractiveCardProps',
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function transformer(file: FileInfo, api: API, options: Options) {
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
          } else if (removedCwuiElements.includes(localName)) {
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

  if (localComponentSpecifiers.length > 0) {
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
