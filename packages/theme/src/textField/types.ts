import { Breakpoint } from "../types";

export interface TextFieldStylesNonColor {
  borderRadius?: number;
  borderStyle?: string;
  borderTopLeftRadius?: number;
  borderTopRightRadius?: number;
  borderWidth?: number;
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: number;
  height?: number;
  marginBottom?: number;
  marginTop?: number;
  paddingLeft?: number;
  paddingRight?: number;
  transition?: string;
}

export interface TextFieldStylesColor {
  backgroundColor?: string;
  borderBottomColor?: string;
  borderColor?: string;
  color?: string;
}

export type TextFieldVariants = "default" | "success" | "error" | "disabled";

export type TextFieldState = "idle" | "hover" | "focus";

export type TextFieldElements = "wrapper" | "label" | "input" | "helperText";

export type TextFieldElementsStyles = {
  [key in TextFieldElements]: TextFieldStylesNonColor;
};

export type TextFieldPalette = {
  [key in TextFieldVariants]: {
    [key in TextFieldState]: {
      [key in TextFieldElements]: TextFieldStylesColor;
    };
  };
};

export type CommonTextFieldStyles = {
  [key in Breakpoint]: {
    [key in TextFieldVariants]: {
      [key in TextFieldState]: {
        [key in TextFieldElements]: TextFieldStylesNonColor;
      };
    };
  };
};

export type TextFieldStyles = {
  [key in Breakpoint]: {
    [key in TextFieldVariants]: {
      [key in TextFieldState]: {
        [key in TextFieldElements]: TextFieldStylesNonColor &
          TextFieldStylesColor;
      };
    };
  };
};
