import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiToggleButton, {
  ToggleButtonProps as MuiToggleButtonProps,
} from '@mui/material/ToggleButton';
import { fonts, fontWeights } from '../tokens';
import { dataAttributes, px } from '../utils';
import { colors, colorsCommon } from '@utilitywarehouse/colour-system';
import { PropsWithStyleOverrides } from '../types';

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
    color: colorsCommon.brandMidnight,
    '&:focus, &:active': {
      backgroundColor: colors.cyan500,
    },
    '&:hover': {
      backgroundColor: colors.cyan100,
    },
    '&:disabled': {
      color: colors.grey800,
      border: 'none',
    },
    '&.Mui-selected, &.Mui-selected:hover': {
      backgroundColor: colors.cyan400,
      '&:disabled': {
        backgroundColor: colors.grey200,
      },
    },
    [`[data-${inverse}=true] &`]: {
      color: colorsCommon.brandWhite,
      '&:disabled': {
        color: colors.grey400,
      },
      '&.Mui-selected, &:hover, &:focus, &:active': {
        color: colorsCommon.brandMidnight,
        '&:disabled': {
          color: colors.grey800,
          backgroundColor: colors.grey300,
        },
      },
    },
  };
});

export type ToggleButtonProps = Pick<
  MuiToggleButtonProps,
  'value' | 'children' | 'classes' | 'disabled' | 'fullWidth' | 'onChange' | 'onClick' | 'selected'
>;

export const ToggleButton = React.forwardRef<
  HTMLButtonElement,
  PropsWithStyleOverrides<ToggleButtonProps>
>(function ToggleButton({ children, className, ...props }, ref) {
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
});
