import * as React from 'react';

import clsx from 'clsx';

import { CheckboxGridGroupRootProps } from './CheckboxGridGroupRoot.props';

import { BaseCheckboxGroup } from '../BaseCheckboxGroup';
import { Box } from '../Box';
import { RadioGridGroupRootProps } from '../RadioGridGroup';

import { getColumns } from '../../helpers';
import { styled } from '../../theme';
import { px, withGlobalPrefix } from '../../utils';

const componentName = 'CheckboxGridGroupRoot';
const componentClassName = withGlobalPrefix(componentName);

const StyledBox = styled(Box, {
  shouldForwardProp: prop => prop !== 'columns',
})<{ columns: RadioGridGroupRootProps['columns'] }>(({ columns }) => {
  const gridTemplateColumns = getColumns(columns);
  return {
    display: 'grid',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gridTemplateColumns: gridTemplateColumns as any,
    gap: px(16),
    minWidth: 'fit-content',
  };
});

export const CheckboxGridGroupRoot = React.forwardRef<HTMLDivElement, CheckboxGridGroupRootProps>(
  (
    {
      name,
      value,
      defaultValue,
      onValueChange,
      children,
      width = 'fit-content',
      columns = 2,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseCheckboxGroupProps = { name, value, defaultValue, onValueChange, children };
    return (
      <StyledBox
        ref={ref}
        className={clsx(componentClassName, className)}
        {...props}
        data-disabled={disabled ? '' : undefined}
        columns={columns}
        width={width}
      >
        <BaseCheckboxGroup {...baseCheckboxGroupProps} />
      </StyledBox>
    );
  }
);

CheckboxGridGroupRoot.displayName = componentName;
