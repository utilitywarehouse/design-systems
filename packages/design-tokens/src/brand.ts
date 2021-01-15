import { colors, Colors } from "./colors";
import { typography, Typography } from "./typography";
import {
  breakpoints,
  Breakpoints,
  mediaQueries,
  MediaQueries,
} from "./breakpoints";

interface Brand {
  colors: Colors;
  typography: Typography;
  breakpoints: Breakpoints;
  mediaQueries: MediaQueries;
}

const brand: Brand = {
  colors,
  typography,
  breakpoints,
  mediaQueries,
};

export { brand, Brand };
