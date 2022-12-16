import * as React from 'react';
import { colors } from '@utilitywarehouse/customer-ui-design-tokens';
import {
  RadioProps as MuiRadioProps,
  useRadioGroup as useMuiRadioGroup,
  FormControlLabelProps as MuiFormControlLabelProps,
} from '@mui/material';
import { RadioGroupContext } from './RadioGroup';
import { TypographyProps } from '../Typography';
import { RadioIndicator, RadioLabel } from './RadioButton';
import Background, { BackgroundProps } from '../Background';
import { px } from '../utils';

export interface SelectionTileBackgroundProps extends Omit<BackgroundProps, 'backgroundColor'> {
  checked?: boolean;
  disabled: boolean;
}

export const SelectionTileBackground = ({
  checked,
  disabled,
  sx,
  ...props
}: SelectionTileBackgroundProps) => {
  const baseStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    borderRadius: 1,
    borderWidth: px(2),
    borderStyle: 'solid',
    borderColor: colors.codGray20,
  };
  const styles = disabled
    ? baseStyles
    : {
        ...baseStyles,
        backgroundColor: checked ? colors.cyan20 : colors.white,
        borderColor: checked ? colors.cyan : colors.codGray20,
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: colors.cyan10,
          borderColor: colors.cyan30,
          '.MuiRadio-root': {
            color: colors.cyan30,
          },
        },
      };
  return <Background backgroundColor="white" sx={{ ...styles, ...sx }} {...props} />;
};

export interface SelectionTileProps
  extends Pick<
    MuiRadioProps,
    'onChange' | 'value' | 'checked' | 'disabled' | 'id' | 'name' | 'required' | 'sx'
  > {
  label?: MuiFormControlLabelProps['label'];
  children?: React.ReactNode;
  textTransform?: TypographyProps['textTransform'];
}

const SelectionTile = React.forwardRef<HTMLInputElement, SelectionTileProps>(function SelectionTile(
  { value, checked, disabled, label, textTransform, sx, children, ...props },
  ref
) {
  const id = props.id || `cwui-selection-tile-${value}`;

  const muiRadioGroup = useMuiRadioGroup();
  if (muiRadioGroup) {
    checked = muiRadioGroup.value === value;
  }

  const radioGroup = React.useContext(RadioGroupContext);
  // the value on the RadioButton should override the context value
  if (disabled === undefined && radioGroup?.disabled !== undefined) {
    disabled = radioGroup.disabled;
  }
  if (disabled) {
    checked = false;
  }
  if (textTransform === undefined && radioGroup?.textTransform !== undefined) {
    textTransform = radioGroup.textTransform;
  }

  return (
    <SelectionTileBackground
      checked={checked}
      disabled={!!disabled}
      sx={{ display: 'inline-flex', alignItems: 'center', ...sx }}
    >
      <RadioIndicator
        {...props}
        id={id}
        value={value}
        checked={checked}
        disabled={disabled}
        inputRef={ref}
        aria-hidden={true}
        sx={{
          opacity: 0,
          position: 'absolute',
          pointerEvents: 'none',
        }}
      />
      {!children && !!label ? (
        <RadioLabel
          component="label"
          disabled={!!disabled}
          checked={checked}
          htmlFor={id}
          sx={{ padding: 2 }}
        >
          {label}
        </RadioLabel>
      ) : (
        children
      )}
    </SelectionTileBackground>
  );
});

export default SelectionTile;
