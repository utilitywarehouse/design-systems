import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiToggleButton, {
  ToggleButtonProps as MuiToggleButtonProps,
} from '@mui/material/ToggleButton';
import { colors, fonts, fontWeights } from '@utilitywarehouse/customer-ui-design-tokens';
import { dataAttributes, px } from '../utils';

const StyledMuiToggleButton = styled(MuiToggleButton)(({ theme }) => {
  const { inverse } = dataAttributes;
  return {
    border: 0,
    padding: `${theme.spacing(0.5)} ${theme.spacing(3)}`,
    borderRadius: px(32),
    fontFamily: fonts.secondary,
    fontWeight: fontWeights.secondary.semibold,
    fontSize: 16,
    lineHeight: 1.5,
    color: colors.midnight,
    '&:focus, &:active': {
      backgroundColor: colors.cyan50,
    },
    '&:hover': {
      backgroundColor: colors.cyan20,
    },
    '&:disabled': {
      color: colors.codGray70,
      border: 'none',
    },
    '&.Mui-selected, &.Mui-selected:hover': {
      backgroundColor: colors.cyan,
      '&:disabled': {
        backgroundColor: colors.codGray20,
      },
    },
    [`[data-${inverse}=true] &`]: {
      color: colors.white,
      '&:disabled': {
        color: colors.codGray40,
      },
      '&.Mui-selected, &:hover, &:focus, &:active': {
        color: colors.midnight,
        '&:disabled': {
          color: colors.codGray80,
          backgroundColor: colors.codGray30,
        },
      },
    },
  };
});

export type ToggleButtonProps = Pick<
  MuiToggleButtonProps,
  | 'value'
  | 'children'
  | 'classes'
  | 'className'
  | 'disabled'
  | 'fullWidth'
  | 'onChange'
  | 'onClick'
  | 'selected'
  | 'sx'
>;

export const ToggleButton = React.forwardRef<HTMLButtonElement, ToggleButtonProps>(
  function ToggleButton({ children, className, ...props }, ref) {
    return (
      <StyledMuiToggleButton
        ref={ref}
        disableTouchRipple
        disableRipple
        disableFocusRipple
        {...props}
        className={className}
      >
        {children}
      </StyledMuiToggleButton>
    );
  }
);
