import React, { forwardRef, useMemo } from 'react';
import { RadioGroup as RadioGroupComponent } from './Radio';
import RadioGroupProps from './RadioGroup.props';
import { RadioGroupContext } from './RadioGroup.context';
import { View } from 'react-native';

const RadioGroup = forwardRef<View, RadioGroupProps>(
  ({ children, disabled, readonly, validationStatus, ...props }, ref) => {
    const value = useMemo(() => ({ disabled, validationStatus }), [disabled, validationStatus]);
    return (
      <RadioGroupContext.Provider value={value}>
        {/* @ts-expect-error - ref is not a valid prop for view */}
        <RadioGroupComponent ref={ref} {...props} isDisabled={disabled} isReadOnly={readonly}>
          {children}
        </RadioGroupComponent>
      </RadioGroupContext.Provider>
    );
  }
);

RadioGroup.displayName = 'RadioGroup';

export default RadioGroup;
