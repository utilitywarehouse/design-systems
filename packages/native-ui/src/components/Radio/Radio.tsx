import React, { ElementRef } from 'react';
import { createRadio } from '@gluestack-ui/radio';
import StyledRadio from './RadioRoot';
import StyledRadioIndicator from './RadioIndicator';
import StyledRadioIcon from './RadioIcon';
import StyledRadioLabel from './RadioLabel';
import StyledRadioGroup from './RadioGroupRoot';
import { forwardRef } from 'react';
import RadioProps from './Radio.props';
import { Pressable } from 'react-native';
import { Helper } from '../Helper';
import { useRadioGroupContext } from './RadioGroup.context';
import { useFormFieldContext } from '../FormField';
import { VStack } from '../VStack';

const RadioComponent = createRadio({
  Root: StyledRadio,
  Group: StyledRadioGroup,
  Indicator: StyledRadioIndicator,
  Icon: StyledRadioIcon,
  Label: StyledRadioLabel,
});

const RadioGroup = RadioComponent.Group;
const RadioIndicator = RadioComponent.Indicator;
const RadioIcon = RadioComponent.Icon;
const RadioLabel = RadioComponent.Label;

RadioGroup.displayName = 'RadioGroup';
RadioIndicator.displayName = 'RadioIndicator';
RadioIcon.displayName = 'RadioIcon';
RadioLabel.displayName = 'RadioLabel';

const Radio = forwardRef<ElementRef<typeof Pressable>, RadioProps>(
  (
    {
      children,
      label,
      disabled,
      helperIcon,
      helperText,
      invalidText,
      validText,
      validationStatus: validation,
      showValidationIcon,
      ...props
    },
    ref
  ) => {
    const { validationStatus: fieldValidationStatus } = useFormFieldContext();
    const { validationStatus: groupValidationStatus } = useRadioGroupContext();
    const validationStatus =
      fieldValidationStatus ?? groupValidationStatus ?? validation ?? 'initial';
    return (
      // @ts-expect-error - ref is not a valid prop for Pressable
      <RadioComponent ref={ref} {...props} isDisabled={disabled}>
        {children ? (
          children
        ) : (
          <>
            <RadioIndicator>
              <RadioIcon />
            </RadioIndicator>
            <VStack space="xs">
              {!!label && <RadioLabel>{label}</RadioLabel>}
              {!!helperText && <Helper disabled={disabled} icon={helperIcon} text={helperText} />}
              {validationStatus === 'invalid' && !!invalidText && (
                <Helper
                  showIcon={showValidationIcon}
                  disabled={disabled}
                  validationStatus="invalid"
                  text={invalidText}
                />
              )}
              {validationStatus === 'valid' && !!validText && (
                <Helper
                  disabled={disabled}
                  showIcon={showValidationIcon}
                  validationStatus="valid"
                  text={validText}
                />
              )}
            </VStack>
          </>
        )}
      </RadioComponent>
    );
  }
);

Radio.displayName = 'Radio';

export { Radio, RadioGroup, RadioIndicator, RadioIcon, RadioLabel };

export default Radio;
