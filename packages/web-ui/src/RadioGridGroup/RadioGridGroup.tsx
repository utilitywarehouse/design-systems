import { forwardRef } from 'react';
import { Box } from '../Box';
import { RadioGroupFormControl } from '../RadioGroup/RadioGroupFormControl';
import { breakpoints } from '../tokens';
import { PropsWithSx } from '../types';
import { RadioGridGroupProps } from './RadioGridGroup.props';
import clsx from 'clsx';
import { getClassName } from '../utils';

const displayName = 'RadioGridGroup';
const componentClassName = getClassName(displayName);

/**
 * The `RadioGridGroup` provides an accessible way to group and control a set
 * of `Radio` or `RadioTile` components, displayed in a grid layout, allowing
 * the user to select one option from a set.
 *
 * For displaying radios in a column or row, please use the `RadioGroup` component.
 *
 * The `RadioGridGroup` is responsible for handling the value, helper text,
 * error state, error message, and disabled state, as well as determining the
 * presentation and selection of the items in the list.
 *
 * Follows the [WAI-ARIA Radio Group Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/radio/) for radio groups not contained in a toolbar.
 */
export const RadioGridGroup = forwardRef<HTMLDivElement, PropsWithSx<RadioGridGroupProps>>(
  ({ children, contentWidth = 'fit-content', columns = 2, className, ...props }, ref) => {
    const convert = (c: string) => `repeat(${c}, minmax(10px, 1fr))`;
    const getColumns = () => {
      if (Array.isArray(columns)) {
        return columns.map(s => convert(s as string));
      }
      if (typeof columns === 'object') {
        return Object.keys(breakpoints).reduce(
          (acc: { [key: string]: string }, breakpoint: string) => {
            if (columns[breakpoint] !== null) {
              acc[breakpoint] = convert(columns[breakpoint] as string);
            }
            return acc;
          },
          {}
        );
      }
      return convert(columns as string);
    };
    return (
      <RadioGroupFormControl ref={ref} className={clsx(componentClassName, className)} {...props}>
        <Box
          display="grid"
          gap={2}
          gridTemplateColumns={getColumns()}
          minWidth="fit-content"
          width={contentWidth}
        >
          {children}
        </Box>
      </RadioGroupFormControl>
    );
  }
);

RadioGridGroup.displayName = displayName;
