import React from "react";
import {
  BackdropLevel,
  backdropGroup,
} from "@utilitywarehouse/customer-ui-theme";
import { Box, BoxProps } from "@material-ui/core";
import { DarkModeContext } from "./DarkModeProvider";

export const BackgroundContext = React.createContext<{
  backdropLevel: BackdropLevel;
}>({
  backdropLevel: "level2",
});

export const BackgroundConsumer = BackgroundContext.Consumer;

export interface BackgroundProps {
  children?: React.ReactNode;
  level: BackdropLevel;
}

const Background: React.FunctionComponent<BoxProps & BackgroundProps> = ({
  children,
  level,
  ...props
}) => {
  const { darkModeEnabled } = React.useContext(DarkModeContext);
  const backdrop = React.useMemo(() => {
    if (darkModeEnabled) return backdropGroup.dark;
    return backdropGroup.light;
  }, [level, darkModeEnabled]);

  return (
    <BackgroundContext.Provider value={{ backdropLevel: level }}>
      <Box
        {...props}
        sx={{
          ...props.sx,
          backgroundColor: backdrop[level],
        }}
      >
        {children}
      </Box>
    </BackgroundContext.Provider>
  );
};

export default Background;
