import * as React from 'react';
import clsx from 'clsx';
import { colorsCommon } from '@utilitywarehouse/colour-system';
import { useBackground } from '../Box';
import { HeadingProps } from './Heading.props';
import { styled } from '../theme';
import { fontWeights, fonts } from '../tokens';
import { PropsWithSx } from '../types';
import {
  DATA_ATTRIBUTES,
  DATA_ATTRIBUTE_SELECTORS,
  classSelector,
  mediaQueries,
  pxToRem,
  withGlobalPrefix,
} from '../utils';

const componentName = 'Heading';
const componentClassName = withGlobalPrefix(componentName);

const classNames = {
  variant: {
    displayHeading: withGlobalPrefix('variant-displayHeading'),
    h1: withGlobalPrefix('variant-h1'),
    h2: withGlobalPrefix('variant-h2'),
    h3: withGlobalPrefix('variant-h3'),
    h4: withGlobalPrefix('variant-h4'),
  },
};

const classSelectors = {
  variant: {
    displayHeading: classSelector(classNames.variant.displayHeading),
    h1: classSelector(classNames.variant.h1),
    h2: classSelector(classNames.variant.h2),
    h3: classSelector(classNames.variant.h3),
    h4: classSelector(classNames.variant.h4),
  },
};

const StyledElement = styled('h2', {
  shouldForwardProp: prop => prop !== 'color' && prop !== 'as' && prop !== 'textTransform',
})<{
  color?: string;
  textTransform?: HeadingProps['textTransform'];
}>(({ color, textTransform }) => {
  return {
    fontFamily: fonts.primary,
    fontWeight: fontWeights.primary,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    textTransform: textTransform as any,
    fontSize: 'var(--heading-font-size)',
    lineHeight: 'var(--heading-line-height)',
    color: 'var(--heading-color)',
    '--heading-color': colorsCommon.brandPrimaryPurple,
    '--heading-color-on-brand-bg': colorsCommon.brandWhite,
    '--heading-color-custom': color,
    '--heading-font-size-display-heading': pxToRem(42),
    '--heading-font-size-display-heading-desktop': pxToRem(64),
    '--heading-font-size-h1': pxToRem(32),
    '--heading-font-size-h1-desktop': pxToRem(42),
    '--heading-font-size-h2': pxToRem(28),
    '--heading-font-size-h2-desktop': pxToRem(32),
    '--heading-font-size-h3': pxToRem(22),
    '--heading-font-size-h3-desktop': pxToRem(24),
    '--heading-font-size-h4': pxToRem(18),
    '--heading-font-size-h4-desktop': pxToRem(20),
    '--heading-line-height-display-heading': 1.2,
    '--heading-line-height-h1': 1.2,
    '--heading-line-height-h2': 1.2,
    '--heading-line-height-h2-desktop': 1.5,
    '--heading-line-height-h3': 1.5,
    '--heading-line-height-h4': 1.5,
    [DATA_ATTRIBUTE_SELECTORS.inverted]: {
      '--heading-color': 'var(--heading-color-on-brand-bg)',
    },
    [DATA_ATTRIBUTE_SELECTORS.customColor]: {
      '--heading-color': 'var(--heading-color-custom)',
    },
    [classSelectors.variant.displayHeading]: {
      '--heading-font-size': 'var(--heading-font-size-display-heading)',
      '--heading-line-height': 'var(--heading-line-height-display-heading)',
      [mediaQueries.desktop]: {
        '--heading-font-size': 'var(--heading-font-size-display-heading-desktop)',
      },
    },
    [classSelectors.variant.h1]: {
      '--heading-font-size': 'var(--heading-font-size-h1)',
      '--heading-font-size-desktop': 'var(--heading-font-size-h1-desktop)',
      '--heading-line-height': 'var(--heading-line-height-h1)',
      [mediaQueries.desktop]: {
        '--heading-font-size': 'var(--heading-font-size-h1-desktop)',
      },
    },
    [classSelectors.variant.h2]: {
      '--heading-font-size': 'var(--heading-font-size-h2)',
      '--heading-line-height': 'var(--heading-line-height-h2)',
      [mediaQueries.desktop]: {
        '--heading-font-size': 'var(--heading-font-size-h2-desktop)',
        '--heading-line-height': 'var(--heading-line-height-h2-desktop)',
      },
    },
    [classSelectors.variant.h3]: {
      '--heading-font-size': 'var(--heading-font-size-h3)',
      '--heading-line-height': 'var(--heading-line-height-h3)',
      [mediaQueries.desktop]: {
        '--heading-font-size': 'var(--heading-font-size-h3-desktop)',
      },
    },
    [classSelectors.variant.h4]: {
      '--heading-font-size': 'var(--heading-font-size-h4)',
      '--heading-line-height': 'var(--heading-line-height-h4)',
      [mediaQueries.desktop]: {
        '--heading-font-size': 'var(--heading-font-size-h4-desktop)',
      },
    },
  };
});

/**
 * Heading renders the primary UW font, to be used for heading-level typography.
 *
 * > This component does not need to be wrapped in a `ThemeProvider` and can be used standalone with other component libraries.
 */
export const Heading = React.forwardRef<
  React.ElementRef<'h2'>,
  React.PropsWithChildren<PropsWithSx<HeadingProps>>
>(({ component, variant = 'h2', color, className, inverted, ...props }, ref) => {
  const element = component ? component : variant === 'displayHeading' ? 'h1' : variant;
  const { isInvertedBackground } = useBackground();
  const dataAttributeProps = {
    [DATA_ATTRIBUTES.inverted]: !color && (inverted || isInvertedBackground) ? '' : undefined,
    [DATA_ATTRIBUTES.customColor]: color !== undefined ? '' : undefined,
  };
  return (
    <StyledElement
      ref={ref}
      as={element}
      className={clsx(componentClassName, className, classNames.variant[variant])}
      color={color}
      {...dataAttributeProps}
      {...props}
    />
  );
});

Heading.displayName = componentName;
