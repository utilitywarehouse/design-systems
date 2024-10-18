import * as React from 'react';

import clsx from 'clsx';

import { useControllableState } from '@radix-ui/react-use-controllable-state';

import { CheckboxGroupRootProvider } from './CheckboxGroupRoot.context';
import { CheckboxGroupRootProps } from './CheckboxGroupRoot.props';

import { Flex } from '../Flex';

import { styled } from '../../theme';
import { withGlobalPrefix } from '../../utils';

const componentName = 'CheckboxGroup';
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
      value: providedValue,
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
    // useControllableState will handle whether controlled or uncontrolled
    const [value = [], setValue] = useControllableState({
      prop: providedValue,
      defaultProp: defaultValue,
      onChange: onValueChange,
    });

    const handleItemCheck = React.useCallback(
      (itemValue: string) => setValue((prevValue = []) => [...prevValue, itemValue]),
      [setValue]
    );

    const handleItemUncheck = React.useCallback(
      (itemValue: string) =>
        setValue((prevValue = []) => prevValue.filter(value => value !== itemValue)),
      [setValue]
    );

    const providerValue = {
      name,
      value,
      onItemCheck: handleItemCheck,
      onItemUncheck: handleItemUncheck,
    };

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
        <CheckboxGroupRootProvider value={providerValue}>{children}</CheckboxGroupRootProvider>
      </StyledFlex>
    );
  }
);

CheckboxGroupRoot.displayName = componentName;
