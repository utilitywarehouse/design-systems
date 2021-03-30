import React from "react";
import { Box } from "..";

export interface IconProps {
  size?: number | "inherit";
  color?: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const Icon: React.FunctionComponent<IconProps> = ({
  size = "inherit",
  color = "inherit",
  icon,
}) => {
  const Icon = icon;
  const fontSize = React.useMemo(() => {
    if (size === "inherit") {
      return "inherit";
    } else {
      return `${size}px`;
    }
  }, [size]);

  return (
    <Box fontSize={fontSize}>
      <Icon fill={color} />
    </Box>
  );
};

export default Icon;
