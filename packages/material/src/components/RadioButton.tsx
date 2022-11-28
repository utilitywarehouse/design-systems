import * as React from 'react';
import { colors } from '@utilitywarehouse/customer-ui-design-tokens';
import {
  FormControlLabel,
  FormControlLabelProps,
  Radio,
  RadioProps,
  styled,
  useRadioGroup,
} from '@mui/material';
import Typography from './Typography';
import Background from './Background';

export interface RadioButtonProps
  extends Pick<
    RadioProps,
    'onChange' | 'value' | 'checked' | 'disabled' | 'id' | 'name' | 'required' | 'sx' | 'color'
  > {
  label: FormControlLabelProps['label'];
}

const StyledFormControlLabel = styled(FormControlLabel)(() => ({
  width: '100%',
  height: 24,
  margin: 0,
}));

const StyledRadio = styled(Radio)(() => ({
  color: colors.codGray20,
  height: 24,
  width: 24,
  marginRight: 8,
}));

const StyledBox = styled(Background, {
  shouldForwardProp: prop => prop !== 'checked' && prop !== 'disabled',
})<{ checked: boolean | undefined; disabled: boolean }>(({ theme, checked, disabled }) => {
  const baseStyle = {
    maxHeight: 24,
    display: 'flex',
    padding: 16,
    borderRadius: theme.spacing(1),
    borderWidth: '2px',
    borderColor: `${checked && !disabled ? colors.cyan : colors.codGray20}`,
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

const RadioButton: ({ label, value, checked, disabled }: RadioButtonProps) => JSX.Element = ({
  label,
  value,
  checked,
  disabled = false,
  ...props
}: RadioButtonProps) => {
  const radioGroup = useRadioGroup();

  if (radioGroup) {
    checked = radioGroup.value === value;
  }

  return (
    <StyledBox checked={checked} disabled={disabled}>
      <StyledFormControlLabel
        disableTypography={disabled}
        value={value}
        control={
          <StyledRadio
            {...props}
            color="secondary"
            checked={checked}
            disableRipple
            disabled={disabled}
          />
        }
        label={
          <Typography
            variant="body"
            component="span"
            fontWeight={checked ? 'semibold' : 'regular'}
            sx={disabled ? { color: colors.codGray40 } : {}}
          >
            {label}
          </Typography>
        }
      />
    </StyledBox>
  );
};
export default RadioButton;
