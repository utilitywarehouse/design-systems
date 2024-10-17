import React from 'react';
import { createInput } from '@gluestack-ui/input';
import type InputProps from './Input.props';

import InputRoot from './InputRoot';
import InputSlotComponent from './InputSlot';
import InputIconComponent from './InputIcon';
import InputFieldComponent from './InputField';
import InputValidationIcon from './InputValidationIcon';

export const InputComponent = createInput({
  Icon: InputIconComponent,
  Slot: InputSlotComponent,
  Root: InputRoot,
  Input: InputFieldComponent,
});

export const InputSlot = InputComponent.Slot;
export const InputField = InputComponent.Input;
export const InputIcon = InputComponent.Icon;

const Input: React.FC<InputProps> = ({
  validationStatus = 'initial',
  showValidationIcon = true,
  children,
  disabled,
  focused,
  readonly,
  ...props
}) => {
  return (
    <InputComponent
      {...props}
      validationStatus={validationStatus}
      isInvalid={validationStatus === 'invalid'}
      isReadOnly={readonly}
      isDisabled={disabled}
      isFocused={focused}
    >
      {children}
      {showValidationIcon && validationStatus !== 'initial' && (
        <InputSlot>
          <InputValidationIcon />
        </InputSlot>
      )}
    </InputComponent>
  );
};

export default Input;
