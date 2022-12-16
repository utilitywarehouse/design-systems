import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiToggleButtonGroup, {
  ToggleButtonGroupProps as MuiToggleButtonGroupProps,
} from '@mui/material/ToggleButtonGroup';
import { colors } from '@utilitywarehouse/customer-ui-design-tokens';
import { dataAttributes, px } from '../utils';

const StyledMuiToggleButtonGroup = styled(MuiToggleButtonGroup)(({ theme, disabled }) => {
  const { inverse } = dataAttributes;
  return {
    border: `2px solid ${disabled ? colors.codGray20 : colors.cyan}`,
    borderRadius: px(32),
    [`[data-${inverse}=true] &`]: {
      '&:disabled': {
        borderColor: colors.codGray40,
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
  'children' | 'classes' | 'disabled' | 'fullWidth' | 'onChange' | 'sx' | 'value' | 'className'
>;

const ToggleButtonGroup = React.forwardRef<HTMLDivElement, ToggleButtonGroupProps>(
  function ToggleButtonGroup({ children, disabled, className, ...props }, ref) {
    return (
      <StyledMuiToggleButtonGroup
        ref={ref}
        className={className}
        disabled={disabled}
        exclusive
        {...props}
      >
        {children}
      </StyledMuiToggleButtonGroup>
    );
  }
);

export default ToggleButtonGroup;
