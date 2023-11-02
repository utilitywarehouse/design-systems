import { TypographyProps } from '../../Typography';

export interface TextLinkProps
  extends Pick<TypographyProps, 'textTransform'>,
    React.ComponentPropsWithoutRef<'a'> {}
