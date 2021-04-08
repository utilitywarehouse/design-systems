import React from "react";
import { Box, BoxProps } from "..";

export interface IconProps extends BoxProps {
  color?: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconProps?: React.SVGProps<SVGSVGElement>;
}

const Icon: React.ForwardRefRenderFunction<HTMLDivElement, IconProps> = (
  { color = "inherit", icon, iconProps = {}, ...props },
  ref
) => {
  const Icon = icon;
  return (
    <Box {...props} component="span" ref={ref}>
      <Icon {...iconProps} fill={color} stroke={color} />
    </Box>
  );
};

export default React.forwardRef(Icon);
