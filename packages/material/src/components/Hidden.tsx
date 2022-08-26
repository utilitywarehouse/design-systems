import React from "react";
import useDeviceSize from "../hooks/useDeviceSize";
import { Breakpoint } from "../types";

type DeviceSize = Breakpoint;
type Only = DeviceSize | DeviceSize[];

export interface HiddenProps {
  mobile?: boolean;
  tablet?: boolean;
  desktop?: boolean;
  tabletUp?: boolean;
  tabletDown?: boolean;
  only?: Only;
  children?: React.ReactNode;
}

type BooleanCallbackCheck = (
  params: Record<string, boolean>,
  deviceSize: DeviceSize
) => () => boolean;

const deviceSizeOneOf = (
  deviceSize: DeviceSize,
  oneOf: DeviceSize[]
): boolean => oneOf.includes(deviceSize);

const isHiddenMobile =
  (params: Record<string, boolean>, deviceSize: DeviceSize) => () =>
    params.mobile && deviceSizeOneOf(deviceSize, ["mobile"]);

const isHiddenTablet =
  (params: Record<string, boolean>, deviceSize: DeviceSize) => () =>
    params.tablet && deviceSizeOneOf(deviceSize, ["tablet"]);

const isHiddenDesktop =
  (params: Record<string, boolean>, deviceSize: DeviceSize) => () =>
    params.desktop && deviceSizeOneOf(deviceSize, ["desktop"]);

const isHiddenTabletUp =
  (params: Record<string, boolean>, deviceSize: DeviceSize) => () =>
    params.tabletUp && deviceSizeOneOf(deviceSize, ["tablet", "desktop"]);

const isHiddenTabletDown =
  (params: Record<string, boolean>, deviceSize: DeviceSize) => () =>
    params.tabletDown && deviceSizeOneOf(deviceSize, ["mobile", "tablet"]);

const isHiddenOnly = (only: Only, deviceSize: DeviceSize) => (): boolean => {
  if (typeof only === "string") {
    return only === deviceSize;
  } else {
    return deviceSizeOneOf(deviceSize, only);
  }
};

const hiddenChecksCallbacks: Record<string, BooleanCallbackCheck> = {
  mobile: isHiddenMobile,
  tablet: isHiddenTablet,
  desktop: isHiddenDesktop,
  tabletUp: isHiddenTabletUp,
  tabletDown: isHiddenTabletDown,
};

/**
 * @deprecated in v2. This component is deprecated because its functionality
 * can be created with the sx prop or the useMediaQuery hook. See
 * https://mui.com/material-ui/migration/v5-component-changes/#hidden
 */
const Hidden: React.FunctionComponent<HiddenProps> = ({
  mobile,
  tablet,
  desktop,
  tabletUp,
  tabletDown,
  only,
  children,
}) => {
  console.warn(
    `Hidden component is deprecated in v2 and will be removed in v3. This component is deprecated because its functionality can be created with the sx prop or the useMediaQuery hook. See https://mui.com/material-ui/migration/v5-component-changes/#hidden`
  );
  const { deviceSize } = useDeviceSize();
  const isHidden = React.useMemo(() => {
    let hidden = false;
    const props: Record<string, boolean | undefined> = {
      mobile,
      tablet,
      desktop,
      tabletUp,
      tabletDown,
    };

    const hiddenChecksStack = Object.keys(hiddenChecksCallbacks)
      .map((key) => {
        if (props[key] === undefined) {
          return null;
        } else {
          const value = props[key] as boolean;
          return hiddenChecksCallbacks[key]({ [key]: value }, deviceSize);
        }
      })
      .filter((callback) => Boolean(callback));

    if (only) {
      hiddenChecksStack.push(isHiddenOnly(only, deviceSize));
    }

    while (hiddenChecksStack.length > 0 && !hidden) {
      const nextCallback = hiddenChecksStack.shift();
      if (nextCallback) {
        hidden = nextCallback();
      }
    }

    return hidden;
  }, [deviceSize, mobile, tablet, desktop, tabletUp, tabletDown, only]);

  return isHidden ? null : <>{children}</>;
};

export default Hidden;
