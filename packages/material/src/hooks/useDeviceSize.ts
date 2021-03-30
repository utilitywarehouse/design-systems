import React from "react";
import { useTheme, useMediaQuery, Breakpoint } from "../";

const useDeviceSize = (): Breakpoint => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("mobile"));
  const isTablet = useMediaQuery(theme.breakpoints.between("mobile", "tablet"));
  const breakpoint = React.useMemo<Breakpoint>(() => {
    return (isMobile
      ? "mobile"
      : isTablet
      ? "tablet"
      : "desktop") as Breakpoint;
  }, [isMobile, isTablet]);

  return breakpoint;
};

export default useDeviceSize;
