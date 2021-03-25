import { Breakpoint } from "../types";

export interface ButtonStylesNonColor {
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
  textTransform: string;

  opacity: number;
  transition: string;
  transitionProperty: string;
}

export interface ButtonStylesColor {
  color: string;
  backgroundColor: string;
  borderColor: string;
}

export type ButtonVariant = "primary" | "secondary" | "tertiary";

export type ButtonSize = "regular" | "large";

export type ButtonState = "idle" | "active" | "disabled";

export type ButtonPalette = {
  [key in ButtonVariant]: {
    [key in ButtonState]: ButtonStylesColor;
  };
};

export type CommonButtonStyles = {
  [key in Breakpoint]: {
    [key in ButtonVariant]: {
      [key in ButtonSize]: {
        [key in ButtonState]: ButtonStylesNonColor;
      };
    };
  };
};

export type ButtonStyles = {
  [key in Breakpoint]: {
    [key in ButtonVariant]: {
      [key in ButtonSize]: {
        [key in ButtonState]: ButtonStylesNonColor & ButtonStylesColor;
      };
    };
  };
};
