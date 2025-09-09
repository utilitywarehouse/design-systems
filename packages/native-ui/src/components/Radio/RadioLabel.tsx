import { StyleSheet } from 'react-native-unistyles';

import { useFormFieldContext } from '../FormField';
import { Label } from '../Label';
import LabelProps from '../Label/Label.props';
import { useRadioContext } from './Radio.context';

const RadioLabel = ({ children, style, ...props }: LabelProps) => {
  const { checked, disabled } = useRadioContext();
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

RadioLabel.displayName = 'RadioLabel';

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

export default RadioLabel;
