import { BoxTypeMap as MuiBoxTypeMap } from '@mui/system';
import { OverridableComponent, OverrideProps } from '@mui/material/OverridableComponent';
import { createContext, forwardRef, useContext, useMemo } from 'react';
import type { Theme } from '../theme';
import MuiBox from '@mui/material/Box';
import { colorsCommon } from '@utilitywarehouse/colour-system';

export type DefaultBoxComponent = 'div';

export interface CustomBoxProps {
  /**
   * Sets the background colour.
   *
   * When 'purple' and 'midnight' brand colours are used, child `Text` &
   * `Heading` components have their foreground colour set to 'white'.
   */
  background?: string; // we are not setting this as MuiBoxProps['backgroundColor'] as we don't believe there is any need for it to be responsive, yet.
}

export type BoxProps<
  D extends React.ElementType<any> = DefaultBoxComponent,
  P = {}
> = OverrideProps<MuiBoxTypeMap<CustomBoxProps & P, D, Theme>, D>;

type BackgroundContextValue = { background: string; isBrandBackground: boolean };

const backgroundContext = createContext<BackgroundContextValue>({
  background: colorsCommon.brandWhite,
  isBrandBackground: false,
});

const BackgroundProvider = backgroundContext.Provider;

export const useBackground = () => useContext(backgroundContext);

/**
 * Box is a low-level primitive, which supports theme-aware styling props, and can
 * be used for building any styled element.
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
      <MuiBox ref={ref} bgcolor={backgroundColor} {...props} />
    </BackgroundProvider>
  ) : (
    <MuiBox ref={ref} bgcolor={backgroundColor} {...props} />
  );
}) as OverridableComponent<MuiBoxTypeMap<CustomBoxProps, DefaultBoxComponent, Theme>>;
