import * as React from 'react';
import { forwardRef } from 'react';
import { PropsWithSx } from '../types';
import { DATA_ATTRIBUTES, withGlobalPrefix } from '../utils';
import { RadioGroupProps } from './RadioGroup.props';
import { RadioGroupFormControl } from './RadioGroupFormControl';
import clsx from 'clsx';
import { Flex } from '../Flex';
import { styled } from '../theme';

const displayName = 'RadioGroup';
const componentClassName = withGlobalPrefix(displayName);

const StyledElement = styled(Flex)({
  minWidth: 'fit-content',
  [`:where([${DATA_ATTRIBUTES.orientation}="horizontal"] &)`]: {
    flexDirection: 'row',
  },
  [`:where([${DATA_ATTRIBUTES.orientation}="vertical"] &)`]: {
    flexDirection: 'column',
  },
});

/**
 * The `RadioGroup` provides an accessible way to group and control a set of
 * `Radio` or `RadioTile` components, allowing the user to select one option from a set.
 *
 * The `RadioGroup` is responsible for handling the value, helper text, error
 * state, error message, and disabled state, as well as determining the presentation and
 * selection of the items in the list.
 *
 * Follows the [WAI-ARIA Radio Group Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/radio/) for radio groups not contained in a toolbar.
 *
 * > This component does not need to be wrapped in a `ThemeProvider` and can be used standalone with other component libraries.
 */
export const RadioGroup = forwardRef<HTMLDivElement, PropsWithSx<RadioGroupProps>>(
  ({ children, contentWidth = 'fit-content', direction = 'column', className, ...props }, ref) => {
    return (
      <RadioGroupFormControl
        ref={ref}
        className={clsx(componentClassName, className)}
        {...props}
        orientation={direction === 'column' ? 'vertical' : 'horizontal'}
      >
        <StyledElement width={contentWidth} gap={2}>
          {children}
        </StyledElement>
      </RadioGroupFormControl>
    );
  }
);

RadioGroup.displayName = displayName;
