import * as React from 'react';
import { colors, fontWeights } from '@utilitywarehouse/customer-ui-design-tokens';
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
import { px } from '../utils';

export interface RadioButtonProps
  extends Pick<
    RadioProps,
    'onChange' | 'value' | 'checked' | 'disabled' | 'id' | 'name' | 'required' | 'sx'
  > {
  label: FormControlLabelProps['label'];
}

const StyledFormControlLabel = styled(FormControlLabel)({
  width: '100%',
  margin: 0,
});

const StyledRadio = styled(Radio)(({ theme }) => ({
  color: colors.codGray20,
  padding: 0,
  marginRight: theme.spacing(1),
  paddingLeft: theme.spacing(2),
}));

const StyledBox = styled(Background, {
  shouldForwardProp: prop => prop !== 'checked' && prop !== 'disabled',
})<{ checked: boolean | undefined; disabled: boolean }>(({ theme, checked, disabled }) => {
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
  { label, value, checked, disabled = false, ...props },
  ref
) {
  const radioGroup = useRadioGroup();

  if (radioGroup) {
    checked = radioGroup.value === value;
  }

  return (
    <StyledBox checked={checked} disabled={disabled}>
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
          <Typography
            variant="body"
            component="span"
            fontWeight={checked ? 'semibold' : 'regular'}
            sx={{
              padding: 2,
              paddingLeft: 0,
              color: disabled ? colors.codGray40 : undefined,
              // Note: this is to account for the layout shift when
              // transitioning between semibold and regular fontweights.
              '&::after': {
                display: 'block',
                content: `"${label}"`,
                fontWeight: fontWeights.secondary.semibold,
                height: '1px',
                color: 'transparent',
                overflow: 'hidden',
                visibility: 'hidden',
              },
            }}
          >
            {label}
          </Typography>
        }
      />
    </StyledBox>
  );
});
export default RadioButton;
