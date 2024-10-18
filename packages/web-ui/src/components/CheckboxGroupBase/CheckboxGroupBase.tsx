import * as React from 'react';

import { useControllableState } from '@radix-ui/react-use-controllable-state';

import { CheckboxGroupBaseProvider } from './CheckboxGroupBase.context';
import { CheckboxGroupBaseProps } from './CheckboxGroupBase.props';

const componentName = 'CheckboxGroupBase';

export const CheckboxGroupBase = React.forwardRef<HTMLFieldSetElement, CheckboxGroupBaseProps>(
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

    return <CheckboxGroupBaseProvider value={providerValue}>{children}</CheckboxGroupBaseProvider>;
  }
);

CheckboxGroupBase.displayName = componentName;
