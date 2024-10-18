import * as React from 'react';

import { useControllableState } from '@radix-ui/react-use-controllable-state';

import { BaseCheckboxGroupProvider } from './BaseCheckboxGroup.context';
import { BaseCheckboxGroupProps } from './BaseCheckboxGroup.props';

const componentName = 'BaseCheckboxGroup';

export const BaseCheckboxGroup = React.forwardRef<HTMLFieldSetElement, BaseCheckboxGroupProps>(
  ({ name, defaultValue, value: valueProp, onValueChange, children }) => {
    // useControllableState will handle whether controlled or uncontrolled
    const [value = [], setValue] = useControllableState({
      prop: valueProp,
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

    return <BaseCheckboxGroupProvider value={providerValue}>{children}</BaseCheckboxGroupProvider>;
  }
);

BaseCheckboxGroup.displayName = componentName;
