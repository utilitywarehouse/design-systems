import { Slot } from '@radix-ui/react-slot';
import * as React from 'react';
import clsx from 'clsx';
import { colors } from '@utilitywarehouse/colour-system';
import { useBackground } from '../Box';
import { LinkProps } from './Link.props';
import { styled } from '../theme';
import { fontWeights, fonts } from '../tokens';
import { PropsWithSx } from '../types';
import {
  DATA_ATTRIBUTES,
  DATA_ATTRIBUTE_SELECTORS,
  classSelector,
  mediaQueries,
  px,
  pxToRem,
  responsiveClassSelector,
  spacing,
  withBreakpoints,
  withGlobalPrefix,
} from '../utils';

const componentName = 'Link';
const componentClassName = withGlobalPrefix(componentName);

const classNames = {
  size: {
    large: withGlobalPrefix('size-large'),
    small: withGlobalPrefix('size-small'),
  },
};

const classSelectors = {
  size: {
    large: classSelector(classNames.size.large),
    small: classSelector(classNames.size.small),
    tablet: {
      large: responsiveClassSelector(classNames.size.large, 'tablet'),
      small: responsiveClassSelector(classNames.size.small, 'tablet'),
    },
    desktop: {
      large: responsiveClassSelector(classNames.size.large, 'desktop'),
      small: responsiveClassSelector(classNames.size.small, 'desktop'),
    },
    wide: {
      large: responsiveClassSelector(classNames.size.large, 'wide'),
      small: responsiveClassSelector(classNames.size.small, 'wide'),
    },
  },
};

const StyledElement = styled('a', {
  shouldForwardProp: prop => prop !== 'as' && prop !== 'textTransform',
})<LinkProps>(({ textTransform }) => {
  const sizeStyles = {
    large: {
      '--link-font-size': pxToRem(18),
      '--link-line-height': pxToRem(18),
      '--link-height': pxToRem(18),
    },
    small: {
      '--link-font-size': pxToRem(16),
      '--link-line-height': pxToRem(16),
      '--link-height': pxToRem(16),
    },
  };

  return {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    textTransform: textTransform as any,
    // unset button styles when asChild is used
    ':where(button)': {
      outline: 'transparent',
      appearance: 'none',
      border: 'none',
      background: 'transparent',
      padding: 0,
    },
    cursor: 'pointer',
    display: 'inline',
    ':has(svg, [data-icon])': {
      display: 'inline-flex',
      alignItems: 'center',
      flexShrink: 0,
      gap: px(spacing(0.5)),
    },
    fontFamily: fonts.secondary,
    fontSize: 'var(--link-font-size)',
    lineHeight: 'var(--link-line-height)',
    height: 'var(--link-height)',
    fontWeight: fontWeights.secondary.medium,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationThickness: px(2),
    borderRadius: px(4),
    color: 'var(--link-color)',
    textDecorationColor: 'var(--link-underline-color)',
    textUnderlinePosition: 'under',
    /* colors */
    '--link-color': colors.cyan700,
    '--link-underline-color': colors.cyan400,
    '--link-underline-color-hover': colors.cyan500,
    '--link-underline-color-active': colors.cyan600,
    /* inverted colors */
    '--link-color-inverted': colors.cyan300,
    '--link-underline-color-inverted': colors.cyan400,
    '--link-underline-color-hover-inverted': colors.cyan300,
    '--link-underline-color-active-inverted': colors.cyan200,
    [DATA_ATTRIBUTE_SELECTORS.inverted]: {
      '--link-color': 'var(--link-color-inverted)',
      '--link-underline-color': 'var(--link-underline-color-inverted)',
    },
    '@media (hover: hover)': {
      ':where(:hover)': {
        '--link-underline-color': 'var(--link-underline-color-hover)',
        [DATA_ATTRIBUTE_SELECTORS.inverted]: {
          '--link-underline-color': 'var(--link-underline-color-hover-inverted)',
        },
      },
    },
    ':where(:active)': {
      '--link-underline-color': 'var(--link-underline-color-active)',
      [DATA_ATTRIBUTE_SELECTORS.inverted]: {
        '--link-underline-color': 'var(--link-underline-color-active-inverted)',
      },
    },
    ':where(:focus-visible)': {
      textDecoration: 'none',
      outlineWidth: px(2),
      outlineStyle: 'solid',
      outlineColor: colors.cyan700,
      outlineOffset: 0,
    },
    [classSelectors.size.large]: { ...sizeStyles.large },
    [classSelectors.size.small]: { ...sizeStyles.small },
    [mediaQueries.tablet]: {
      [classSelectors.size.tablet.large]: { ...sizeStyles.large },
      [classSelectors.size.tablet.small]: { ...sizeStyles.small },
    },
    [mediaQueries.desktop]: {
      [classSelectors.size.desktop.large]: { ...sizeStyles.large },
      [classSelectors.size.desktop.small]: { ...sizeStyles.small },
    },
    [mediaQueries.wide]: {
      [classSelectors.size.wide.large]: { ...sizeStyles.large },
      [classSelectors.size.wide.small]: { ...sizeStyles.small },
    },
  };
});

/**
 * A semantic Call To Action for navigating between pages.
 */
export const Link = React.forwardRef<
  React.ElementRef<'a'>,
  React.PropsWithChildren<PropsWithSx<LinkProps>>
>(({ className, asChild, children, size = 'large', inverted, ...props }, ref) => {
  const { isInvertedBackground } = useBackground();
  const dataAttributeProps = {
    [DATA_ATTRIBUTES.inverted]: inverted || isInvertedBackground ? '' : undefined,
  };
  return (
    <StyledElement
      as={asChild ? Slot : 'a'}
      ref={ref}
      className={clsx(componentClassName, className, withBreakpoints(size, 'size'))}
      {...dataAttributeProps}
      {...props}
    >
      {children}
    </StyledElement>
  );
});

Link.displayName = componentName;
