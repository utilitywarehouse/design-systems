import * as React from 'react';
import { forwardRef } from 'react';

import { Root } from '@radix-ui/react-radio-group';

import { BaseRadioGroupProps } from './BaseRadioGroup.props';

import { FormField } from '../FormField';

import { PropsWithSx } from '../../types';

const componentName = 'BaseRadioGroup';

export const BaseRadioGroup = forwardRef<HTMLDivElement, PropsWithSx<BaseRadioGroupProps>>(
  ({ children, sx, disabled, ...props }, ref) => {
    return (
      <Root ref={ref} asChild {...props} disabled={disabled}>
        <FormField disabled={disabled} sx={sx}>
          {children}
        </FormField>
      </Root>
    );
  }
);

BaseRadioGroup.displayName = componentName;
