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
  [`&.${getClassName('variant-solid')}`]: {
    border: 'none',
    [`&[data-colorscheme=cyan]`]: {
      '--button-foreground-color': colors.cyan1000,
      '--button-background-color': colors.cyan400,
    },
    [`&[data-colorscheme=red]`]: {
      '--button-foreground-color': colorsCommon.brandWhite,
      '--button-background-color': colors.red500,
    },
    [`&[data-colorscheme=green]`]: {
      '--button-foreground-color': colorsCommon.brandWhite,
      '--button-background-color': colors.green500,
    },
    '@media (hover: hover)': {
      '&:where(:hover)': {
        [`&[data-colorscheme=cyan]`]: {
          '--button-background-color': colors.cyan500,
        },
        [`&[data-colorscheme=red]`]: {
          '--button-background-color': colors.red600,
        },
        [`&[data-colorscheme=green]`]: {
          '--button-background-color': colors.green600,
        },
      },
    },
  },
  [`&.${getClassName('variant-outline')}`]: {
    border: `2px solid var(--button-border-color)`,
    '--button-background-color': 'transparent',
    [`&[data-colorscheme=cyan]`]: {
      '--button-foreground-color': colors.cyan1000,
      '--button-border-color': colors.cyan400,
    },
    [`&[data-colorscheme=grey]`]: {
      '--button-foreground-color': colors.grey1000,
      '--button-border-color': colors.grey500,
    },
    [`&[data-colorscheme=red]`]: {
      '--button-foreground-color': colors.red900,
      '--button-border-color': colors.red500,
    },
    [`&[data-colorscheme=green]`]: {
      '--button-foreground-color': colors.green900,
      '--button-border-color': colors.green600,
    },
    [`&[data-colorscheme=gold]`]: {
      '--button-foreground-color': colors.gold900,
      '--button-border-color': colors.gold500,
    },
    '@media (hover: hover)': {
      '&:where(:hover)': {
        [`&[data-colorscheme=cyan]`]: {
          '--button-background-color': colors.cyan75,
        },
        [`&[data-colorscheme=grey]`]: {
          '--button-background-color': colors.grey100,
        },
        [`&[data-colorscheme=red]`]: {
          '--button-background-color': colors.red100,
        },
        [`&[data-colorscheme=green]`]: {
          '--button-background-color': colors.green100,
        },
        [`&[data-colorscheme=gold]`]: {
          '--button-background-color': colors.gold100,
        },
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
