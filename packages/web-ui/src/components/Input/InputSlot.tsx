import * as React from 'react';

import clsx from 'clsx';

import { InputSlotProps } from './InputSlot.props';

import { Box } from '../Box';

import { DATA_ATTRIBUTES } from '../../helpers';
import type { PropsWithSx } from '../../types';
import { withGlobalPrefix } from '../../utils';

const componentName = 'InputSlot';
const componentClassName = withGlobalPrefix(componentName);

export const InputSlot = React.forwardRef<
  React.ElementRef<'div'>,
  React.PropsWithChildren<PropsWithSx<InputSlotProps>>
>(({ className, children, placement, ...props }, ref) => {
  const dataAttributeProps = {
    [DATA_ATTRIBUTES.placement]: placement === 'suffix' ? placement : undefined,
  };
  return (
    <Box
      ref={ref}
      className={clsx(componentClassName, className)}
      {...props}
      {...dataAttributeProps}
    >
      {children}
    </Box>
  );
});

InputSlot.displayName = componentName;
