import { StyleSheet } from 'react-native-unistyles';
import { useFormFieldContext } from '../FormField';
import { Label } from '../Label';
import LabelProps from '../Label/Label.props';
import { useCheckboxContext } from './Checkbox.context';

const CheckboxLabel = ({ children, style, ...props }: LabelProps) => {
  const { checked, disabled } = useCheckboxContext();
  styles.useVariants({
    checked,
    disabled,
  });
  const { validationStatus } = useFormFieldContext();
  const isNested = !!validationStatus;
  return (
    <Label nested={isNested} {...props} style={[styles.text, style]}>
      {children}
    </Label>
  );
};

CheckboxLabel.displayName = 'CheckboxLabel';

const styles = StyleSheet.create(theme => ({
  text: {
    variants: {
      checked: {
        true: {
          color: theme.colors.grey1000,
        },
      },
      disabled: {
        true: {
          color: theme.colors.grey400,
        },
      },
    },
  },
}));

export default CheckboxLabel;
