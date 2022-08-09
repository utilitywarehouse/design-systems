import React from "react";
import { Breakpoint } from "../types";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme as useMuiTheme } from "@mui/material/styles";

const useDeviceSize = (): {
  deviceSize: Breakpoint;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
} => {
  const theme = useMuiTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("desktop"));
  const isTablet = useMediaQuery(theme.breakpoints.up("tablet"));

  const breakpoint = React.useMemo<Breakpoint>(() => {
    const device = isDesktop ? "desktop" : isTablet ? "tablet" : "mobile";
    return device as Breakpoint;
  }, [isDesktop, isTablet]);

  return {
    deviceSize: breakpoint,
    isMobile: breakpoint === "mobile",
    isTablet: breakpoint === "tablet",
    isDesktop: breakpoint === "desktop",
  };
};

export default useDeviceSize;
