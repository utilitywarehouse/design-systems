import React from "react";
import { Box, BoxProps } from "..";

export interface IconProps
  extends Pick<BoxProps, "ref" | "sx" | "component" | "classes"> {
  color?: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconProps?: React.SVGProps<SVGSVGElement>;
  forwardedRef?: React.Ref<unknown>;
}

const Icon: React.FunctionComponent<IconProps> = ({
  color = "inherit",
  icon,
  iconProps = {},
  forwardedRef,
  ...props
}) => {
  const IconComponent = icon;
  return (
    <Box {...props} component="span" ref={forwardedRef}>
      <IconComponent {...iconProps} fill={color} />
    </Box>
  );
};

export default Icon;
