import React from "react";
import { useTheme, useMediaQuery, Breakpoint } from "../";

const useDeviceSize = (): Breakpoint => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("desktop"));
  const isTablet = useMediaQuery(theme.breakpoints.up("tablet"));

  const breakpoint = React.useMemo<Breakpoint>(() => {
    return (isDesktop
      ? "desktop"
      : isTablet
      ? "tablet"
      : "mobile") as Breakpoint;
  }, [isDesktop, isTablet]);

  return breakpoint;
};

export default useDeviceSize;
