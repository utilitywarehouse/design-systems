import React from "react";
import { BackdropLevel, Box, BoxProps } from "../";
import { colors } from "@utilitywarehouse/customer-ui-design-tokens";
import { styled } from "@mui/material/styles";

interface BackgroundContextValue {
  backdropLevel: BackdropLevel;
}

const defaultBackgroundLevel: BackdropLevel = "white"; // white

const BackgroundContext = React.createContext<BackgroundContextValue>({
  backdropLevel: defaultBackgroundLevel,
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
  backgroundColor?: BackdropLevel;
}

const BackgroundProvider: React.FunctionComponent<BackgroundProviderProps> = ({
  backgroundColor = defaultBackgroundLevel,
  children,
}) => {
  return (
    <BackgroundContext.Provider value={{ backdropLevel: backgroundColor }}>
      {children}
    </BackgroundContext.Provider>
  );
};

interface StyledBackgroundProps {
  backdropLevel: BackdropLevel;
}

const StyledBackground = styled(Box, {
  shouldForwardProp: (prop) => prop !== "backdropLevel",
})<StyledBackgroundProps>(({ backdropLevel }) => {
  const palette = {
    midnight: colors.midnight,
    purple: colors.purple,
    lightTint: colors.lightTint,
    whiteOwl: colors.whiteOwl,
    white: colors.white,
  };
  const backgroundColor = palette[backdropLevel];
  return {
    backgroundColor,
  };
});

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
        backdropLevel={backgroundColor}
      />
    </BackgroundProvider>
  );
};

export default Background;
export { useBackground, BackgroundProvider };
export type { BackgroundProps, BackgroundProviderProps };
