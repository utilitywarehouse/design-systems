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
  ({ children, label, disabled, ...props }, ref) => {
    return (
      // @ts-ignore
      <RadioComponent ref={ref} {...props} isDisabled={disabled}>
        {children ? (
          children
        ) : (
          <>
            <RadioIndicator>
              <RadioIcon />
            </RadioIndicator>
            <RadioLabel>{label}</RadioLabel>
          </>
        )}
      </RadioComponent>
    );
  }
);

Radio.displayName = 'Radio';

export { Radio, RadioGroup, RadioIndicator, RadioIcon, RadioLabel };

export default Radio;
