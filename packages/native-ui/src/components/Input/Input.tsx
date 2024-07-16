import React from 'react';
import { createInput } from '@gluestack-ui/input';
import { Icon, Slot, Root, StyledInput } from './styled-components';
import type InputProps from './Input.props';
import {
  WarningMediumContainedIcon,
  TickMediumContainedIcon,
} from '@utilitywarehouse/react-native-icons';
import { InputValidationIcon } from './styled-components';
import { useFormFieldContext } from '../FormField';

// TODO: remove once upgraded to typescript 5.5
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AccessibleInput: any = createInput({
  Icon,
  // TODO: remove once upgraded to typescript 5.5
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
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
  const formFieldContext = useFormFieldContext();
  const validationStatusFromContext = formFieldContext?.validationStatus;
  return (
    <AccessibleInput
      {...props}
      validationStatus={validationStatusFromContext || validationStatus}
      isInvalid={(validationStatusFromContext || validationStatus) === 'invalid'}
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
      {showValidationIcon && (validationStatusFromContext || validationStatus) === 'invalid' && (
        <AccessibleInput.Slot>
          <InputValidationIcon as={WarningMediumContainedIcon} />
        </AccessibleInput.Slot>
      )}
      {showValidationIcon && (validationStatusFromContext || validationStatus) === 'valid' && (
        <AccessibleInput.Slot>
          <InputValidationIcon as={TickMediumContainedIcon} />
        </AccessibleInput.Slot>
      )}
    </AccessibleInput>
  );
};

export default Input;
