import { TextProps } from '../../Text';

export interface TextLinkProps
  extends Pick<TextProps, 'textTransform'>,
    React.ComponentPropsWithoutRef<'a'> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   */
  asChild?: boolean;
  /**
   * Inverts the component colours, for use on darker backgrounds.
   */
  inverted?: boolean;
}
