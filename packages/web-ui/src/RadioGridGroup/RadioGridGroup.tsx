import * as React from 'react';
import { Box } from '../Box';
import { RadioGroupFormField } from '../RadioGroup/RadioGroupFormField';
import { PropsWithSx } from '../types';
import { RadioGridGroupProps } from './RadioGridGroup.props';
import clsx from 'clsx';
import { getColumns, withGlobalPrefix } from '../utils';

const componentName = 'RadioGridGroup';
const componentClassName = withGlobalPrefix(componentName);

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
 *
 * > This component does not need to be wrapped in a `ThemeProvider` and can be used standalone with other component libraries.
 */
export const RadioGridGroup = React.forwardRef<HTMLDivElement, PropsWithSx<RadioGridGroupProps>>(
  ({ children, contentWidth = 'fit-content', columns = 2, className, ...props }, ref) => {
    return (
      <RadioGroupFormField ref={ref} className={clsx(componentClassName, className)} {...props}>
        <Box
          display="grid"
          gap={2}
          gridTemplateColumns={getColumns(columns)}
          minWidth="fit-content"
          width={contentWidth}
        >
          {children}
        </Box>
      </RadioGroupFormField>
    );
  }
);

RadioGridGroup.displayName = componentName;
