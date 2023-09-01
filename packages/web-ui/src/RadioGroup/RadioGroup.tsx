import { forwardRef } from 'react';
import { Box } from '../Box';
import { PropsWithSx } from '../types';
import { globalPrefix } from '../utils';
import { RadioGroupProps } from './RadioGroup.props';
import { RadioGroupFormControl } from './RadioGroupFormControl';
import clsx from 'clsx';

const displayName = 'RadioGroup';
const componentClassName = `${globalPrefix}-${displayName}`;

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
      className,
      ...props
    },
    ref
  ) => {
    return (
      <RadioGroupFormControl
        ref={ref}
        className={clsx(componentClassName, className)}
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

RadioGroup.displayName = displayName;
