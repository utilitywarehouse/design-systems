import * as React from 'react';

import clsx from 'clsx';

import type { RadioGroupProps } from './RadioGroup.props';

import { BaseRadioGroup } from '../BaseRadioGroup';
import { Flex } from '../Flex';

import { styled } from '../../theme';
import { PropsWithSx } from '../../types';
import { withGlobalPrefix } from '../../utils';

const componentName = 'RadioGroup';
const componentClassName = withGlobalPrefix(componentName);

const StyledElement = styled(Flex)({
  minWidth: 'fit-content',
  flexWrap: 'wrap',
  ':where([data-orientation="horizontal"] &)': {
    flexDirection: 'row',
  },
  ':where([data-orientation="vertical"] &)': {
    flexDirection: 'column',
  },
});

/**
 * The `RadioGroup` provides an accessible way to group and control a set of
 * `Radio` or `RadioTile` components, allowing the user to select one option
 * from a set. The `RadioGroup` is responsible for handling the value, helper
 * text, error state, error message, and disabled state, as well as determining
 * the presentation and selection of the items in the list. Follows the
 * [WAI-ARIA Radio Group Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/radio/) for radio
 * groups not contained in a toolbar.
 */
export const RadioGroup = React.forwardRef<HTMLDivElement, PropsWithSx<RadioGroupProps>>(
  ({ children, contentWidth = 'fit-content', direction = 'column', className, ...props }, ref) => {
    return (
      <BaseRadioGroup
        ref={ref}
        className={clsx(componentClassName, className)}
        {...props}
        orientation={direction === 'column' ? 'vertical' : 'horizontal'}
      >
        <StyledElement width={contentWidth} gap={2}>
          {children}
        </StyledElement>
      </BaseRadioGroup>
    );
  }
);

RadioGroup.displayName = componentName;
