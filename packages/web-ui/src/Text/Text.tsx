import * as React from 'react';
import { useBackground } from '../Box';
import { colorsCommon } from '@utilitywarehouse/colour-system';
import { pxToRem, withGlobalPrefix } from '../utils';
import { Typography } from '../Typography';
import { TextProps } from './Text.props';
import { PropsWithSx } from '../types';
import clsx from 'clsx';

const componentName = 'Text';
const componentClassName = withGlobalPrefix(componentName);

/**
 * Text renders the secondary UW font, Work Sans, to be used for body text.
 *
 * > This component does not need to be wrapped in a `ThemeProvider` and can be used standalone with other component libraries.
 */
export const Text = React.forwardRef<
  React.ElementRef<'span'>,
  React.PropsWithChildren<PropsWithSx<TextProps>>
>(({ variant = 'body', bold, color, className, ...props }, ref) => {
  // TODO: move styles into StyledElement like in Heading
  const fontSizes: { [key: string]: any } = {
    caption: pxToRem(12),
    legalNote: pxToRem(14),
    body: pxToRem(16),
    subtitle: {
      mobile: pxToRem(18),
      desktop: pxToRem(20),
    },
  };
  const { isBrandBackground } = useBackground();
  const textColor = !!color
    ? color
    : isBrandBackground
    ? colorsCommon.brandWhite
    : colorsCommon.brandMidnight;

  return (
    <Typography
      ref={ref}
      className={clsx(componentClassName, className)}
      fontFamily="secondary"
      fontSize={fontSizes[variant]}
      lineHeight={variant === 'caption' ? 2 : 1.5}
      weight={bold ? 'semibold' : 'regular'}
      color={textColor}
      {...props}
    />
  );
});

Text.displayName = componentName;
