import * as React from 'react';

import clsx from 'clsx';
import { withGlobalPrefix } from '../../helpers/with-global-prefix';
import type { ElementRef } from 'react';
import { CheckboxGroupBase } from '../CheckboxGroupBase/CheckboxGroupBase';
import { Box } from '../Box/Box';
import { extractProps } from '../../helpers/extract-props';
import type { CheckboxGridGroupRootProps } from './CheckboxGridGroup.props';
import { columnsPropDefs } from '../../props/columns.props';

const componentName = 'CheckboxGridGroupRoot';
const componentClassName = withGlobalPrefix(componentName);

type CheckboxGridGroupRootElement = ElementRef<'div'>;

export const CheckboxGridGroupRoot = React.forwardRef<
  CheckboxGridGroupRootElement,
  CheckboxGridGroupRootProps
>(({ ...props }, ref) => {
  const {
    className,
    width,
    children,
    name,
    value,
    defaultValue,
    onValueChange,
    disabled,
    ...checkboxGridGroupRootProps
  } = extractProps(props, columnsPropDefs);
  const checkboxGroupBaseProps = { name, value, defaultValue, onValueChange, children };
  return (
    <Box
      ref={ref}
      className={clsx(componentClassName, className)}
      data-disabled={disabled ? '' : undefined}
      width={width}
      {...checkboxGridGroupRootProps}
    >
      <CheckboxGroupBase {...checkboxGroupBaseProps} />
    </Box>
  );
});

CheckboxGridGroupRoot.displayName = componentName;
