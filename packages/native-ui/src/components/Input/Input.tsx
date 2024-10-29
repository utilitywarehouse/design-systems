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
  leadingIcon,
  trailingIcon,
  ...props
}) => {
  return (
    <InputComponent
      {...(children ? props : {})}
      validationStatus={validationStatus}
      isInvalid={validationStatus === 'invalid'}
      isReadOnly={readonly}
      isDisabled={disabled}
      isFocused={focused}
    >
      {children ? (
        children
      ) : (
        <>
          {leadingIcon && (
            <InputSlot>
              <InputIcon as={leadingIcon} />
            </InputSlot>
          )}
          <InputField {...props} />
          {trailingIcon && (
            <InputSlot>
              <InputIcon as={trailingIcon} />
            </InputSlot>
          )}
        </>
      )}
      {showValidationIcon && validationStatus !== 'initial' && (
        <InputSlot>
          <InputValidationIcon />
        </InputSlot>
      )}
    </InputComponent>
  );
};

export default Input;
