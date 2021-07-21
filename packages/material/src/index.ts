import "./types/BreakpointOverrides";

export * from "./material/core";

export {
  default as Background,
  BackgroundContext,
  BackgroundConsumer,
} from "./components/Background";
export type { BackgroundProps } from "./components/Background";

export {
  default as BackgroundProvider,
  useTheme,
} from "./components/BackgroundProvider";
export type { BackgroundProviderProps } from "./components/BackgroundProvider";

export { default as Button } from "./components/Button";
export type { ButtonProps } from "./components/Button";

export { default as Card } from "./components/Card";
export type { CardProps } from "./components/Card";

export { default as Container } from "./components/Container";

export { default as Grid, GridSpacer } from "./components/Grid";
export type { GridProps } from "./components/Grid";

export { default as Icon } from "./components/Icon";
export type { IconProps } from "./components/Icon";

export { default as Hidden } from "./components/Hidden";
export type { HiddenProps } from "./components/Hidden";

export { default as InteractiveCard } from "./components/InteractiveCard";
export type { InteractiveCardProps } from "./components/InteractiveCard";

export { default as Link } from "./components/Link";
export type { LinkProps } from "./components/Link";

export { default as Menu, MenuProps } from "./components/Menu";

export { default as MenuItem } from "./components/MenuItem";
export type { MenuItemProps } from "./components/MenuItem";

export { default as TextField } from "./components/TextField";
export type { TextFieldProps } from "./components/TextField";

export { default as Typography } from "./components/Typography";
export type { TypographyProps } from "./components/Typography";

export {
  default as DarkModeProvider,
  DarkModeContext,
  DarkModeConsumer,
} from "./components/DarkModeProvider";
export type {
  DarkModeContextValue,
  DarkModeProviderProps,
} from "./components/DarkModeProvider";

export { default as StylesProvider } from "./components/StylesProvider";
export type { StylesProviderProps } from "./components/StylesProvider";

export { default as UIProvider } from "./components/UIProvider";
export type { UIProviderProps } from "./components/UIProvider";

export {
  default as withBackground,
  WithBackgroundProps,
} from "./hocs/withBackground";

export { default as useDeviceSize } from "./hooks/useDeviceSize";
