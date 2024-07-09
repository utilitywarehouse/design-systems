import * as React from 'react';
import { getColumns, withGlobalPrefix } from '../utils';
import clsx from 'clsx';
import { Box } from '../Box';
import { CheckboxGridGroupProps } from './CheckboxGridGroup.props';
import { BaseCheckboxGroup } from '../BaseCheckboxGroup';

const componentName = 'CheckboxGridGroup';
const componentClassName = withGlobalPrefix(componentName);

/**
 * Set of interactive buttons where multiple options can be selected at a time,
 * displayed in a grid layout. The `CheckboxGridGroup` uses a fieldset to group
 * related `Checkbox` controls. For displaying checkboxes in a column or row,
 * please use the `CheckboxGroup` component. The `CheckboxGridGroup` is
 * responsible for handling the value, helper text, error state, error message,
 * and disabled state, as well as determining the presentation and selection of
 * the items in the list.
 */
export const CheckboxGridGroup = React.forwardRef<HTMLFieldSetElement, CheckboxGridGroupProps>(
  ({ children, contentWidth = 'fit-content', columns = 2, className, ...props }, ref) => {
    console.log('columns', getColumns(columns));
    return (
      <BaseCheckboxGroup ref={ref} className={clsx(componentClassName, className)} {...props}>
        <Box
          display="grid"
          gap={2}
          gridTemplateColumns={getColumns(columns)}
          minWidth="fit-content"
          width={contentWidth}
        >
          {children}
        </Box>
      </BaseCheckboxGroup>
    );
  }
);

CheckboxGridGroup.displayName = componentName;
