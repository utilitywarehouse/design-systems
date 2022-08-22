export * from "./material/core";

export { theme } from "./theme";
export type { Theme } from "@mui/material/styles/createTheme";

export { default as Box } from "./components/Box";
export type { BoxProps } from "./components/Box";

// @mui/material exports
export { styled } from "@mui/material/styles";
export type { StackProps } from "@mui/material/Stack";
export { default as Stack } from "@mui/material/Stack";

export {
  default as Background,
  useBackground,
  BackgroundProvider,
} from "./components/Background";
export type {
  BackgroundColor,
  BackgroundProps,
  BackgroundProviderProps,
} from "./components/Background";

export { default as Button, buttonClasses } from "./components/Button";
export type { ButtonProps } from "./components/Button";

export { default as Card } from "./components/Card";
export type { CardProps, CardVariant } from "./components/Card";

export { default as Container } from "./components/Container";

export { default as Grid } from "./components/Grid";
export type { GridProps } from "./components/Grid";

export { default as Icon } from "./components/Icon";
export type { IconProps } from "./components/Icon";

export { default as Hidden } from "./components/Hidden";
export type { HiddenProps } from "./components/Hidden";

export { default as Spacer } from "./components/Spacer";
export type { SpacerProps } from "./components/Spacer";

export {
  default as InteractiveCard,
  interactiveCardClasses,
} from "./components/InteractiveCard";
export type { InteractiveCardProps } from "./components/InteractiveCard";

export { default as Link, NavLink } from "./components/Links";
export type { LinkProps, NavLinkProps } from "./components/Links";

export { default as Menu, MenuItem } from "./components/Menu";
export type { MenuProps, MenuItemProps } from "./components/Menu";

export { default as TextField, textfieldClasses } from "./components/TextField";
export type { TextFieldProps } from "./components/TextField";

export {
  default as Typography,
  typographyClasses,
} from "./components/Typography";
export type { TypographyProps } from "./components/Typography";

export { default as StylesProvider } from "./components/StylesProvider";
export type { StylesProviderProps } from "./components/StylesProvider";

export { default as ThemeProvider } from "./components/ThemeProvider";
export type { ThemeProviderProps } from "./components/ThemeProvider";

export { default as useDeviceSize } from "./hooks/useDeviceSize";
