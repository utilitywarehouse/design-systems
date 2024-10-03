import React, { forwardRef, useMemo } from 'react';
import { RadioGroup as RadioGroupComponent } from './Radio';
import RadioGroupProps from './RadioGroup.props';
import { RadioGroupContext } from './RadioGroup.context';
import { View } from 'react-native';

const RadioGroup = forwardRef<View, RadioGroupProps>(
  ({ children, disabled, readonly, ...props }, ref) => {
    const value = useMemo(() => ({ disabled }), [disabled]);
    return (
      <RadioGroupContext.Provider value={value}>
        {/* @ts-ignore */}
        <RadioGroupComponent ref={ref} {...props} isDisabled={disabled} isReadOnly={readonly}>
          {children}
        </RadioGroupComponent>
      </RadioGroupContext.Provider>
    );
  }
);

export default RadioGroup;
