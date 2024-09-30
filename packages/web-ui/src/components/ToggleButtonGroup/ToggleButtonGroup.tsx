import * as React from 'react';

import {
  ToggleButtonGroup as MuiToggleButtonGroup,
  ToggleButtonGroupProps as MuiToggleButtonGroupProps,
} from '@mui/material';

import { colors } from '@utilitywarehouse/colour-system';

import { useBackground } from '../Box';

import { DATA_ATTRIBUTES, DATA_ATTRIBUTE_SELECTORS } from '../../helpers';
import { styled } from '../../theme';
import { px } from '../../utils';

export type ToggleButtonGroupProps = Pick<
  MuiToggleButtonGroupProps,
  'children' | 'classes' | 'disabled' | 'fullWidth' | 'onChange' | 'value' | 'className' | 'sx'
> & {
  /** Inverts the component colours, for use on darker backgrounds. */
  inverted?: boolean;
};

const StyledMuiToggleButtonGroup = styled(MuiToggleButtonGroup)(({ theme, disabled }) => {
  return {
    border: `2px solid ${disabled ? colors.grey200 : colors.cyan400}`,
    borderRadius: px(32),
    [DATA_ATTRIBUTE_SELECTORS.inverted]: {
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

/**
 */
export const ToggleButtonGroup = React.forwardRef<HTMLDivElement, ToggleButtonGroupProps>(
  function ToggleButtonGroup({ children, disabled, className, inverted, ...props }, ref) {
    const { isInvertedBackground } = useBackground();
    const dataAttributeProps = {
      [DATA_ATTRIBUTES.inverted]: inverted || isInvertedBackground ? '' : undefined,
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
