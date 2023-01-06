import * as React from 'react';
import { colors, fontWeights } from '@utilitywarehouse/customer-ui-design-tokens';
import {
  FormControlLabelProps,
  Radio as MuiRadio,
  RadioProps as MuiRadioProps,
  useRadioGroup as useMuiRadioGroup,
} from '@mui/material';
import { RadioGroupContext } from './RadioGroup';
import Typography, { TypographyProps } from '../Typography';
import Box from '../Box';
import { SelectionTileBackground } from './SelectionTile';

export interface RadioButtonProps
  extends Pick<
    MuiRadioProps,
    'onChange' | 'value' | 'checked' | 'disabled' | 'name' | 'required' | 'sx' | 'id' | 'inputRef'
  > {
  label: FormControlLabelProps['label'];
  basic?: boolean;
  textTransform?: TypographyProps['textTransform'];
}

export interface RadioIndicatorProps
  extends Omit<RadioButtonProps, 'id' | 'basic' | 'textTransform' | 'label'> {
  id: RadioButtonProps['id'];
}

const RadioIndicator = (props: RadioIndicatorProps) => <MuiRadio {...props} />;
const DefaultRadioIndicator = (props: RadioIndicatorProps) => (
  <MuiRadio
    {...props}
    disableRipple
    disableFocusRipple
    disableTouchRipple
    sx={{
      padding: 2,
      paddingRight: 0,
      marginRight: 1,
      '&:hover': {
        backgroundColor: 'transparent',
      },
    }}
  />
);
const BasicRadioIndicator = (props: RadioIndicatorProps) => (
  <MuiRadio {...props} sx={{ padding: 1 }} />
);

export interface RadioLabelProps extends Omit<TypographyProps, 'variant'> {
  htmlFor?: string | false;
  disabled?: boolean;
  checked?: boolean;
}

const RadioLabel = ({ disabled, checked, sx, children, ...props }: RadioLabelProps) => {
  return (
    <Typography
      variant="body"
      {...props}
      sx={{
        boxSizing: 'content-box',
        color: disabled ? colors.codGray40 : undefined,
        fontWeight: checked ? fontWeights.secondary.semibold : fontWeights.secondary.regular,
        cursor: 'pointer',
        // Note: this is to account for the layout shift when
        // transitioning between semibold and regular fontweights.
        '&::after': {
          display: 'block',
          content: `"${children}"`,
          fontWeight: fontWeights.secondary.semibold,
          height: '1px',
          color: 'transparent',
          overflow: 'hidden',
          visibility: 'hidden',
        },
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
};

const RadioButton = React.forwardRef<HTMLInputElement, RadioButtonProps>(function RadioButton(
  { label, value, checked, disabled, basic, textTransform, ...props },
  ref
) {
  const id = props.id || `cwui-radio-button-${value}`;

  const muiRadioGroup = useMuiRadioGroup();
  if (muiRadioGroup) {
    checked = muiRadioGroup.value === value;
  }

  const radioGroup = React.useContext(RadioGroupContext);
  // the value on the RadioButton should override the context value
  if (basic === undefined && radioGroup?.basic !== undefined) {
    basic = radioGroup.basic;
  }
  if (disabled === undefined && radioGroup?.disabled !== undefined) {
    disabled = radioGroup.disabled;
  }
  if (disabled) {
    checked = false;
  }
  if (textTransform === undefined && radioGroup?.textTransform !== undefined) {
    textTransform = radioGroup.textTransform;
  }

  const baseStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    cursor: 'pointer',
    verticalAlign: 'middle',
  };
  const basicRadioContainerStyles = disabled
    ? baseStyles
    : {
        ...baseStyles,
        '&:hover': {
          '.MuiRadio-root': {
            color: colors.cyan30,
          },
        },
      };

  if (basic) {
    return (
      <Box sx={basicRadioContainerStyles}>
        <BasicRadioIndicator
          {...props}
          id={id}
          value={value}
          checked={checked}
          disabled={disabled}
          inputRef={ref}
        />
        <RadioLabel
          component="label"
          disabled={!!disabled}
          htmlFor={id}
          checked={checked}
          textTransform={textTransform}
        >
          {label}
        </RadioLabel>
      </Box>
    );
  }

  return (
    <SelectionTileBackground checked={checked} disabled={!!disabled}>
      <DefaultRadioIndicator
        {...props}
        id={id}
        value={value}
        checked={checked}
        disabled={disabled}
        inputRef={ref}
      />
      <RadioLabel
        component="label"
        disabled={!!disabled}
        htmlFor={id}
        checked={checked}
        textTransform={textTransform}
        sx={{
          height: 56, // includes 32px padding, without this the height is 25px and I don't know why
          padding: 2,
          paddingLeft: 0,
        }}
      >
        {label}
      </RadioLabel>
    </SelectionTileBackground>
  );
});

export { RadioLabel, RadioIndicator };
export default RadioButton;
