import React, { forwardRef, useMemo } from 'react';
import { CheckboxGroup as CheckboxGroupComponent } from './Checkbox';
import CheckboxGroupProps from './CheckboxGroup.props';
import { CheckboxGroupContext } from './CheckboxGroup.context';
import { View } from 'react-native';

const CheckboxGroup = forwardRef<View, CheckboxGroupProps>(
  ({ children, disabled, readonly, validationStatus, ...props }, ref) => {
    const value = useMemo(() => ({ disabled, validationStatus }), [disabled, validationStatus]);
    return (
      <CheckboxGroupContext.Provider value={value}>
        {/* @ts-expect-error - ref is not a valid prop for view */}
        <CheckboxGroupComponent ref={ref} {...props} isDisabled={disabled} isReadOnly={readonly}>
          {children}
        </CheckboxGroupComponent>
      </CheckboxGroupContext.Provider>
    );
  }
);

CheckboxGroup.displayName = 'CheckboxGroup';

export default CheckboxGroup;
