/* eslint-disable */
import { API, FileInfo, Options } from 'jscodeshift';

const validWebUiElements = [
  'Box',
  'BoxProps',
  'Button',
  'ButtonProps',
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

const removedCwuiElements = [
  'Card',
  'Container',
  'Hidden',
  'Icon',
  'useDeviceSize',
  'InteractiveCard',
  'NavLink',
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function transformer(file: FileInfo, api: API, options: Options) {
  const j = api.jscodeshift;

  const root = j(file.source);
  const getFirstNode = () => root.find(j.Program).get('body', 0).node;
  // Save the comments attached to the first node
  const firstNode = getFirstNode();
  const { comments } = firstNode;

  // If the first node has been modified or deleted, reattach the comments
  const firstNode2 = getFirstNode();
  if (firstNode2 !== firstNode) {
    firstNode2.comments = comments;
  }
  return root.toSource({ quote: 'single' });
}
