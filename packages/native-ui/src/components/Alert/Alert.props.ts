import type { Alert } from '@gluestack-ui/themed';
import type { ComponentProps, PropsWithChildren } from 'react';

/**
 * Props for the Alert component.
 */
interface AlertWithoutChildrenProps {
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
}

interface AlertWithChildrenProps
  extends PropsWithChildren<Omit<AlertWithoutChildrenProps, 'text'>> {
  text?: string;
}

export type AlertProps = (AlertWithChildrenProps | AlertWithoutChildrenProps) &
  ComponentProps<typeof Alert>;
