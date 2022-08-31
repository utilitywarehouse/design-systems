import * as React from "react";
import Box, { BoxProps } from "./Box";

export interface IconProps
  extends Pick<BoxProps, "ref" | "sx" | "component" | "classes"> {
  color?: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconProps?: React.SVGProps<SVGSVGElement>;
  /**
   * @deprecated in v2. forwardedRef is deprecated in v2, and will be removed in v3.
   */
  forwardedRef?: React.Ref<unknown>;
}

const Icon = React.forwardRef<SVGElement, IconProps>(function Icon(
  { color = "inherit", icon, iconProps = {}, forwardedRef, ...props },
  ref
) {
  if (forwardedRef !== undefined) {
    console.warn(
      "forwardedRef on the Icon component is deprecated in v2 and will be removed in v3. Please use ref instead."
    );
  }

  const IconComponent = icon;
  return (
    <Box {...props} component="span" ref={forwardedRef || ref}>
      <IconComponent {...iconProps} fill={color} />
    </Box>
  );
});

export default Icon;
