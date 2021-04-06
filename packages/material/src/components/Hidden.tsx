import React from "react";
import { Breakpoint } from "@utilitywarehouse/customer-ui-theme";
import useDeviceSize from "../hooks/useDeviceSize";

type DeviceSize = Breakpoint;
type Only = DeviceSize | DeviceSize[];

export interface HiddenProps {
  mobileUp?: boolean;
  mobileDown?: boolean;
  tabletUp?: boolean;
  tabletDown?: boolean;
  desktopUp?: boolean;
  desktopDown?: boolean;
  only?: Only;
}

type BooleanCallbackCheck = (
  params: Record<string, boolean>,
  deviceSize: DeviceSize
) => () => boolean;

const deviceSizeOneOf = (
  deviceSize: DeviceSize,
  oneOf: DeviceSize[]
): boolean => oneOf.includes(deviceSize);

const isHiddenMobileUp = (
  params: Record<string, boolean>,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  deviceSize: DeviceSize
) => () => Boolean(params.mobileUp);

const isHiddenMobileDown = (
  params: Record<string, boolean>,
  deviceSize: DeviceSize
) => () =>
  params.mobileDown ? deviceSizeOneOf(deviceSize, ["mobile"]) : false;

const isHiddenTabletUp = (
  params: Record<string, boolean>,
  deviceSize: DeviceSize
) => () =>
  params.tabletUp ? deviceSizeOneOf(deviceSize, ["tablet", "desktop"]) : false;

const isHiddenTabletDown = (
  params: Record<string, boolean>,
  deviceSize: DeviceSize
) => () =>
  params.tabletDown ? deviceSizeOneOf(deviceSize, ["mobile", "tablet"]) : false;

const isHiddenDesktopUp = (
  params: Record<string, boolean>,
  deviceSize: DeviceSize
) => () =>
  params.desktopUp ? deviceSizeOneOf(deviceSize, ["desktop"]) : false;

const isHiddenDesktopDown = (
  params: Record<string, boolean>,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  deviceSize: DeviceSize
) => () => Boolean(params.desktopDown);

const isHiddenOnly = (only: Only, deviceSize: DeviceSize) => (): boolean => {
  if (typeof only === "string") {
    return only === deviceSize;
  } else {
    return deviceSizeOneOf(deviceSize, only);
  }
};

const hiddenChecksCallbacks: Record<string, BooleanCallbackCheck> = {
  mobileUp: isHiddenMobileUp,
  mobileDown: isHiddenMobileDown,
  tabletUp: isHiddenTabletUp,
  tabletDown: isHiddenTabletDown,
  desktopUp: isHiddenDesktopUp,
  desktopDown: isHiddenDesktopDown,
};

const Hidden: React.FunctionComponent<HiddenProps> = ({
  mobileUp,
  mobileDown,
  tabletUp,
  tabletDown,
  desktopUp,
  desktopDown,
  only,
  children,
}) => {
  const deviceSize = useDeviceSize();
  const isHidden = React.useMemo(() => {
    let hidden = false;
    const props: Record<string, boolean | undefined> = {
      mobileUp,
      mobileDown,
      tabletUp,
      tabletDown,
      desktopUp,
      desktopDown,
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
  }, [
    deviceSize,
    mobileUp,
    mobileDown,
    tabletUp,
    tabletDown,
    desktopUp,
    desktopDown,
    only,
  ]);

  return isHidden ? null : <>{children}</>;
};

export default Hidden;
