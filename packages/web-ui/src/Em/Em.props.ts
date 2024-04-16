import { TypographyProps } from '../Typography';

export interface EmProps
  extends Pick<TypographyProps, 'textTransform' | 'padding' | 'margin'>,
  React.ComponentPropsWithoutRef<'em'> {}
