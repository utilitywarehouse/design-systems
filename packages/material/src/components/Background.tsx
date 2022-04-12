import { Theme, getTheme } from "@utilitywarehouse/customer-ui-theme";
import React from "react";
import { BackdropLevel, Box, BoxProps } from "../";
import BackgroundProvider, { useTheme } from "./BackgroundProvider";
import { colors } from "@utilitywarehouse/customer-ui-design-tokens";
import { isDarkColorScheme } from "../utils";

interface BackgroundContextValue {
  theme: Theme;
}

export const BackgroundContext = React.createContext<BackgroundContextValue>({
  theme: getTheme("light", "level3"),
});

export const BackgroundConsumer = BackgroundContext.Consumer;

export interface BackgroundProps
  extends Pick<BoxProps, "ref" | "sx" | "component" | "classes"> {
  backgroundColor: BackdropLevel;
  forwardedRef?: React.Ref<HTMLDivElement>;
}

const BackgroundInner: React.FunctionComponent<BackgroundProps> = ({
  children,
  forwardedRef,
  backgroundColor,
  ...props
}) => {
  const { colorScheme, backdropLevel } = useTheme();
  const backgroundPalette = {
    level0: colors.midnight,
    level1: colors.purple,
    level2: colors.midTint,
    level3: colors.lightTint,
    level4: colors.whiteOwl,
    level5: colors.white,
  };

  const backgroundColorStyle = React.useMemo(() => {
    if (isDarkColorScheme(colorScheme)) return colors.codGray;
    return backgroundPalette[backdropLevel];
  }, [backgroundColor, colorScheme, backdropLevel]);

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
