import React from 'react';
import { createInput } from '@gluestack-ui/input';
import type InputProps from './Input.props';

import InputRoot from './InputRoot';
import InputSlotComponent from './InputSlot';
import InputIconComponent from './InputIcon';
import InputFieldComponent from './InputField';
import InputValidationIcon from './InputValidationIcon';
import { useFormFieldContext } from '../FormField';

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
  type,
  ...props
}) => {
  const formFieldContext = useFormFieldContext();
  const validationStatusFromContext = formFieldContext?.validationStatus ?? validationStatus;
  return (
    <InputComponent
      {...(children ? props : {})}
      validationStatus={validationStatusFromContext}
      isInvalid={validationStatusFromContext === 'invalid'}
      isReadOnly={readonly}
      isDisabled={disabled}
      isFocused={focused}
    >
      {children ? (
        <>
          {children}
          {showValidationIcon && validationStatusFromContext !== 'initial' && (
            <InputSlot>
              <InputValidationIcon />
            </InputSlot>
          )}
        </>
      ) : (
        <>
          {leadingIcon && (
            <InputSlot>
              <InputIcon as={leadingIcon} />
            </InputSlot>
          )}
          <InputField type={type} {...props} />
          {showValidationIcon && validationStatusFromContext !== 'initial' && (
            <InputSlot>
              <InputValidationIcon />
            </InputSlot>
          )}
          {trailingIcon && (
            <InputSlot>
              <InputIcon as={trailingIcon} />
            </InputSlot>
          )}
        </>
      )}
    </InputComponent>
  );
};

export default Input;
