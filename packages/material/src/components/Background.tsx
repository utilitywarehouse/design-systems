import React from "react";
import { BackdropLevel, Box, BoxProps } from "../";
import { colors } from "@utilitywarehouse/customer-ui-design-tokens";
import { buildTheme } from "../lib/theme";
import { MuiThemeProvider, StyledEngineProvider } from "..";
import { styled } from "@mui/material/styles";

interface BackgroundContextValue {
  backdropLevel: BackdropLevel;
}

const defaultBackgroundLevel: BackdropLevel = "level5"; // white

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
  const muiTheme = buildTheme();

  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={muiTheme}>
        <BackgroundContext.Provider value={{ backdropLevel: backgroundColor }}>
          {children}
        </BackgroundContext.Provider>
      </MuiThemeProvider>
    </StyledEngineProvider>
  );
};

interface StyledBackgroundProps {
  backdropLevel: BackdropLevel;
}

const StyledBackground = styled(Box, {
  shouldForwardProp: (prop) => prop !== "backdropLevel",
})<StyledBackgroundProps>(({ backdropLevel }) => {
  const palette = {
    level0: colors.midnight,
    level1: colors.purple,
    level3: colors.lightTint,
    level4: colors.whiteOwl,
    level5: colors.white,
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
