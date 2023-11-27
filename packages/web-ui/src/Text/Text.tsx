import * as React from 'react';
import { useBackground } from '../Box';
import { colorsCommon } from '@utilitywarehouse/colour-system';
import { pxToRem, withPrefix } from '../utils';
import { ElementRef, forwardRef, PropsWithChildren } from 'react';
import { Typography } from '../Typography';
import { TextProps } from './Text.props';
import { PropsWithSx } from '../types';
import clsx from 'clsx';

const displayName = 'Text';
const componentClassName = withPrefix(displayName);

/**
 * Text renders the secondary UW font, Work Sans, to be used for body text.
 *
 * > This component does not need to be wrapped in a `ThemeProvider` and can be used standalone with other component libraries.
 */
export const Text = forwardRef<ElementRef<'span'>, PropsWithChildren<PropsWithSx<TextProps>>>(
  ({ variant = 'body', bold, color, className, ...props }, ref) => {
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
  }
);

Text.displayName = displayName;
