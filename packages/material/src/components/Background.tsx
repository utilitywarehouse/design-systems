import * as React from "react";
import { colors } from "@utilitywarehouse/customer-ui-design-tokens";
import { styled } from "@mui/material/styles";
import Box, { BoxProps } from "./Box";
import {
  OverridableComponent,
  OverrideProps,
} from "@mui/material/OverridableComponent";

export type BackgroundColor =
  | "midnight"
  | "purple"
  | "lightTint"
  | "whiteOwl"
  | "white";

const defaultBackgroundColor = "white";

interface BackgroundContextValue {
  backgroundColor: BackgroundColor;
}

const BackgroundContext = React.createContext<BackgroundContextValue>({
  backgroundColor: defaultBackgroundColor,
});

export const useBackground = (): BackgroundContextValue => {
  const context: BackgroundContextValue = React.useContext(BackgroundContext);
  if (context === undefined) {
    throw new Error(
      `useBackground must be used within the Background component`
    );
  }
  return context;
};

export interface BackgroundProviderProps {
  children?: React.ReactNode;
  backgroundColor?: BackgroundColor;
}

export const BackgroundProvider = (
  props: BackgroundProviderProps
): JSX.Element => {
  const { backgroundColor = defaultBackgroundColor, children } = props;
  return (
    <BackgroundContext.Provider value={{ backgroundColor }}>
      {children}
    </BackgroundContext.Provider>
  );
};

interface StyledBackgroundProps {
  backgroundColor: BackgroundColor;
}

const StyledBackground = styled(Box, {
  shouldForwardProp: (prop) => prop !== "backgroundColor",
})<StyledBackgroundProps>(({ backgroundColor }) => ({
  backgroundColor: colors[backgroundColor],
}));

type defaultComponent = "div";

interface CustomProps<D extends React.ElementType = defaultComponent, P = {}>
  extends Pick<BoxProps<D, P>, "sx" | "component" | "classes">,
    BackgroundProviderProps {
  /**
   * @deprecated in v2. forwardedRef is deprecated in v2, and will be removed in v3.
   */
  forwardedRef?: React.Ref<HTMLElement>;
}

interface TypeMap<D extends React.ElementType = defaultComponent, P = {}> {
  props: CustomProps<D, P>;
  defaultComponent: D;
}

export type BackgroundProps<
  D extends React.ElementType = defaultComponent,
  P = {}
> = OverrideProps<TypeMap<D, P>, D>;

const Background = React.forwardRef(function Background(
  { backgroundColor = defaultBackgroundColor, forwardedRef, ...props },
  ref
) {
  if (forwardedRef !== undefined) {
    console.warn(
      "forwardedRef on the Background component is deprecated in v2 and will be removed in v3. Please use ref instead."
    );
  }

  return (
    <BackgroundProvider backgroundColor={backgroundColor}>
      <StyledBackground
        {...props}
        ref={forwardedRef || ref}
        backgroundColor={backgroundColor}
      />
    </BackgroundProvider>
  );
}) as OverridableComponent<TypeMap>;

export default Background;
