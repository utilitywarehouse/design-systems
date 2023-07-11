import { forwardRef } from 'react';
import { Box } from '../Box';
import { StackProps } from '../Stack';
import { breakpoints } from '../tokens';
import { RadioGroupProps } from './RadioGroup';
import { Root } from '@radix-ui/react-radio-group';
import { FormControl } from '../FormControl';

export interface RadioGridGroupProps extends RadioGroupProps {
  /** Display the RadioGroup contents in a set number of columns */
  columns?: StackProps['spacing'];
}

/**
 * The RadioGridGroup provides an accessible way to group and control a set of
 * Radio components, allowing the user to select one option from a set.
 */
export const RadioGridGroup = forwardRef<HTMLDivElement, RadioGridGroupProps>(
  ({ children, contentWidth = 'fit-content', columns = 2, ...props }, ref) => {
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
      <Root asChild {...props} ref={ref}>
        <FormControl {...props}>
          <Box
            display="grid"
            gap={2}
            gridTemplateColumns={getColumns()}
            minWidth="fit-content"
            width={contentWidth}
          >
            {children}
          </Box>
        </FormControl>
      </Root>
    );
  }
);
