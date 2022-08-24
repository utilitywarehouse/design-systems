import React from "react";
import { BackgroundColor, Box, BoxProps } from "../";
import { colors } from "@utilitywarehouse/customer-ui-design-tokens";
import { styled } from "@mui/material/styles";

interface BackgroundContextValue {
  backgroundColor: BackgroundColor;
}

const defaultBackgroundLevel: BackgroundColor = "white";

const BackgroundContext = React.createContext<BackgroundContextValue>({
  backgroundColor: defaultBackgroundLevel,
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
  backgroundColor = defaultBackgroundLevel,
  children,
}) => {
  return (
    <BackgroundContext.Provider value={{ backgroundColor: backgroundColor }}>
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
  backgroundColor = defaultBackgroundLevel,
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
