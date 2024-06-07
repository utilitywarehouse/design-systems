import React from 'react';
import { Input as GSInput, InputSlot } from '@gluestack-ui/themed';
import type InputProps from './Input.props';
import {
  WarningMediumContainedIcon,
  TickMediumContainedIcon,
} from '@utilitywarehouse/react-native-icons';
import { InputValidationIcon } from './styled-components';

const Input: React.FC<InputProps> = ({
  validationStatus,
  showValidationIcon = true,
  children,
  disabled,
  isReadOnly,
  isDisabled,
  ...props
}) => (
  <GSInput
    {...props}
    validationStatus={validationStatus}
    isInvalid={validationStatus === 'invalid'}
    isReadOnly={isReadOnly}
    isDisabled={disabled || isDisabled}
    // TODO: remove once Gluestack bug is fixed - https://github.com/gluestack/gluestack-ui/issues/2214
    sx={
      isReadOnly
        ? {
            px: 0,
            borderWidth: 0,
            py: 2,
          }
        : {
            px: '$4',
            borderWidth: 2,
          }
    }
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
  </GSInput>
);

export default Input;
