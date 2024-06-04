import React from 'react';
import { Input as GSInput, InputSlot } from '@gluestack-ui/themed';
import type InputProps from './Input.props';
import {
  WarningMediumContainedIcon,
  TickMediumContainedIcon,
} from '@utilitywarehouse/react-native-icons';
import { InputValidationIcon } from './styled-components';

const Input: React.FC<InputProps> = ({
  children,
  validationStatus,
  showValidationIcon = true,
  ...props
}) => {
  return (
    <GSInput {...props} validationStatus={validationStatus}>
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
};

export default Input;
