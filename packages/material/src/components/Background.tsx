import React from "react";
import { Box, BoxProps } from "../../src";
import { designTokens } from "../lib/theme";

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

export interface BackgroundProps {
  children?: React.ReactNode;
  backgroundColor: BackgroundColor;
}

const Background: React.FunctionComponent<BoxProps & BackgroundProps> = ({
  children,
  backgroundColor,
  ...props
}) => (
  <BackgroundContext.Provider value={{ backgroundColor }}>
    <Box
      {...props}
      sx={{
        ...props.sx,
        backgroundColor: designTokens.colors.backdrops.light[backgroundColor],
      }}
    >
      {children}
    </Box>
  </BackgroundContext.Provider>
);

export default Background;
