import React from "react";
import { Box, BoxProps } from "..";

export interface IconProps extends BoxProps {
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
  const Icon = icon;
  return (
    <Box {...props} component="span" ref={forwardedRef}>
      <Icon {...iconProps} fill={color} stroke={color} />
    </Box>
  );
};

export default Icon;
