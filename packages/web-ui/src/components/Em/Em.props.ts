import { BoxProps } from '../Box';

export interface EmProps
  extends Pick<BoxProps, 'textTransform' | 'padding' | 'margin'>,
    React.ComponentPropsWithoutRef<'em'> {}
