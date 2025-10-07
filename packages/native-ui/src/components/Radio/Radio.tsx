import { createRadio } from '@gluestack-ui/radio';
import { View } from 'react-native-reanimated/lib/typescript/Animated';
import { StyleSheet } from 'react-native-unistyles';
import { useFormFieldContext } from '../FormField';
import { Helper } from '../Helper';
import RadioProps from './Radio.props';
import { useRadioGroupContext } from './RadioGroup.context';
import StyledRadioGroup from './RadioGroupRoot';
import StyledRadioIcon from './RadioIcon';
import StyledRadioIndicator from './RadioIndicator';
import StyledRadioLabel from './RadioLabel';
import StyledRadio from './RadioRoot';

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

const Radio = ({
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
}: RadioProps) => {
  const { validationStatus: fieldValidationStatus } = useFormFieldContext();
  const { validationStatus: groupValidationStatus } = useRadioGroupContext();
  const validationStatus =
    fieldValidationStatus ?? groupValidationStatus ?? validation ?? 'initial';
  return (
    <RadioComponent {...props} isDisabled={disabled}>
      {children ? (
        children
      ) : (
        <>
          <RadioIndicator>
            <RadioIcon />
          </RadioIndicator>
          <View style={styles.wrapper}>
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
          </View>
        </>
      )}
    </RadioComponent>
  );
};

const styles = StyleSheet.create(theme => ({
  wrapper: {
    flexDirection: 'column',
    gap: theme.space['50'],
  },
}));

Radio.displayName = 'Radio';

export { Radio, RadioGroup, RadioIcon, RadioIndicator, RadioLabel };

export default Radio;
