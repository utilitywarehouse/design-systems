import * as React from 'react';
import { colors } from '@utilitywarehouse/customer-ui-design-tokens';
import { styled } from '@mui/material/styles';
import Box, { BoxProps } from './Box';
import { OverridableComponent, OverrideProps } from '@mui/material/OverridableComponent';
import { BackgroundColor, NeutralBackgroundColor, InverseBackgroundColor } from '../types';

const DefaultBackgroundColor: BackgroundColor = 'white' as BackgroundColor;

interface BackgroundContextValue {
  backgroundColor: NeutralBackgroundColor | InverseBackgroundColor;
}

const BackgroundContext = React.createContext<BackgroundContextValue>({
  backgroundColor: DefaultBackgroundColor,
});

export const useBackground = (): BackgroundContextValue => {
  const context: BackgroundContextValue = React.useContext(BackgroundContext);
  if (context === undefined) {
    throw new Error(`useBackground must be used within the Background component`);
  }
  return context;
};

export interface BackgroundProviderProps {
  children?: React.ReactNode;
  backgroundColor: BackgroundContextValue['backgroundColor'];
}

export const BackgroundProvider = (props: BackgroundProviderProps): JSX.Element => {
  const { backgroundColor = DefaultBackgroundColor, children } = props;
  return (
    <BackgroundContext.Provider value={{ backgroundColor }}>{children}</BackgroundContext.Provider>
  );
};

interface StyledBackgroundProps {
  backgroundColor: BackgroundContextValue['backgroundColor'];
}

const StyledBackground = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'backgroundColor',
})<StyledBackgroundProps>(({ backgroundColor }) => ({
  backgroundColor: colors[backgroundColor],
}));

type DefaultComponent = 'div';

type CustomProps<D extends React.ElementType = DefaultComponent, P = {}> = Pick<
  BoxProps<D, P>,
  'sx' | 'component' | 'classes'
> &
  BackgroundProviderProps;

interface TypeMap<D extends React.ElementType = DefaultComponent, P = {}> {
  props: CustomProps<D, P>;
  defaultComponent: D;
}

export type BackgroundProps<D extends React.ElementType = DefaultComponent, P = {}> = OverrideProps<
  TypeMap<D, P>,
  D
>;

const Background = React.forwardRef(function Background(
  { backgroundColor = DefaultBackgroundColor, ...props },
  ref
) {
  return (
    <BackgroundProvider backgroundColor={backgroundColor}>
      <StyledBackground {...props} ref={ref} backgroundColor={backgroundColor} />
    </BackgroundProvider>
  );
}) as OverridableComponent<TypeMap>;

export default Background;
