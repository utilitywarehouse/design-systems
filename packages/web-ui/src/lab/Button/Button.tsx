import styled from '@emotion/styled';
import { colors, colorsCommon } from '@utilitywarehouse/colour-system';
import { ElementRef, forwardRef, PropsWithChildren } from 'react';
import { fonts, fontWeights } from '../../tokens';
import { PropsWithSx } from '../../types';
import { getClassName, px, pxToRem, spacing } from '../../utils';
import { ButtonProps } from './Button.props';
import clsx from 'clsx';

const componentName = 'Button';
const componentClassName = getClassName(componentName);

const StyledButton = styled('button', { label: componentClassName })<ButtonProps>(() => ({
  // reset
  appearance: 'none',
  boxSizing: 'border-box',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  flexShrink: 0,
  userSelect: 'none',
  verticalAlign: 'top',
  '-webkit-tap-highlight-color': 'transparent',
  // typography
  fontFamily: fonts.secondary,
  fontWeight: fontWeights.secondary.semibold,
  // border
  borderRadius: px(32),
  // colors
  [`&[data-colorscheme=cyan]`]: {
    '--variant-solid-color': colors.cyan1000,
    '--variant-solid-backgroundColor': colors.cyan400,
    '--variant-outline-color': colors.cyan1000,
    '--variant-outline-border-color': colors.cyan400,
  },
  [`&[data-colorscheme=grey]`]: {
    '--variant-outline-color': colors.grey1000,
    '--variant-outline-border-color': colors.grey500,
  },
  [`&[data-colorscheme=red]`]: {
    '--variant-solid-color': colorsCommon.brandWhite,
    '--variant-solid-backgroundColor': colors.red500,
    '--variant-outline-color': colors.red900,
    '--variant-outline-border-color': colors.red500,
  },
  [`&[data-colorscheme=green]`]: {
    '--variant-solid-color': colorsCommon.brandWhite,
    '--variant-solid-backgroundColor': colors.green500,
    '--variant-outline-color': colors.green900,
    '--variant-outline-border-color': colors.green500,
  },
  [`&[data-colorscheme=gold]`]: {
    '--variant-outline-color': colors.gold900,
    '--variant-outline-border-color': colors.gold500,
  },
  [`&.${getClassName('variant-solid')}`]: {
    border: 'none',
    color: 'var(--variant-solid-color)',
    backgroundColor: 'var(--variant-solid-backgroundColor)',
  },
  [`&.${getClassName('variant-outline')}`]: {
    border: '2px solid',
    color: 'var(--variant-outline-color)',
    backgroundColor: 'transparent',
    borderColor: 'var(--variant-outline-border-color)',
  },
  [`&.${getClassName('size-large')}`]: {
    fontSize: pxToRem(18),
    lineHeight: pxToRem(24),
    minWidth: 160,
    height: 48,
    paddingLeft: spacing(3),
    paddingRight: spacing(3),
    paddingTop: spacing(1.5),
    paddingBottom: spacing(1.5),
  },
  [`&.${getClassName('size-small')}`]: {
    fontSize: pxToRem(16),
    lineHeight: pxToRem(16),
    minWidth: 56,
    height: 32,
    paddingLeft: spacing(2),
    paddingRight: spacing(2),
    paddingTop: spacing(1),
    paddingBottom: spacing(1),
  },

  '@media (hover: hover)': {
    '&:where(:hover)': {
      // border: '1px solid red',
    },
  },
}));

export const Button = forwardRef<ElementRef<'button'>, PropsWithChildren<PropsWithSx<ButtonProps>>>(
  function Button(
    { variant = 'solid', colorScheme = 'cyan', size = 'large', className, ...props },
    forwardedRef
  ) {
    return (
      <StyledButton
        ref={forwardedRef}
        data-colorscheme={colorScheme}
        className={clsx(
          componentClassName,
          className,
          getClassName(`size-${size}`),
          getClassName(`variant-${variant}`)
        )}
        {...props}
      />
    );
  }
);

Button.displayName = componentName;
