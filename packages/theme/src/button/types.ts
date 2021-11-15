export interface ButtonStylesNonColor {
  height: number | string;
  padding?: number | string;
  paddingTop?: number | string;
  paddingBottom?: number | string;
  paddingLeft?: number | string;
  paddingRight?: number | string;

  borderStyle: string;
  borderWidth?: number | string;
  borderTopWidth?: number | string;
  borderBottomWidth?: number | string;
  borderLeftWidth?: number | string;
  borderRightWidth?: number | string;
  borderRadius?: number | string;
  borderTopLeftRadius?: number | string;
  borderTopRightRadius?: number | string;
  borderBottomLeftRadius?: number | string;
  borderBottomRightRadius?: number | string;

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

export type ButtonSize = "small" | "medium" | "large";

export type ButtonState = "default" | "hover" | "disabled";

export type ButtonPalette = {
  [key in ButtonVariant]: {
    [key in ButtonState]: ButtonStylesColor;
  };
};

export type CommonButtonStyles = {
  [key in ButtonVariant]: {
    [key in ButtonSize]: {
      [key in ButtonState]: ButtonStylesNonColor;
    };
  };
};

export type ButtonStyles = {
  [key in ButtonVariant]: {
    [key in ButtonSize]: {
      [key in ButtonState]: ButtonStylesNonColor & ButtonStylesColor;
    };
  };
};
