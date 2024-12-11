import * as React from 'react';

import { BoxTypeMap as MuiBoxTypeMap } from '@mui/system';
import { OverridableComponent } from '@mui/types';

import { colorsCommon } from '@utilitywarehouse/colour-system';

import { BackgroundProvider } from './Box.context';
import { BoxOwnProps } from './Box.props';

import { createBox } from './createBox';

import type { Theme } from '../../theme';

const BaseBox = createBox();

/**
 * The `Box` component is a foundational primitive, based on the `div` element. It supports all
 * style props, as well as contextual brand background colours, and can be used
 * for building any styled element.
 */
export const Box = React.forwardRef(function Box({ background, bgcolor, ...props }, ref) {
  const invertedBackgrounds = [
    colorsCommon.brandMidnight as string,
    colorsCommon.brandPrimaryPurple as string,
  ];
  const isInvertedBackground = !!background && invertedBackgrounds.includes(background);
  const backgroundColor = bgcolor || background;

  // Prevent re-renders when context values haven't changed
  const backgroundProps = React.useMemo(
    () => ({
      background: background || 'transparent',
      isBrandBackground: isInvertedBackground,
      isInvertedBackground,
    }),
    [background, isInvertedBackground]
  );

  return background ? (
    <BackgroundProvider value={backgroundProps}>
      <BaseBox ref={ref} bgcolor={backgroundColor} {...props} />
    </BackgroundProvider>
  ) : (
    <BaseBox ref={ref} bgcolor={backgroundColor} {...props} />
  );
}) as OverridableComponent<MuiBoxTypeMap<BoxOwnProps, MuiBoxTypeMap['defaultComponent'], Theme>>;
