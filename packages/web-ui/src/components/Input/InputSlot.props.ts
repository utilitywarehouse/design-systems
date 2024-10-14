import type { ComponentPropsWithoutRef } from 'react';

export interface InputSlotProps extends ComponentPropsWithoutRef<'div'> {
  placement?: 'prefix' | 'suffix';
}
