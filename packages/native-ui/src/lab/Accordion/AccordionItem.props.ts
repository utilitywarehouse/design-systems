import { ViewProps } from 'react-native';

export interface AccordionItemProps extends ViewProps {
  value?: string;
  disabled?: boolean;
  title?: string;
  expanded?: boolean;
  /**
   * Event handler called when the trigger is pressed.
   */
  toggleItem?: () => void;
  children?: JSX.Element | Array<JSX.Element>;
  divider?: boolean;
  noPadding?: boolean;
}
