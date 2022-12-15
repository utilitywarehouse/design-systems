import * as React from 'react';
import { colors, fontWeights } from '@utilitywarehouse/customer-ui-design-tokens';
import {
  FormControlLabelProps,
  Radio as MuiRadio,
  RadioProps as MuiRadioProps,
  useRadioGroup as useMuiRadioGroup,
  styled,
} from '@mui/material';
import Typography, { TypographyProps } from './Typography';
import Background from './Background';
import { px } from '../utils';
import { RadioGroupContext } from './RadioGroup';
import Box, { BoxProps } from './Box';

export interface RadioButtonProps
  extends Pick<
    MuiRadioProps,
    'onChange' | 'value' | 'checked' | 'disabled' | 'name' | 'required' | 'sx' | 'id'
  > {
  label: FormControlLabelProps['label'];
  basic?: boolean;
  textTransform?: TypographyProps['textTransform'];
}

export interface RadioIndicatorProps
  extends Omit<RadioButtonProps, 'id' | 'basic' | 'textTransform' | 'label'> {
  id: RadioButtonProps['id'];
}

const RadioIndicator = styled(MuiRadio)<RadioIndicatorProps>({
  color: colors.codGray20,
  '&.Mui-focusVisible, &.Mui-checked': {
    color: colors.cyan,
  },
});

export interface RadioLabelProps extends Omit<TypographyProps, 'component'> {
  htmlFor?: string | false;
  disabled?: boolean;
  checked?: boolean;
}

const RadioLabel = styled(Typography, {
  shouldForwardProp: prop => prop !== 'disabled' && prop !== 'checked',
})<RadioLabelProps>(({ children, disabled, checked }) => ({
  color: disabled ? colors.codGray40 : undefined,
  fontWeight: checked ? fontWeights.secondary.semibold : fontWeights.secondary.regular,
  height: 24, // without explicitly setting this the height defaults to 25px, and I don't know why
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
}));
RadioLabel.defaultProps = {
  component: 'label',
  variant: 'body',
};

export interface RadioTileProps extends BoxProps {
  checked?: boolean;
  disabled: boolean;
}

const RadioTile = styled(Background, {
  shouldForwardProp: prop => prop !== 'checked',
})<RadioTileProps>(({ theme, checked, disabled }) => {
  const baseStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    borderRadius: theme.spacing(1),
    borderWidth: px(2),
    borderStyle: 'solid',
    borderColor: colors.codGray20,
  };

  if (disabled) {
    return baseStyles;
  }

  return {
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
});
RadioTile.defaultProps = { backgroundColor: 'white' };

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
        <RadioIndicator
          {...props}
          id={id}
          value={value}
          checked={checked}
          disabled={disabled}
          inputRef={ref}
          sx={{ padding: 1 }}
        />
        <RadioLabel
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
    <RadioTile checked={checked} disabled={!!disabled}>
      <RadioIndicator
        {...props}
        id={id}
        disableRipple
        disableFocusRipple
        disableTouchRipple
        value={value}
        checked={checked}
        disabled={disabled}
        inputRef={ref}
        sx={{
          padding: 2,
          paddingRight: 0,
          marginRight: 1,
          '&:hover': {
            backgroundColor: 'transparent',
          },
        }}
      />
      <RadioLabel
        disabled={!!disabled}
        htmlFor={id}
        checked={checked}
        textTransform={textTransform}
        sx={{ padding: 2, paddingLeft: 0 }}
      >
        {label}
      </RadioLabel>
    </RadioTile>
  );
});

const Label = RadioLabel;
const Indicator = RadioIndicator;
const Tile = RadioTile;
const Item = RadioButton;

export { RadioLabel, Label, RadioIndicator, Indicator, RadioTile, Tile, Item };
export default RadioButton;
