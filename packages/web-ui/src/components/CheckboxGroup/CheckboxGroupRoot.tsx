import * as React from 'react';

import clsx from 'clsx';

import { CheckboxGroupRootProps } from './CheckboxGroupRoot.props';

import { CheckboxGroupBase } from '../CheckboxGroupBase';
import { Flex } from '../Flex';

import { styled } from '../../theme';
import { withGlobalPrefix } from '../../utils';

const componentName = 'CheckboxGroupRoot';
const componentClassName = withGlobalPrefix(componentName);

const StyledFlex = styled(Flex)({
  minWidth: 'fit-content',
  flexWrap: 'wrap',
  ':where([data-orientation="horizontal"])': {
    flexDirection: 'row',
  },
  ':where([data-orientation="vertical"])': {
    flexDirection: 'column',
  },
});

/**
 * Set of interactive buttons where multiple options can be selected at a time.
 */
export const CheckboxGroupRoot = React.forwardRef<HTMLDivElement, CheckboxGroupRootProps>(
  (
    {
      name,
      disabled,
      value,
      defaultValue,
      onValueChange,
      width = 'fit-content',
      direction = 'column',
      children,
      className,
      ...props
    },
    ref
  ) => {
    const checkboxGroupBaseProps = { name, value, defaultValue, onValueChange, children };
    return (
      <StyledFlex
        ref={ref}
        {...props}
        className={clsx(componentClassName, className)}
        data-orientation={direction === 'column' ? 'vertical' : 'horizontal'}
        data-disabled={disabled ? '' : undefined}
        width={width}
        gap={2}
      >
        <CheckboxGroupBase {...checkboxGroupBaseProps} />
      </StyledFlex>
    );
  }
);

CheckboxGroupRoot.displayName = componentName;
