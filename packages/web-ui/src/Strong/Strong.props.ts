import { ComponentPropsWithoutRef } from 'react';
import { TypographyProps } from '../Typography';

export interface StrongProps
  extends Pick<TypographyProps, 'textTransform' | 'padding' | 'margin'>,
  ComponentPropsWithoutRef<'strong'> {}
