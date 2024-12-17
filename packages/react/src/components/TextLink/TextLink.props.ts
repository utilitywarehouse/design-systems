import { ComponentPropsWithout, RemovedProps } from '../../types/component-props';

export interface TextLinkProps extends ComponentPropsWithout<'a', RemovedProps> {
  /**
   * Sets the text colour.
   * It is recommended to use the colours from the `@utilitywarehouse/colour-system` package.
   *
   * @default color.cyan600
   */
  color?: string;
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behaviour.
   */
  asChild?: boolean;
}
