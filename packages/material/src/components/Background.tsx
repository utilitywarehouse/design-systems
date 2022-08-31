import * as React from "react";
import { colors } from "@utilitywarehouse/customer-ui-design-tokens";
import { styled } from "@mui/material/styles";
import Box, { BoxProps } from "./Box";

export type BackgroundColor =
  | "midnight"
  | "purple"
  | "lightTint"
  | "whiteOwl"
  | "white";

interface BackgroundContextValue {
  backgroundColor: BackgroundColor;
}

const defaultBackgroundColor = "white";

const BackgroundContext = React.createContext<BackgroundContextValue>({
  backgroundColor: defaultBackgroundColor,
});

const useBackground = (): BackgroundContextValue => {
  const context: BackgroundContextValue = React.useContext(BackgroundContext);
  if (context === undefined) {
    throw new Error(
      `useBackground must be used within the Background component`
    );
  }
  return context;
};

interface BackgroundProviderProps {
  children?: React.ReactNode;
  backgroundColor?: BackgroundColor;
}

const BackgroundProvider = (props: BackgroundProviderProps): JSX.Element => {
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

interface BackgroundProps
  extends Pick<BoxProps, "sx" | "component" | "classes">,
    BackgroundProviderProps {
  /**
   * @deprecated in v2. forwardedRef is deprecated in v2, and will be removed in v3.
   */
  forwardedRef?: React.Ref<HTMLDivElement>;
}

const Background = React.forwardRef<HTMLDivElement, BackgroundProps>(
  function Background(props, ref) {
    const {
      backgroundColor = defaultBackgroundColor,
      forwardedRef,
      ...rest
    } = props;

    if (forwardedRef !== undefined) {
      console.warn(
        "forwardedRef on the Background component is deprecated in v2 and will be removed in v3. Please use ref instead."
      );
    }

    return (
      <BackgroundProvider backgroundColor={backgroundColor}>
        <StyledBackground
          {...rest}
          ref={forwardedRef === undefined ? ref : forwardedRef}
          backgroundColor={backgroundColor}
        />
      </BackgroundProvider>
    );
  }
);

export default Background;
export { useBackground, BackgroundProvider };
export type { BackgroundProps, BackgroundProviderProps };
