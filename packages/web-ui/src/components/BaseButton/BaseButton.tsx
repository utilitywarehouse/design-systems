import * as React from 'react';

import clsx from 'clsx';

import { colors, colorsCommon } from '@utilitywarehouse/colour-system';

import { BaseButtonProps } from './BaseButton.props';

import { useBackground } from '../Box';
import { UnstyledButton } from '../UnstyledButton';

import {
  COLORSCHEME_SELECTORS,
  DATA_ATTRIBUTES,
  DATA_ATTRIBUTE_SELECTORS,
  classSelector,
} from '../../helpers';
import { styled } from '../../theme';
import { PropsWithSx } from '../../types';
import { px, withGlobalPrefix } from '../../utils';

const componentName = 'BaseButton';
const componentClassName = withGlobalPrefix(componentName);

const classNames = {
  variant: {
    solid: withGlobalPrefix('variant-solid'),
    outline: withGlobalPrefix('variant-outline'),
    ghost: withGlobalPrefix('variant-ghost'),
  },
};

const classSelectors = {
  variant: {
    solid: classSelector(classNames.variant.solid),
    outline: classSelector(classNames.variant.outline),
    ghost: classSelector(classNames.variant.ghost),
  },
};

const StyledElement = styled(UnstyledButton)<BaseButtonProps>(() => {
  return {
    transitionDuration: '0.2s',
    transitionProperty: 'color, background-color, border-color',
    borderRadius: px(9999),
    color: 'var(--base-button-foreground-color)',
    backgroundColor: 'var(--base-button-background-color)',
    '--focus-outline-width': px(2),
    '--focus-outline-offset': px(2),
    [COLORSCHEME_SELECTORS.cyan]: {
      '--focus-outline-color': colors.cyan700,
      /* solid */
      '--base-button-solid-background-color': colors.cyan400,
      '--base-button-solid-background-color-active': colors.cyan300,
      '--base-button-solid-background-color-disabled': colors.cyan100,
      '--base-button-solid-background-color-hover': colors.cyan500,
      '--base-button-solid-foreground-color': colors.cyan1000,
      '--base-button-solid-foreground-color-disabled': colors.cyan300,
      /* outline */
      '--base-button-outline-background-color-active': colors.cyan100,
      '--base-button-outline-background-color-hover': colors.cyan50,
      '--base-button-outline-border-color': colors.cyan400,
      '--base-button-outline-border-color-disabled': colors.cyan300,
      '--base-button-outline-foreground-color': colors.cyan1000,
      '--base-button-outline-foreground-color-disabled': colors.cyan300,
      /* ghost */
      '--base-button-ghost-background-color-hover': colors.cyan50,
      '--base-button-ghost-background-color-active': colors.cyan100,
      '--base-button-ghost-foreground-color': colors.cyan700,
      '--base-button-ghost-foreground-color-disabled': colors.cyan300,
      [DATA_ATTRIBUTE_SELECTORS.inverted]: {
        '--focus-outline-color': colors.cyan300,
        /* solid */
        '--base-button-solid-background-color': colors.cyan400,
        '--base-button-solid-background-color-active': colors.cyan500,
        '--base-button-solid-background-color-disabled': colors.cyan300,
        '--base-button-solid-background-color-hover': colors.cyan300,
        '--base-button-solid-foreground-color': colors.cyan1000,
        '--base-button-solid-foreground-color-disabled': colors.cyan100,
        /* outline */
        '--base-button-outline-background-color-active': colors.cyan800,
        '--base-button-outline-background-color-hover': colors.cyan900,
        '--base-button-outline-border-color': colors.cyan400,
        '--base-button-outline-border-color-disabled': colors.cyan600,
        '--base-button-outline-foreground-color': colors.cyan100,
        '--base-button-outline-foreground-color-disabled': colors.cyan600,
        /* ghost */
        '--base-button-ghost-background-color-hover': colors.cyan900,
        '--base-button-ghost-background-color-active': colors.cyan800,
        '--base-button-ghost-foreground-color': colors.cyan400,
        '--base-button-ghost-foreground-color-disabled': colors.cyan600,
      },
    },
    [COLORSCHEME_SELECTORS.green]: {
      '--focus-outline-color': colors.green700,
      /* solid */
      '--base-button-solid-background-color': colors.green500,
      '--base-button-solid-background-color-active': colors.green700,
      '--base-button-solid-background-color-disabled': colors.green100,
      '--base-button-solid-background-color-hover': colors.green600,
      '--base-button-solid-foreground-color': colorsCommon.brandWhite,
      '--base-button-solid-foreground-color-disabled': colors.green300,
      /* outline */
      '--base-button-outline-background-color-active': colors.green100,
      '--base-button-outline-background-color-hover': colors.green50,
      '--base-button-outline-border-color': colors.green500,
      '--base-button-outline-border-color-disabled': colors.green300,
      '--base-button-outline-foreground-color': colors.green900,
      '--base-button-outline-foreground-color-disabled': colors.green300,
      /* ghost */
      '--base-button-ghost-background-color-hover': colors.green50,
      '--base-button-ghost-background-color-active': colors.green100,
      '--base-button-ghost-foreground-color': colors.green700,
      '--base-button-ghost-foreground-color-disabled': colors.green300,
      [DATA_ATTRIBUTE_SELECTORS.inverted]: {
        '--focus-outline-color': colors.green300,
        /* solid */
        '--base-button-solid-background-color': colors.green400,
        '--base-button-solid-background-color-active': colors.green200,
        '--base-button-solid-background-color-disabled': colors.green300,
        '--base-button-solid-background-color-hover': colors.green300,
        '--base-button-solid-foreground-color': colors.green900,
        '--base-button-solid-foreground-color-disabled': colors.green100,
        /* outline */
        '--base-button-outline-background-color-active': colors.green800,
        '--base-button-outline-background-color-hover': colors.green900,
        '--base-button-outline-border-color': colors.green400,
        '--base-button-outline-border-color-disabled': colors.green600,
        '--base-button-outline-foreground-color': colors.green100,
        '--base-button-outline-foreground-color-disabled': colors.green600,
        /* ghost */
        '--base-button-ghost-background-color-hover': colors.green900,
        '--base-button-ghost-background-color-active': colors.green800,
        '--base-button-ghost-foreground-color': colors.green300,
        '--base-button-ghost-foreground-color-disabled': colors.green600,
      },
    },
    [COLORSCHEME_SELECTORS.red]: {
      '--focus-outline-color': colors.red700,
      /* solid */
      '--base-button-solid-background-color': colors.red500,
      '--base-button-solid-background-color-active': colors.red700,
      '--base-button-solid-background-color-disabled': colors.red100,
      '--base-button-solid-background-color-hover': colors.red600,
      '--base-button-solid-foreground-color': colorsCommon.brandWhite,
      '--base-button-solid-foreground-color-disabled': colors.red300,
      /* outline */
      '--base-button-outline-background-color-active': colors.red100,
      '--base-button-outline-background-color-hover': colors.red50,
      '--base-button-outline-border-color': colors.red500,
      '--base-button-outline-border-color-disabled': colors.red300,
      '--base-button-outline-foreground-color': colors.red900,
      '--base-button-outline-foreground-color-disabled': colors.red300,
      /* ghost */
      '--base-button-ghost-background-color-hover': colors.red50,
      '--base-button-ghost-background-color-active': colors.red100,
      '--base-button-ghost-foreground-color': colors.red700,
      '--base-button-ghost-foreground-color-disabled': colors.red300,
      [DATA_ATTRIBUTE_SELECTORS.inverted]: {
        '--focus-outline-color': colors.red300,
        /* solid */
        '--base-button-solid-background-color': colors.red400,
        '--base-button-solid-background-color-active': colors.red200,
        '--base-button-solid-background-color-disabled': colors.red300,
        '--base-button-solid-background-color-hover': colors.red300,
        '--base-button-solid-foreground-color': colors.red900,
        '--base-button-solid-foreground-color-disabled': colors.red100,
        /* outline */
        '--base-button-outline-background-color-active': colors.red800,
        '--base-button-outline-background-color-hover': colors.red900,
        '--base-button-outline-border-color': colors.red400,
        '--base-button-outline-border-color-disabled': colors.red600,
        '--base-button-outline-foreground-color': colors.red100,
        '--base-button-outline-foreground-color-disabled': colors.red600,
        /* ghost */
        '--base-button-ghost-background-color-hover': colors.red900,
        '--base-button-ghost-background-color-active': colors.red800,
        '--base-button-ghost-foreground-color': colors.red300,
        '--base-button-ghost-foreground-color-disabled': colors.red600,
      },
    },
    [COLORSCHEME_SELECTORS.gold]: {
      '--focus-outline-color': colors.gold700,
      /* outline */
      '--base-button-outline-background-color-active': colors.gold100,
      '--base-button-outline-background-color-hover': colors.gold50,
      '--base-button-outline-border-color': colors.gold500,
      '--base-button-outline-border-color-disabled': colors.gold300,
      '--base-button-outline-foreground-color': colors.gold900,
      '--base-button-outline-foreground-color-disabled': colors.gold300,
      /* ghost */
      '--base-button-ghost-background-color-hover': colors.gold50,
      '--base-button-ghost-background-color-active': colors.gold100,
      '--base-button-ghost-foreground-color': colors.gold700,
      '--base-button-ghost-foreground-color-disabled': colors.gold300,
      [DATA_ATTRIBUTE_SELECTORS.inverted]: {
        '--focus-outline-color': colors.gold300,
        /* outline */
        '--base-button-outline-background-color-active': colors.gold800,
        '--base-button-outline-background-color-hover': colors.gold900,
        '--base-button-outline-border-color': colors.gold400,
        '--base-button-outline-border-color-disabled': colors.gold600,
        '--base-button-outline-foreground-color': colors.gold100,
        '--base-button-outline-foreground-color-disabled': colors.gold600,
        /* ghost */
        '--base-button-ghost-background-color-hover': colors.gold900,
        '--base-button-ghost-background-color-active': colors.gold800,
        '--base-button-ghost-foreground-color': colors.gold300,
        '--base-button-ghost-foreground-color-disabled': colors.gold600,
      },
    },
    [COLORSCHEME_SELECTORS.grey]: {
      '--focus-outline-color': colors.grey700,
      /* outline */
      '--base-button-outline-background-color-active': colors.grey100,
      '--base-button-outline-background-color-hover': colors.grey50,
      '--base-button-outline-border-color': colors.grey500,
      '--base-button-outline-border-color-disabled': colors.grey300,
      '--base-button-outline-foreground-color': colors.grey900,
      '--base-button-outline-foreground-color-disabled': colors.grey300,
      /* ghost */
      '--base-button-ghost-background-color-hover': colors.grey50,
      '--base-button-ghost-background-color-active': colors.grey100,
      '--base-button-ghost-foreground-color': colors.grey700,
      '--base-button-ghost-foreground-color-disabled': colors.grey300,
      [DATA_ATTRIBUTE_SELECTORS.inverted]: {
        '--focus-outline-color': colors.grey300,
        /* outline */
        '--base-button-outline-background-color-active': colors.grey800,
        '--base-button-outline-background-color-hover': colors.grey900,
        '--base-button-outline-border-color': colors.grey400,
        '--base-button-outline-border-color-disabled': colors.grey600,
        '--base-button-outline-foreground-color': colors.grey100,
        '--base-button-outline-foreground-color-disabled': colors.grey600,
        /* ghost */
        '--base-button-ghost-background-color-hover': colors.grey900,
        '--base-button-ghost-background-color-active': colors.grey800,
        '--base-button-ghost-foreground-color': colors.grey300,
        '--base-button-ghost-foreground-color-disabled': colors.grey600,
      },
    },
    [classSelectors.variant.solid]: {
      '--base-button-foreground-color': 'var(--base-button-solid-foreground-color)',
      '--base-button-background-color': 'var(--base-button-solid-background-color)',
      '--base-button-background-color-hover': 'var(--base-button-solid-background-color-hover)',
      '--base-button-background-color-active': 'var(--base-button-solid-background-color-active)',
      '--base-button-foreground-color-disabled':
        'var(--base-button-solid-foreground-color-disabled)',
      '--base-button-background-color-disabled':
        'var(--base-button-solid-background-color-disabled)',
    },
    [classSelectors.variant.ghost]: {
      '--base-button-background-color': 'transparent',
      '--base-button-background-color-disabled': 'transparent',
      '--base-button-foreground-color': 'var(--base-button-ghost-foreground-color)',
      '--base-button-background-color-hover': 'var(--base-button-ghost-background-color-hover)',
      '--base-button-background-color-active': 'var(--base-button-ghost-background-color-active)',
      '--base-button-foreground-color-disabled':
        'var(--base-button-ghost-foreground-color-disabled)',
    },
    [classSelectors.variant.outline]: {
      border: `${px(2)} solid var(--base-button-outline-border-color)`,
      '--base-button-background-color': 'transparent',
      '--base-button-background-color-disabled': 'transparent',
      '--base-button-foreground-color': 'var(--base-button-outline-foreground-color)',
      '--base-button-background-color-hover': 'var(--base-button-outline-background-color-hover)',
      '--base-button-background-color-active': 'var(--base-button-outline-background-color-active)',
      '--base-button-foreground-color-disabled':
        'var(--base-button-outline-foreground-color-disabled)',
      '--base-button-border-color-disabled': 'var(--base-button-outline-border-color-disabled)',
    },
    ':where(:focus-visible)': {
      outline: 'var(--focus-outline-width) solid var(--focus-outline-color)',
      outlineOffset: 'var(--focus-outline-offset)',
    },
    '@media (hover: hover)': {
      ':where(:hover)': {
        '--base-button-background-color': 'var(--base-button-background-color-hover)',
      },
    },
    ':where(:active)': {
      transitionDuration: '0s',
      '--base-button-background-color': 'var(--base-button-background-color-active)',
    },
    [':where([aria-disabled])']: {
      cursor: 'not-allowed',
      '--base-button-foreground-color': 'var(--base-button-foreground-color-disabled)',
      '--base-button-background-color': 'var(--base-button-background-color-disabled)',
      '--base-button-border-color': 'var(--base-button-border-color-disabled)',
      [classSelectors.variant.outline]: {
        '--base-button-outline-border-color': 'var(--base-button-outline-border-color-disabled)',
      },
    },
  };
});

/**
 * `BaseButton` is a private component which provides the variant and
 * colourScheme styles for other button components.
 */
export const BaseButton = React.forwardRef<
  React.ElementRef<'button'>,
  React.PropsWithChildren<PropsWithSx<BaseButtonProps>>
>(function BaseButton(
  { variant = 'solid', colorScheme = 'cyan', className, disabled, inverted, ...props },
  forwardedRef
) {
  const { isInvertedBackground } = useBackground();
  const dataAttributeProps = {
    [DATA_ATTRIBUTES.inverted]: inverted || isInvertedBackground ? '' : undefined,
    [DATA_ATTRIBUTES.colorscheme]: colorScheme,
  };
  return (
    <StyledElement
      ref={forwardedRef}
      aria-disabled={disabled || undefined}
      disabled={disabled}
      className={clsx(componentClassName, className, classNames.variant[variant])}
      {...dataAttributeProps}
      {...props}
    />
  );
});

BaseButton.displayName = componentName;
