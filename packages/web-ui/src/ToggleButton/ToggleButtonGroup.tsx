import * as React from 'react';
import {
  ToggleButtonGroup as MuiToggleButtonGroup,
  ToggleButtonGroupProps as MuiToggleButtonGroupProps,
} from '@mui/material';
import { DATA_ATTRIBUTES, px } from '../utils';
import { colors } from '@utilitywarehouse/colour-system';
import { styled } from '../theme';
import { useBackground } from '../Box';

const StyledMuiToggleButtonGroup = styled(MuiToggleButtonGroup)(({ theme, disabled }) => {
  return {
    border: `2px solid ${disabled ? colors.grey200 : colors.cyan400}`,
    borderRadius: px(32),
    [`&[${DATA_ATTRIBUTES.bgcolorBrand}=true]`]: {
      '&:disabled': {
        borderColor: colors.grey400,
      },
    },
    '.MuiToggleButtonGroup-grouped': {
      '&:not(:last-of-type), &:not(first-of-type)': {
        margin: theme.spacing(0.25),
      },
      '&:not(:last-of-type), &:last-of-type': {
        borderRadius: px(32),
      },
      '&:first-of-type': {
        marginRight: 0,
      },
      '&:last-of-type': {
        marginLeft: 0,
      },
    },
  };
});

export type ToggleButtonGroupProps = Pick<
  MuiToggleButtonGroupProps,
  'children' | 'classes' | 'disabled' | 'fullWidth' | 'onChange' | 'value' | 'className' | 'sx'
>;

/**
 * > This component should be wrapped in a ThemeProvider
 */
export const ToggleButtonGroup = React.forwardRef<HTMLDivElement, ToggleButtonGroupProps>(
  function ToggleButtonGroup({ children, disabled, className, ...props }, ref) {
    const { isBrandBackground } = useBackground();
    const dataAttributeProps = {
      [DATA_ATTRIBUTES.bgcolorBrand]: isBrandBackground,
    };
    return (
      <StyledMuiToggleButtonGroup
        ref={ref}
        className={className}
        disabled={disabled}
        exclusive
        {...props}
        {...dataAttributeProps}
      >
        {children}
      </StyledMuiToggleButtonGroup>
    );
  }
);
