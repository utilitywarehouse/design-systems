import { BoxTypeMap as MuiBoxTypeMap } from '@mui/system';
import { dataAttributes, isInverseBackgroundColor } from '../utils';
import { OverridableComponent, OverrideProps } from '@mui/material/OverridableComponent';
import React, { forwardRef } from 'react';
import type { Theme } from '../theme';
import MuiBox from '@mui/material/Box';

export const backgroundColorsMapping: { [key: string]: string } = {
  white: '#ffffff',
  whiteOwl: '#f4f3f6',
  lightTint: '#ebe0f2',
  purple: '#550091',
  midnight: '#1e0a46',
};

export type BackgroundColor = 'midnight' | 'purple' | 'lightTint' | 'whiteOwl' | 'white';

const defaultBackgroundColor = 'white';

interface BackgroundContextValue {
  backgroundColor: BackgroundColor;
}

const BackgroundContext = React.createContext<BackgroundContextValue>({
  backgroundColor: defaultBackgroundColor,
});

export const useBackground = (): BackgroundContextValue => React.useContext(BackgroundContext);

export interface BackgroundProviderProps {
  children?: React.ReactNode;
  backgroundColor?: BackgroundColor;
}

export const BackgroundProvider = (props: BackgroundProviderProps): JSX.Element => {
  const { backgroundColor = defaultBackgroundColor, children } = props;
  return (
    <BackgroundContext.Provider value={{ backgroundColor }}>{children}</BackgroundContext.Provider>
  );
};

export type DefaultBackgroundComponent = 'div';

export interface CustomBackgroundProps {
  /**
   * Set the background colour according to predefined theme
   */
  backgroundColor?: BackgroundColor;
}

export type BackgroundProps<
  D extends React.ElementType<any> = DefaultBackgroundComponent,
  P = {}
> = OverrideProps<MuiBoxTypeMap<CustomBackgroundProps & P, D, Theme>, D>;

/**
 * The Background component extends `Box` to support pre-defined background colours
 * that provide visual context to child components. This means that components
 * will change foreground colour depending on the parent background colour.
 * @deprecated
 */
export const Background = forwardRef(function Background({ backgroundColor, ...props }, ref) {
  console.warn(
    'The Background component is deprecated and will be removed in v1, please use Box instead.'
  );

  return (
    <BackgroundProvider backgroundColor={backgroundColor}>
      <MuiBox
        ref={ref}
        bgcolor={backgroundColor && backgroundColorsMapping[backgroundColor]}
        {...props}
      />
    </BackgroundProvider>
  );
}) as OverridableComponent<MuiBoxTypeMap<CustomBackgroundProps, DefaultBackgroundComponent, Theme>>;
