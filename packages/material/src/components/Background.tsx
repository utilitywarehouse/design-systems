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

interface BackgroundProviderProps extends BackgroundContextValue {
  children?: React.ReactNode;
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
   * @deprecated in v2. The forwardedRef prop will be removed in v3.
   */
  forwardedRef?: React.Ref<HTMLDivElement>;
}

const Background = React.forwardRef<HTMLDivElement, BackgroundProps>(
  function Background(props, ref) {
    const {
      backgroundColor = defaultBackgroundColor,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      forwardedRef,
      ...rest
    } = props;

    if (forwardedRef) {
      console.warn(
        "The forwardedRef prop on the Background component is deprecated in v2 and will be removed in v3. Please use ref instead."
      );
    }

    return (
      <BackgroundProvider backgroundColor={backgroundColor}>
        <StyledBackground
          {...rest}
          ref={ref || forwardedRef}
          backgroundColor={backgroundColor}
        />
      </BackgroundProvider>
    );
  }
);

export default Background;
export { useBackground, BackgroundProvider };
export type { BackgroundProps, BackgroundProviderProps };
