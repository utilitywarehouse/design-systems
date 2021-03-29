import { Breakpoint } from "../types";

export interface LinkStylesNonColor {
  transition: string;
  transitionProperty: string;
  opacity: number;
  textDecoration: string;
  textDecorationThickness: number;
  textUnderlineOffset: number;
  cursor: string;
}

export interface LinkStylesColor {
  color: string;
  textDecorationColor: string;
}

export type LinkVariants = "default" | "active" | "secondary";

export type LinkState = "idle" | "hover";

export type LinkPalette = {
  [key in LinkVariants]: {
    [key in LinkState]: LinkStylesColor;
  };
};

export type CommonLinkStyles = {
  [key in Breakpoint]: {
    [key in LinkVariants]: {
      [key in LinkState]: LinkStylesNonColor;
    };
  };
};

export type LinkStyles = {
  [key in Breakpoint]: {
    [key in LinkVariants]: {
      [key in LinkState]: LinkStylesNonColor & LinkStylesColor;
    };
  };
};
