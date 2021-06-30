import {
  BackdropLevel,
  Theme,
  getTheme,
} from "@utilitywarehouse/customer-ui-theme";
import React from "react";
import { Box, BoxProps } from "../";
import BackgroundProvider from "./BackgroundProvider";

interface BackgroundContextValue {
  theme: Theme;
}

export const BackgroundContext = React.createContext<BackgroundContextValue>({
  theme: getTheme("light", "level3"),
});

export const BackgroundConsumer = BackgroundContext.Consumer;

export interface BackgroundProps extends BoxProps {
  backgroundColor: BackdropLevel;
  forwardedRef?: React.Ref<HTMLDivElement>;
}

const BackgroundInner: React.FunctionComponent<BackgroundProps> = ({
  children,
  forwardedRef,
  backgroundColor,
  ...props
}) => {
  const { theme } = React.useContext(BackgroundContext);

  const backgroundColorStyle = React.useMemo(() => {
    return theme.components.backdrop.backgroundColor;
  }, [backgroundColor, theme]);

  return (
    <Box
      {...props}
      sx={{
        ...props.sx,
        backgroundColor: backgroundColorStyle,
      }}
      ref={forwardedRef}
    >
      {children}
    </Box>
  );
};

const Background: React.FunctionComponent<BackgroundProps> = ({
  backgroundColor,
  ...props
}) => (
  <BackgroundProvider backgroundColor={backgroundColor}>
    <BackgroundInner {...props} backgroundColor={backgroundColor} />
  </BackgroundProvider>
);

export default Background;
