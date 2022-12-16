import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiToggleButtonGroup, {
  ToggleButtonGroupProps as MuiToggleButtonGroupProps,
} from '@mui/material/ToggleButtonGroup';
import { colors } from '@utilitywarehouse/customer-ui-design-tokens';
import { dataAttributes, isInverseBackgroundColor, px } from '../utils';
import { useBackground } from '../Background';

const StyledMuiToggleButtonGroup = styled(MuiToggleButtonGroup)(({ theme, disabled }) => {
  const { inverse } = dataAttributes;
  return {
    border: `2px solid ${disabled ? colors.codGray20 : colors.cyan}`,
    borderRadius: px(32),
    [`&[data-${inverse}=true]`]: {
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
    const { backgroundColor } = useBackground();
    const inverse = isInverseBackgroundColor(backgroundColor);

    const dataAttributeProps = {
      [`data-${dataAttributes.inverse}`]: inverse,
    };

    return (
      <StyledMuiToggleButtonGroup
        ref={ref}
        className={className}
        disabled={disabled}
        exclusive={true}
        {...props}
        {...dataAttributeProps}
      >
        {children}
      </StyledMuiToggleButtonGroup>
    );
  }
);

export default ToggleButtonGroup;
