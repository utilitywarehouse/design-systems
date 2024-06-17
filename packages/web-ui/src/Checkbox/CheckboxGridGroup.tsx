import * as React from 'react';
import { getColumns, withGlobalPrefix } from '../utils';
import clsx from 'clsx';
import { BaseCheckboxGroup } from './BaseCheckboxGroup';
import { Box } from '../Box';
import { CheckboxGridGroupProps } from './CheckboxGridGroup.props';

const componentName = 'CheckboxGridGroup';
const componentClassName = withGlobalPrefix(componentName);

export const CheckboxGridGroup = React.forwardRef<HTMLFieldSetElement, CheckboxGridGroupProps>(
  ({ children, contentWidth = 'fit-content', columns = 2, className, ...props }, ref) => {
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
