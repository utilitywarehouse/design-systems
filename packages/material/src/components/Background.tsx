import React from "react";
import { Box, BoxProps } from "../";
import { designTokens } from "../lib/theme";
import { DarkModeContext } from "./DarkModeProvider";

export enum BackgroundColor {
  level0 = "level0",
  level1 = "level1",
  level2 = "level2",
  level3 = "level3",
}

export const BackgroundContext = React.createContext({
  backgroundColor: BackgroundColor.level2,
});

export const BackgroundConsumer = BackgroundContext.Consumer;

export interface BackgroundProps extends BoxProps {
  children?: React.ReactNode;
  backgroundColor: BackgroundColor;
}

const Background: React.FunctionComponent<BackgroundProps> = ({
  children,
  backgroundColor,
  ...props
}) => {
  const { darkModeEnabled } = React.useContext(DarkModeContext);
  const backgroundColorStyle = React.useMemo(() => {
    if (darkModeEnabled) return designTokens.colors.backdrops.dark.base;
    return designTokens.colors.backdrops.light[backgroundColor];
  }, [backgroundColor, darkModeEnabled]);

  return (
    <BackgroundContext.Provider value={{ backgroundColor }}>
      <Box
        {...props}
        sx={{
          ...props.sx,
          backgroundColor: backgroundColorStyle,
        }}
      >
        {children}
      </Box>
    </BackgroundContext.Provider>
  );
};

export default Background;
