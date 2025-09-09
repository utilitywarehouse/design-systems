import * as React from 'react';

import clsx from 'clsx';

import { Root } from '@radix-ui/react-radio-group';

import type { RadioGroupRootProps } from './RadioGroupRoot.props';

import { Flex } from '../Flex';

import { styled } from '../../theme';
import { PropsWithSx } from '../../types';
import { withGlobalPrefix } from '../../utils';

const componentName = 'RadioGroupRoot';
const componentClassName = withGlobalPrefix(componentName);

const StyledFlex = styled(Flex)({
  minWidth: 'fit-content',
  flexWrap: 'wrap',
  ':where([data-orientation="horizontal"])': {
    flexDirection: 'row',
  },
  ':where([data-orientation="vertical"])': {
    flexDirection: 'column',
  },
});

/**
 * The `RadioGroup` provides an accessible way to group and control a set of
 * `Radio` or `RadioTile` components, allowing the user to select one option
 * from a set.
 */
export const RadioGroupRoot = React.forwardRef<HTMLDivElement, PropsWithSx<RadioGroupRootProps>>(
  ({ id, disabled, children, direction = 'column', width, className, ...props }, ref) => {
    return (
      <Root
        ref={ref}
        asChild
        {...props}
        disabled={disabled}
        id={id}
        orientation={direction === 'column' ? 'vertical' : 'horizontal'}
        className={clsx(componentClassName, className)}
      >
        {/* @ts-expect-error - upgrade issue. TODO: Fix this */}
        <StyledFlex width={width} gap={2}>
          {children}
        </StyledFlex>
      </Root>
    );
  }
);

RadioGroupRoot.displayName = componentName;
