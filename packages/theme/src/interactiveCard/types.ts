import { Breakpoint } from "../types";

export interface InteractiveCardStylesNonColor {
  padding: string;
  borderRadius: string;
  transition: string;
  transitionProperty: string;
}

export type InteractiveCardState = "idle" | "active";

export interface InteractiveCardStylesColor {
  backgroundColor: string;
}

export type InteractiveCardPalette = {
  [key in InteractiveCardState]: InteractiveCardStylesColor;
};

export type InteractiveCardStyles = {
  [key in Breakpoint]: {
    [key in InteractiveCardState]: InteractiveCardStylesNonColor &
      InteractiveCardStylesColor;
  };
};
