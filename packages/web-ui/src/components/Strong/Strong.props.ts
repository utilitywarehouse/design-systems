import { ComponentPropsWithoutRef } from 'react';

import { BoxProps } from '../Box';

export interface StrongProps
  extends Pick<BoxProps, 'textTransform' | 'padding' | 'margin'>,
    ComponentPropsWithoutRef<'strong'> {}
