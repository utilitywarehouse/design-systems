import * as React from 'react';
import { useBackground } from '../Box';
import { PropsWithSx } from '../types';
import { colorsCommon } from '@utilitywarehouse/colour-system';
import { withGlobalPrefix, pxToRem } from '../utils';
import { HeadingProps } from './Heading.props';
import { Typography } from '../Typography';
import clsx from 'clsx';

const displayName = 'Heading';
const componentClassName = withGlobalPrefix(displayName);

/**
 * Heading renders the primary UW font, to be used for heading-level typography.
 *
 * > This component does not need to be wrapped in a `ThemeProvider` and can be used standalone with other component libraries.
 */
export const Heading = React.forwardRef<
  React.ElementRef<'h2'>,
  React.PropsWithChildren<PropsWithSx<HeadingProps>>
>(({ component, variant = 'h2', color, className, ...props }, ref) => {
  const element = variant === 'displayHeading' ? 'h1' : variant;
  const { isBrandBackground } = useBackground();
  const headingColor = !!color
    ? color
    : isBrandBackground
    ? colorsCommon.brandWhite
    : colorsCommon.brandPrimaryPurple;

  const fontSizes = {
    h4: {
      mobile: pxToRem(18),
      desktop: pxToRem(20),
    },
    h3: {
      mobile: pxToRem(22),
      desktop: pxToRem(24),
    },
    h2: {
      mobile: pxToRem(28),
      desktop: pxToRem(32),
    },
    h1: {
      mobile: pxToRem(32),
      desktop: pxToRem(42),
    },
    displayHeading: {
      mobile: pxToRem(42),
      desktop: pxToRem(64),
    },
  };
  const lineHeights = {
    h4: 1.5,
    h3: 1.5,
    h2: {
      mobile: 1.2,
      desktop: 1.5,
    },
    h1: 1.2,
    displayHeading: 1.2,
  };

  return (
    <Typography
      ref={ref}
      component={component || element}
      className={clsx(componentClassName, className)}
      fontFamily="primary"
      fontSize={fontSizes[variant]}
      lineHeight={lineHeights[variant]}
      weight="regular"
      color={headingColor}
      {...props}
    />
  );
});

Heading.displayName = displayName;
