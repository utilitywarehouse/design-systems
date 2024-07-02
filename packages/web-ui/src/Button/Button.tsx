import * as React from 'react';
import { forwardRef } from 'react';
import MuiButton, { ButtonProps as MuiButtonProps, ExtendButton } from '@mui/material/Button';
import type { OverrideProps } from '@mui/material/OverridableComponent';
import { useBackground } from '../Box';
import { styled } from '@mui/material';
import { DATA_ATTRIBUTES, px } from '../utils';
import { fonts, fontWeights, transitions } from '../tokens';
import { colors, colorsCommon } from '@utilitywarehouse/colour-system';

export type DefaultButtonComponent = 'button';

export interface CustomButtonProps {
  /**
   * Sets the button's visual variant
   * @default primary
   */
  variant?: 'primary' | 'secondary' | 'tertiary';
  /**
   * Sets the button height. Does not apply to `tertiary` buttons.
   * @default medium
   */
  size?: 'small' | 'medium' | 'large';
}

export type ButtonTypeMap<P = object, D extends React.ElementType = DefaultButtonComponent> = {
  props: CustomButtonProps &
    Pick<MuiButtonProps<D, P>, 'sx' | 'classes' | 'fullWidth' | 'children' | 'href'>;
  defaultComponent: D;
};

export type ButtonProps<
  D extends React.ElementType = DefaultButtonComponent,
  P = object,
> = OverrideProps<ButtonTypeMap<P, D>, D>;

const borderWidth = 2;

const StyledButton = styled(MuiButton)({
  transition: `${transitions.duration}ms ${transitions.easingFunction}`,
  transitionProperty: 'background-color, border-color, color, opacity',
  fontFamily: fonts.secondary,
  fontWeight: fontWeights.secondary.semibold,
  fontSize: 18,
  lineHeight: 1,
  letterSpacing: '0.02857em',
  textTransform: 'none',
  opacity: 1,
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: px(32 - borderWidth),
  paddingRight: px(32 - borderWidth),
  borderStyle: 'solid',
  borderRadius: px(32),
  borderWidth,
  color: colorsCommon.brandMidnight,
  '&:disabled': {
    opacity: 0.5,
  },
  [`&[${DATA_ATTRIBUTES.bgcolorBrand}=true]`]: {
    '&:disabled': {
      opacity: 0.6,
    },
  },
  // size
  [`&[${DATA_ATTRIBUTES.size}=small]`]: {
    height: px(32),
  },
  [`&[${DATA_ATTRIBUTES.size}=medium]`]: {
    height: px(40),
  },
  [`&[${DATA_ATTRIBUTES.size}=large]`]: {
    height: px(48),
  },
  [`&[${DATA_ATTRIBUTES.variant}=primary]`]: {
    color: colorsCommon.brandMidnight,
    backgroundColor: colors.cyan400,
    border: 'none',
    paddingLeft: px(32),
    paddingRight: px(32),
    '&:hover': {
      backgroundColor: colors.cyan200,
    },
  },
  [`&[${DATA_ATTRIBUTES.variant}=secondary]`]: {
    color: colorsCommon.brandMidnight,
    backgroundColor: 'transparent',
    borderColor: colors.cyan400,
    '&:hover': {
      borderColor: colorsCommon.brandMidnight,
      borderWidth,
    },
    '&:disabled': {
      opacity: 0.5,
      borderWidth,
    },
    [`&[${DATA_ATTRIBUTES.bgcolorBrand}=true]`]: {
      color: colorsCommon.brandWhite,
      '&:hover': {
        borderColor: colorsCommon.brandWhite,
      },
    },
  },
  [`&[${DATA_ATTRIBUTES.variant}=tertiary]`]: {
    color: colorsCommon.brandMidnight,
    backgroundColor: 'transparent',
    borderColor: colors.cyan400,
    height: 'auto',
    paddingBottom: 2,
    paddingLeft: 0,
    paddingRight: 0,
    borderWidth: 0,
    borderBottomWidth: 2,
    borderRadius: 0,
    lineHeight: 1.333,
    '&:hover': {
      opacity: 0.5,
    },
    [`&[${DATA_ATTRIBUTES.bgcolorBrand}=true]`]: {
      color: colorsCommon.brandWhite,
    },
  },
});

/**
 * A Button should be used for actions.
 *
 * > This component should be wrapped in a ThemeProvider
 */
export const Button = forwardRef(function Button(
  { size = 'medium', variant = 'primary', ...props },
  ref
) {
  const { isInvertedBackground } = useBackground();
  const dataAttributeProps = {
    [DATA_ATTRIBUTES.variant]: variant,
    [DATA_ATTRIBUTES.size]: size,
    [DATA_ATTRIBUTES.bgcolorBrand]: isInvertedBackground,
  };
  return (
    <StyledButton
      {...(props as Partial<MuiButtonProps>)}
      ref={ref}
      {...dataAttributeProps}
      disableElevation
    />
  );
}) as ExtendButton<ButtonTypeMap>;
