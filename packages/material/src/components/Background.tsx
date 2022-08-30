import React from "react";
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
  backgroundColor?: BackgroundColor;
}

const BackgroundProvider: React.FunctionComponent<BackgroundProviderProps> = ({
  backgroundColor = defaultBackgroundColor,
  children,
}) => {
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
  extends Pick<BoxProps, "ref" | "sx" | "component" | "classes">,
    BackgroundProviderProps {
  forwardedRef?: React.Ref<HTMLDivElement>;
}

const Background: React.FC<BackgroundProps> = ({
  forwardedRef,
  backgroundColor = defaultBackgroundColor,
  ...props
}) => {
  return (
    <BackgroundProvider backgroundColor={backgroundColor}>
      <StyledBackground
        {...props}
        ref={forwardedRef}
        backgroundColor={backgroundColor}
      />
    </BackgroundProvider>
  );
};

export default Background;
export { useBackground, BackgroundProvider };
export type { BackgroundProps, BackgroundProviderProps };
