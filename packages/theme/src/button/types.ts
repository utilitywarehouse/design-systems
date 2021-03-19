import { Breakpoint } from "../breakpoint";

export interface ButtonStyles {
  height: number | string;
  paddingTop: number;
  paddingBottom: number;
  paddingLeft: number;
  paddingRight: number;

  borderStyle: string;
  borderTopWidth: number;
  borderBottomWidth: number;
  borderLeftWidth: number;
  borderRightWidth: number;
  borderTopLeftRadius: number;
  borderTopRightRadius: number;
  borderBottomLeftRadius: number;
  borderBottomRightRadius: number;

  fontFamily: string;
  fontWeight: number;
  fontSize: number;
  lineHeight: number;

  opacity: number;
  transition: string;
}

export interface ButtonColors {
  color: string;
  backgroundColor: string;
  borderColor: string;
}

export type ButtonVariant = "primary" | "secondary" | "tertiary";

export type ButtonSize = "regular" | "large";

export type ButtonState = "idle" | "active" | "disabled";

export type Button = {
  [key in ButtonState]: ButtonStyles;
};

export type ButtonGroup = {
  [key in Breakpoint]: {
    [key in ButtonVariant]: {
      [key in ButtonSize]: Button;
    };
  };
};
