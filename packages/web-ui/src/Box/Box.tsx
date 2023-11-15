import * as React from 'react';
import { BoxTypeMap as MuiBoxTypeMap } from '@mui/system';
import { OverridableComponent } from '@mui/types';
import { forwardRef, useMemo } from 'react';
import { type Theme } from '../theme';
import { colorsCommon } from '@utilitywarehouse/colour-system';
import { BackgroundProvider } from './Box.context';
import { BoxOwnProps } from './Box.props';
import { createBox } from './createBox';

const BaseBox = createBox();

/**
 * Box is a foundational primitive, based on the `div` element. It supports all
 * style props, as well as contextual brand background colours, and can be used
 * for building any styled element.
 *
 * > This component does not need to be wrapped in a `ThemeProvider` and can be used standalone with other component libraries.
 */
export const Box = forwardRef(function Box({ background, bgcolor, ...props }, ref) {
  const isBrandBackground =
    !!background &&
    [colorsCommon.brandMidnight, colorsCommon.brandPrimaryPurple].includes(background);
  const backgroundColor = bgcolor || background;

  // Prevent re-renders when context values haven't changed
  const backgroundProps = useMemo(
    () => ({ background: background || 'transparent', isBrandBackground }),
    [background, isBrandBackground]
  );

  return background ? (
    <BackgroundProvider value={backgroundProps}>
      <BaseBox ref={ref} bgcolor={backgroundColor} {...props} />
    </BackgroundProvider>
  ) : (
    <BaseBox ref={ref} bgcolor={backgroundColor} {...props} />
  );
}) as OverridableComponent<MuiBoxTypeMap<BoxOwnProps, MuiBoxTypeMap['defaultComponent'], Theme>>;
