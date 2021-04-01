import { Breakpoint } from "../types";

export interface InteractiveCardStylesNonColor {
  padding: string;
  borderRadius: string;
  transition: string;
  transitionProperty: string;
}

export type InteractiveCardState = "idle" | "active";

export type InteractiveCardSize = "small" | "regular" | "large";

export type InteractiveCardVariant = "primary" | "secondary";

export interface InteractiveCardStylesColor {
  backgroundColor: string;
}

export type InteractiveCardPalette = {
  [key in InteractiveCardVariant]: {
    [key in InteractiveCardState]: InteractiveCardStylesColor;
  };
};

export type InteractiveCardStyles = {
  [key in Breakpoint]: {
    [key in InteractiveCardVariant]: {
      [key in InteractiveCardSize]: {
        [key in InteractiveCardState]: InteractiveCardStylesNonColor &
          InteractiveCardStylesColor;
      };
    };
  };
};
