import React from 'react';
import { createInput } from '@gluestack-ui/input';
import { Icon, Slot, Root, StyledInput } from './styled-components';
import type InputProps from './Input.props';
import {
  WarningMediumContainedIcon,
  TickMediumContainedIcon,
} from '@utilitywarehouse/react-native-icons';
import { InputValidationIcon } from './styled-components';

export const AccessibleInput = createInput({
  Icon,
  Slot,
  Root,
  Input: StyledInput,
});

const Input: React.FC<InputProps> = ({
  validationStatus,
  showValidationIcon = true,
  children,
  disabled,
  isReadOnly,
  isDisabled,
  ...props
}) => {
  return (
    <AccessibleInput
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
              backgroundColor: 'transparent',
            }
          : {
              px: '$4',
              borderWidth: 2,
              backgroundColor: '$white',
              ':disabled': {
                backgroundColor: '$grey50',
              },
              _dark: {
                backgroundColor: '$darkGrey25',
                ':disabled': {
                  backgroundColor: '$darkGrey50',
                },
              },
            }
      }
    >
      {children}
      {showValidationIcon && validationStatus === 'invalid' && (
        <AccessibleInput.Slot>
          <InputValidationIcon as={WarningMediumContainedIcon} />
        </AccessibleInput.Slot>
      )}
      {showValidationIcon && validationStatus === 'valid' && (
        <AccessibleInput.Slot>
          <InputValidationIcon as={TickMediumContainedIcon} />
        </AccessibleInput.Slot>
      )}
    </AccessibleInput>
  );
};

export default Input;
