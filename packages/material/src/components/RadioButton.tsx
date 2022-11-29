import * as React from 'react';
import { colors, fontWeights } from '@utilitywarehouse/customer-ui-design-tokens';
import {
  FormControlLabel,
  FormControlLabelProps,
  Radio,
  RadioProps,
  useRadioGroup as useMuiRadioGroup,
  styled,
} from '@mui/material';
import Typography, { TypographyProps } from './Typography';
import Background from './Background';
import { px } from '../utils';
import { RadioGroupContext } from './RadioGroup';

export interface RadioButtonProps
  extends Pick<
    RadioProps,
    'onChange' | 'value' | 'checked' | 'disabled' | 'id' | 'name' | 'required' | 'sx'
  > {
  label: FormControlLabelProps['label'];
  hideTile?: boolean;
}

const StyledFormControlLabel = styled(FormControlLabel)({
  margin: 0,
});

const StyledRadio = styled(Radio)(({ theme }) => ({
  color: colors.codGray20,
  padding: 0,
  marginRight: theme.spacing(1),
  paddingLeft: theme.spacing(2),
}));

const StyledLabel = styled(Typography, {
  shouldForwardProp: prop => prop !== 'disabled',
})<TypographyProps & { disabled: boolean; hideTile: RadioButtonProps['hideTile'] }>(
  ({ children, disabled, hideTile, theme }) => ({
    padding: hideTile ? 0 : theme.spacing(2),
    paddingLeft: 0,
    color: disabled ? colors.codGray40 : undefined,
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
  })
);

const StyledBox = styled(Background, {
  shouldForwardProp: prop => prop !== 'checked' && prop !== 'disabled',
})<{ checked?: boolean; disabled: boolean }>(({ theme, checked, disabled }) => {
  const baseStyle = {
    borderRadius: theme.spacing(1),
    borderWidth: px(2),
    borderColor: checked && !disabled ? colors.cyan : colors.codGray20,
    borderStyle: 'solid',
    backgroundColor: colors.white,
  };

  return disabled
    ? {
        ...baseStyle,
      }
    : {
        ...baseStyle,
        cursor: 'pointer',
        '&:hover': {
          '.MuiRadio-root': {
            color: colors.cyan30,
          },
          background: colors.cyan10,
          borderColor: colors.cyan30,
        },
        '&:focus': {
          background: colors.cyan20,
          borderColor: colors.cyan40,
        },
      };
});

const RadioButton = React.forwardRef<HTMLInputElement, RadioButtonProps>(function RadioButton(
  { label, value, checked, disabled, hideTile, ...props },
  ref
) {
  const muiRadioGroup = useMuiRadioGroup();
  if (muiRadioGroup) {
    checked = muiRadioGroup.value === value;
  }

  const radioGroup = React.useContext(RadioGroupContext);
  // the value on the RadioButton should override the context value
  if (hideTile === undefined && radioGroup?.hideTile !== undefined) {
    hideTile = radioGroup.hideTile;
  }
  if (disabled === undefined && radioGroup?.disabled !== undefined) {
    disabled = radioGroup.disabled;
  }
  if (disabled) {
    checked = false;
  }

  const RadioButtonInner = (
    <StyledFormControlLabel
      disableTypography
      value={value}
      control={
        <StyledRadio
          {...props}
          color="secondary"
          checked={checked}
          disableRipple
          disabled={disabled}
          inputRef={ref}
        />
      }
      label={
        <StyledLabel
          hideTile={hideTile}
          variant="body"
          component="span"
          fontWeight={checked ? 'semibold' : 'regular'}
          disabled={!!disabled}
        >
          {label}
        </StyledLabel>
      }
    />
  );

  if (hideTile) {
    return RadioButtonInner;
  }

  return (
    <StyledBox checked={checked} disabled={!!disabled}>
      {RadioButtonInner}
    </StyledBox>
  );
});

export default RadioButton;
