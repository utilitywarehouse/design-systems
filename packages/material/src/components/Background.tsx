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

export const useBackground = (): BackgroundContextValue => {
  const context = React.useContext(BackgroundContext);
  if (context === undefined) {
    throw new Error(`useBackground must be used within the BackgroundProvider`);
  }
  return context;
};

export const BackgroundConsumer = BackgroundContext.Consumer;

export interface BackgroundProps extends BoxProps {
  backgroundColor: BackdropLevel;
}

const BackgroundInner: React.ForwardRefRenderFunction<
  HTMLDivElement,
  BackgroundProps
> = ({ children, backgroundColor, ...props }, ref) => {
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
      ref={ref}
    >
      {children}
    </Box>
  );
};

const BackgroundInnerWithRef = React.forwardRef(BackgroundInner);

const Background: React.ForwardRefRenderFunction<
  HTMLDivElement,
  BackgroundProps
> = ({ backgroundColor, ...props }, ref) => (
  <BackgroundProvider backgroundColor={backgroundColor}>
    <BackgroundInnerWithRef
      {...props}
      backgroundColor={backgroundColor}
      ref={ref}
    />
  </BackgroundProvider>
);

export default React.forwardRef(Background);
