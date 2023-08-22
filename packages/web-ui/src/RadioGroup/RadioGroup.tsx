import { forwardRef } from 'react';
import { Box, BoxProps } from '../Box';
import {PropsWithSx} from '../types';
import { BaseRadioGroupProps, RadioGroupFormControl } from './RadioGroupFormControl';

export interface RadioGroupProps extends BaseRadioGroupProps {
  /** The direction of the radios, will also set the aria-orientation value. */
  direction?: 'column' | 'row';
  /**
   * Set the width of the RadioGroup children, separate to the width of the
   * entire RadioGroup.
   */
  contentWidth?: BoxProps['width'];
}

/**
 * The `RadioGroup` provides an accessible way to group and control a set of
 * `Radio` or `RadioTile` components, allowing the user to select one option from a set.
 *
 * The `RadioGroup` is responsible for handling the value, helper text, error
 * state, error message, and disabled state, as well as determining the presentation and
 * selection of the items in the list.
 *
 * Follows the [WAI-ARIA Radio Group Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/radio/) for radio groups not contained in a toolbar.
 */
export const RadioGroup = forwardRef<HTMLDivElement, PropsWithSx<RadioGroupProps>>(
  (
    {
      children,
      contentWidth = 'fit-content',
      direction = 'column',
      orientation = 'vertical',
      ...props
    },
    ref
  ) => {
    return (
      <RadioGroupFormControl
        ref={ref}
        {...props}
        orientation={orientation || direction === 'column' ? 'vertical' : 'horizontal'}
      >
        <Box
          display="flex"
          gap={2}
          flexDirection={direction}
          minWidth="fit-content"
          width={contentWidth}
        >
          {children}
        </Box>
      </RadioGroupFormControl>
    );
  }
);
