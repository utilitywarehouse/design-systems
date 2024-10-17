import type { ViewProps } from 'react-native';

/**
 * Props for the Alert component.
 */
interface AlertWithoutChildrenProps extends ViewProps {
  /**
   * The text content of the alert.
   */
  text: string;

  /**
   * The title of the alert.
   */
  title?: string;

  /**
   * The text for the link in the alert.
   */
  link?: string;

  /**
   * The color scheme of the alert.
   * Possible values: 'cyan', 'green', 'gold', 'red'.
   * @default 'cyan'
   */
  colorScheme?: 'cyan' | 'green' | 'gold' | 'red';

  /**
   * Callback function for when the icon button is pressed.
   */
  onPressIconButton?: () => void;

  /**
   * Callback function for when the link is pressed.
   */
  onPressLink?: () => void;

  /**
   * Callback function for when the alert is closed.
   */
  onClose?: () => void;
  children?: never;
}

interface AlertWithChildrenProps
  extends ViewProps,
    Omit<AlertWithoutChildrenProps, 'text' | 'children'> {
  text?: never;
  onPressLink?: never;
  onPressIconButton?: never;
  onClose?: never;
  link?: never;
  title?: never;
}

export type AlertProps = AlertWithChildrenProps | AlertWithoutChildrenProps;
