import React from "react";
import TextLink from "./TextLink";
import NavLink from "./NavLink";

export interface LinkProps extends React.ComponentPropsWithoutRef<"a"> {
  variant?: "default" | "active" | "secondary";
  disabled?: boolean;
  forwardedRef?: React.Ref<HTMLAnchorElement>;
}

const Link: React.FunctionComponent<LinkProps> = ({
  variant = "default",
  disabled = false,
  onClick,
  forwardedRef,
  ...props
}) => {
  console.warn(
    "[UW Customer UI]: The Link component will be deprecated in v2, please use the TextLink and NavLink components"
  );
  if (variant === "default") {
    return <TextLink {...props} variant="inherit" />;
  }
  return (
    <NavLink
      {...props}
      variant="inherit"
      active={variant === "active"}
      disabled={disabled}
      onClick={onClick}
      ref={forwardedRef}
    />
  );
};

export default Link;
