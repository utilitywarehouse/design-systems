import React from 'react';
import { styled } from '@mui/material/styles';
import MuiToggleButtonGroup, {
  ToggleButtonGroupProps as MuiToggleButtonGroupProps,
} from '@mui/material/ToggleButtonGroup';
import { colors } from '@utilitywarehouse/customer-ui-design-tokens';
import { useBackground } from './Background';
import { customerUiPrefix, isBrandBackgroundColor } from '../utils';
import clsx from 'clsx';
import { px } from '../utils';

const PREFIX = `${customerUiPrefix}-ToggleButtonGroup`;

const toggleButtonGroupClasses = {
  inverse: `${PREFIX}-inverse`,
};

const StyledMuiToggleButtonGroup = styled(MuiToggleButtonGroup)(({ theme, disabled }) => ({
  border: `2px solid ${disabled ? colors.codGray20 : colors.cyan}`,
  borderRadius: px(32),
  [`&.${toggleButtonGroupClasses.inverse}`]: {
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
}));

export type ToggleButtonGroupProps = Pick<
  MuiToggleButtonGroupProps,
  'children' | 'classes' | 'disabled' | 'fullWidth' | 'onChange' | 'sx' | 'value' | 'className'
>;

const ToggleButtonGroup = React.forwardRef<HTMLDivElement, ToggleButtonGroupProps>(
  function ToggleButtonGroup({ children, disabled, className, ...props }, ref) {
    const { backgroundColor } = useBackground();

    const classNames = clsx(className, {
      [toggleButtonGroupClasses.inverse]: isBrandBackgroundColor(backgroundColor),
    });

    return (
      <StyledMuiToggleButtonGroup
        ref={ref}
        className={classNames}
        disabled={disabled}
        exclusive={true}
        {...props}
      >
        {children}
      </StyledMuiToggleButtonGroup>
    );
  }
);

export default ToggleButtonGroup;
