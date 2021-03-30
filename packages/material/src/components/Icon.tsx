import React from "react";
import { Box, BoxProps } from "..";

export interface IconProps extends BoxProps {
  color?: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const Icon: React.FunctionComponent<IconProps> = ({
  color = "inherit",
  icon,
  ...props
}) => {
  const Icon = icon;
  return (
    <Box {...props}>
      <Icon fill={color} />
    </Box>
  );
};

export default Icon;
