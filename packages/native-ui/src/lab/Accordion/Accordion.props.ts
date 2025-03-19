import { ViewProps } from 'react-native';

export interface AccordionProps extends ViewProps {
  /**
   * When type is "single" or "multiple", allows closing content when clicking trigger for an open item.
   * @default true
   */
  collapsible?: boolean;
  /**
   * When true, prevents the user from interacting with the accordion and all its items.
   * @default false
   */
  disabled?: boolean;
  /**
   * Determines whether one or multiple items can be opened at the same time.
   * @default 'multiple'
   */
  type?: 'single' | 'multiple';
  /**
   * The value of the item to expand when initially rendered when type is "single" or "multiple".
   */
  defaultValue?: Array<string>;
  /**
   * The controlled value of the item to expand when type is "single" or "multiple".
   */
  value?: Array<string>;
  /**
   * Event handler called when the expanded state of an item changes and type is "single" or "multiple".
   */
  onValueChange?: (value: Array<string>) => void;
  /**
   * Sets the padding of the accordion item header.
   * @default false
   */
  noPadding?: boolean;
  /**
   * Sets the divider of the accordion item header.
   * @default true
   */
  divider?: boolean;
  /**
   * Sets the padding of the accordion item content.
   * @default false
   */
  contentNoPadding?: boolean;
}
