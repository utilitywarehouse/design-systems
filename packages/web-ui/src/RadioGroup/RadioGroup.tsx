import { forwardRef } from 'react';
import { BoxProps } from '../Box';
import { Stack } from '../Stack';
import { type RadioGroupProps as RadixRadioGroupProps, Root } from '@radix-ui/react-radio-group';
import { FormControl, FormControlProps } from '../FormControl';

export interface BaseRadioGroupProps
  extends FormControlProps,
    Omit<RadixRadioGroupProps, 'children' | 'id' | 'dir'> {}

export interface RadioGroupProps extends BaseRadioGroupProps {
  direction?: 'column' | 'row';
  /** Set the width of the RadioGroup children, separate to the width of the entire RadioGroup. */
  contentWidth?: BoxProps['width'];
}

/**
 * The RadioGroup provides an accessible way to group and control a set of
 * RadioItem components, allowing the user to select one option from a set.
 */
export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
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
      <Root
        asChild
        {...props}
        orientation={orientation || direction === 'column' ? 'vertical' : 'horizontal'}
        ref={ref}
      >
        <FormControl {...props}>
          <Stack spacing={2} direction={direction} minWidth="fit-content" width={contentWidth}>
            {children}
          </Stack>
        </FormControl>
      </Root>
    );
  }
);
