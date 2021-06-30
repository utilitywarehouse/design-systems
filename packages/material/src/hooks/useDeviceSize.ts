import "../types/BreakpointOverrides";
import React from "react";
import { useMuiTheme, useMediaQuery, Breakpoint } from "../";

const useDeviceSize = (): Breakpoint => {
  const theme = useMuiTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("desktop"));
  const isTablet = useMediaQuery(theme.breakpoints.up("tablet"));

  const breakpoint = React.useMemo<Breakpoint>(() => {
    const device = isDesktop ? "desktop" : isTablet ? "tablet" : "mobile";
    return device as Breakpoint;
  }, [isDesktop, isTablet]);

  return breakpoint;
};

export default useDeviceSize;
