import { BackdropLevel, ColorScheme } from "../types";

export interface BackdropStyles {
  backgroundColor: string;
}

export type Backdrops = {
  [key in ColorScheme]: {
    [key in BackdropLevel]: BackdropStyles;
  };
};
