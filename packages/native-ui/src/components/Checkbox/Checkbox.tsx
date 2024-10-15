import React, { ElementRef } from 'react';
import { createCheckbox } from '@gluestack-ui/checkbox';
import StyledCheckbox from './CheckboxRoot';
import StyledCheckboxIndicator from './CheckboxIndicator';
import StyledCheckboxIcon from './CheckboxIcon';
import StyledCheckboxLabel from './CheckboxLabel';
import StyledCheckboxGroup from './CheckboxGroupRoot';
import { forwardRef } from 'react';
import CheckboxProps from './Checkbox.props';
import { Pressable } from 'react-native';

const CheckboxComponent = createCheckbox({
  Root: StyledCheckbox,
  Group: StyledCheckboxGroup,
  Indicator: StyledCheckboxIndicator,
  Icon: StyledCheckboxIcon,
  Label: StyledCheckboxLabel,
});

const CheckboxGroup = CheckboxComponent.Group;
const CheckboxIndicator = CheckboxComponent.Indicator;
const CheckboxIcon = CheckboxComponent.Icon;
const CheckboxLabel = CheckboxComponent.Label;

CheckboxGroup.displayName = 'CheckboxGroup';
CheckboxIndicator.displayName = 'CheckboxIndicator';
CheckboxIcon.displayName = 'CheckboxIcon';
CheckboxLabel.displayName = 'CheckboxLabel';

const Checkbox = forwardRef<ElementRef<typeof Pressable>, CheckboxProps>(
  ({ children, label, disabled, checked, ...props }, ref) => {
    return (
      // @ts-expect-error - ref is not a valid prop for Pressable
      <CheckboxComponent ref={ref} {...props} isDisabled={disabled} isChecked={checked}>
        {children ? (
          children
        ) : (
          <>
            <CheckboxIndicator>
              <CheckboxIcon />
            </CheckboxIndicator>
            {!!label && <CheckboxLabel>{label}</CheckboxLabel>}
          </>
        )}
      </CheckboxComponent>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export { Checkbox, CheckboxGroup, CheckboxIndicator, CheckboxIcon, CheckboxLabel };

export default Checkbox;
