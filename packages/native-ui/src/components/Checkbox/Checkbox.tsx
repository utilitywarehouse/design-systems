import { createCheckbox } from '@gluestack-ui/checkbox';
import { ElementRef, forwardRef } from 'react';
import { Pressable, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { useFormFieldContext } from '../FormField';
import { Helper } from '../Helper';
import CheckboxProps from './Checkbox.props';
import { useCheckboxGroupContext } from './CheckboxGroup.context';
import StyledCheckboxGroup from './CheckboxGroupRoot';
import StyledCheckboxIcon from './CheckboxIcon';
import StyledCheckboxIndicator from './CheckboxIndicator';
import StyledCheckboxLabel from './CheckboxLabel';
import StyledCheckbox from './CheckboxRoot';

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
  (
    {
      children,
      label,
      disabled,
      checked,
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
    const { validationStatus: groupValidationStatus } = useCheckboxGroupContext();
    const validationStatus =
      fieldValidationStatus ?? groupValidationStatus ?? validation ?? 'initial';
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
            <View style={styles.wrapper}>
              {!!label && <CheckboxLabel>{label}</CheckboxLabel>}
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
            </View>
          </>
        )}
      </CheckboxComponent>
    );
  }
);

Checkbox.displayName = 'Checkbox';

const styles = StyleSheet.create(theme => ({
  wrapper: {
    flexDirection: 'column',
    gap: theme.space['50'],
  },
}));

export { Checkbox, CheckboxGroup, CheckboxIcon, CheckboxIndicator, CheckboxLabel };

export default Checkbox;
