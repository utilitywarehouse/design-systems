import * as React from 'react';
import {
  ToggleButton as MuiToggleButton,
  ToggleButtonProps as MuiToggleButtonProps,
} from '@mui/material';
import { fonts, fontWeights } from '../tokens';
import { DATA_ATTRIBUTES, px } from '../utils';
import { colors, colorsCommon } from '@utilitywarehouse/colour-system';
import { styled } from '../theme';

const StyledMuiToggleButton = styled(MuiToggleButton)(({ theme }) => {
  return {
    border: 0,
    padding: `${theme.spacing(0.5)} ${theme.spacing(3)}`,
    borderRadius: px(32),
    fontFamily: fonts.secondary,
    fontWeight: fontWeights.secondary.semibold,
    fontSize: 16,
    lineHeight: 1.5,
    textTransform: 'none',
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
    [`:where([${DATA_ATTRIBUTES.inverted}] &)`]: {
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
  | 'value'
  | 'children'
  | 'classes'
  | 'disabled'
  | 'fullWidth'
  | 'onChange'
  | 'onClick'
  | 'selected'
  | 'sx'
  | 'className'
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

export default ToggleButton;
