import { TypographyProps } from '../../Typography';

export interface TextLinkProps
  extends Pick<TypographyProps, 'textTransform'>,
    React.ComponentPropsWithoutRef<'a'> {
  /**
   * Change the default rendered element for the one passed as a child, merging their props and behavior.
   */
  asChild?: boolean;
}
