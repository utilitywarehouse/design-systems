import React from 'react';
import { createInput } from '@gluestack-ui/input';
import { Icon, Slot, StyledInput } from './styled-components';
import type InputProps from './Input.props';
import {
  WarningMediumContainedIcon,
  TickMediumContainedIcon,
} from '@utilitywarehouse/react-native-icons';
import { InputValidationIcon } from './styled-components';
import InputRoot from './InputRoot';
import InputSlotComponent from './InputSlot';

export const InputComponent = createInput({
  Icon,
  Slot: InputSlotComponent,
  Root: InputRoot,
  Input: StyledInput,
});

export const InputSlot = InputComponent.Slot;

const Input: React.FC<InputProps> = ({
  validationStatus,
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
      states={{}}
    >
      {children}
      {showValidationIcon && validationStatus === 'invalid' && (
        <InputSlot>
          <InputValidationIcon as={WarningMediumContainedIcon} />
        </InputSlot>
      )}
      {showValidationIcon && validationStatus === 'valid' && (
        <InputSlot>
          <InputValidationIcon as={TickMediumContainedIcon} />
        </InputSlot>
      )}
    </InputComponent>
  );
};

export default Input;
