import { BackdropLevel } from "./backdrop";
import { Breakpoint } from "./breakpoint";
import { ColorScheme } from "./colorScheme";

export type Theme<ComponentTheme> = {
  [key in Breakpoint]: {
    [key in ColorScheme]: {
      [key in BackdropLevel]: ComponentTheme;
    };
  };
};
