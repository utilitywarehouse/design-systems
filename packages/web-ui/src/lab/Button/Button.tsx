import styled from '@emotion/styled';
import { colors, colorsCommon } from '@utilitywarehouse/colour-system';
import { ElementRef, forwardRef, PropsWithChildren } from 'react';
import { fonts, fontWeights } from '../../tokens';
import { PropsWithSx } from '../../types';
import { dataAttributes, getClassName, globalPrefix, px, pxToRem, spacing } from '../../utils';
import { ButtonProps } from './Button.props';
import clsx from 'clsx';

const componentName = 'Button';
const label = getClassName(componentName);

const classNames = {
  solid: `${globalPrefix}-variant-solid`,
  outline: `${globalPrefix}-variant-outline`,
  ghost: `${globalPrefix}-variant-ghost`,
};

const StyledButton = styled('button', { label })<ButtonProps>(() => ({
  all: 'unset',
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
  fontFamily: fonts.secondary,
  fontWeight: fontWeights.secondary.semibold,
  borderRadius: px(9999),
  color: `var(--button-foreground-color, ${colors.cyan1000})`,
  backgroundColor: `var(--button-background-color, ${colors.cyan400})`,
  [dataAttributes.cyan]: {
    '--button-solid-foreground-color': colors.cyan1000,
    '--button-solid-background-color': colors.cyan400,
    '--button-solid-background-color-hover': colors.cyan500,
    '--button-outline-foreground-color': colors.cyan1000,
    '--button-outline-border-color': colors.cyan400,
    '--button-outline-background-color-hover': colors.cyan75,
  },
  [dataAttributes.red]: {
    '--button-solid-foreground-color': colorsCommon.brandWhite,
    '--button-solid-background-color': colors.red500,
    '--button-solid-background-color-hover': colors.red600,
    '--button-outline-foreground-color': colors.red900,
    '--button-outline-border-color': colors.red500,
    '--button-outline-background-color-hover': colors.red100,
  },
  [dataAttributes.green]: {
    '--button-solid-foreground-color': colorsCommon.brandWhite,
    '--button-solid-background-color': colors.green500,
    '--button-solid-background-color-hover': colors.green600,
    '--button-outline-foreground-color': colors.green900,
    '--button-outline-border-color': colors.green600,
    '--button-outline-background-color-hover': colors.green100,
  },
  [dataAttributes.gold]: {
    '--button-outline-foreground-color': colors.gold900,
    '--button-outline-border-color': colors.gold500,
    '--button-outline-background-color-hover': colors.gold100,
  },
  [dataAttributes.grey]: {
    '--button-outline-foreground-color': colors.grey1000,
    '--button-outline-border-color': colors.grey500,
    '--button-outline-background-color-hover': colors.grey100,
  },
  [`&.${classNames.solid}`]: {
    border: 'none',
    '--button-foreground-color': 'var(--button-solid-foreground-color)',
    '--button-background-color': 'var(--button-solid-background-color)',
    '--button-background-color-hover': 'var(--button-solid-background-color-hover)',
    '@media (hover: hover)': {
      '&:where(:hover)': {
        '--button-background-color': 'var(--button-background-color-hover)',
      },
    },
  },
  [`&.${classNames.outline}`]: {
    border: `2px solid var(--button-border-color)`,
    '--button-background-color': 'transparent',
    '--button-foreground-color': 'var(--button-outline-foreground-color)',
    '--button-border-color': 'var(--button-outline-border-color)',
    '--button-background-color-hover': 'var(--button-outline-background-color-hover)',
    '@media (hover: hover)': {
      '&:where(:hover)': {
        '--button-background-color': 'var(--button-background-color-hover)',
      },
    },
  },
  '&:where(:focus-visible)': {
    boxShadow: '0 0 0 var(--focus-outline-width, 0) var(--focus-outline-color, transparent)',
    [`&[data-colorscheme=cyan]`]: {
      '--focus-outline-color': colors.cyan700,
    },
    [`&[data-colorscheme=grey]`]: {
      '--focus-outline-color': colors.grey700,
    },
    [`&[data-colorscheme=red]`]: {
      '--focus-outline-color': colors.red700,
    },
    [`&[data-colorscheme=green]`]: {
      '--focus-outline-color': colors.green700,
    },
    [`&[data-colorscheme=gold]`]: {
      '--focus-outline-color': colors.gold700,
    },
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
    '&:where(:focus-visible)': {
      '--focus-outline-width': '4px',
    },
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
    '&:where(:focus-visible)': {
      '--focus-outline-width': '2px',
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
          label,
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
