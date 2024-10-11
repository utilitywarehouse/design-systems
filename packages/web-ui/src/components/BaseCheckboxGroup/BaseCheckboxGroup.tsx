import * as React from 'react';

import { useControllableState } from '@radix-ui/react-use-controllable-state';

import { BaseCheckboxGroupProvider } from './BaseCheckboxGroup.context';
import { BaseCheckboxGroupProps } from './BaseCheckboxGroup.props';

import { FormField } from '../FormField';

const componentName = 'BaseCheckboxGroup';

const BaseCheckboxGroup = React.forwardRef<HTMLFieldSetElement, BaseCheckboxGroupProps>(
  (
    { defaultValue, value: valueProp, required = false, onValueChange, children, ...props },
    ref
  ) => {
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
      required,
      value,
      onItemCheck: handleItemCheck,
      onItemUncheck: handleItemUncheck,
    };

    return (
      <FormField ref={ref} {...props}>
        <BaseCheckboxGroupProvider value={providerValue}>{children}</BaseCheckboxGroupProvider>
      </FormField>
    );
  }
);

BaseCheckboxGroup.displayName = componentName;

export { BaseCheckboxGroup };
