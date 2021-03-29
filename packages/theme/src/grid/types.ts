import { Breakpoint } from "../types";

export type GridConfiguration = {
  [key in Breakpoint]: {
    gutterSize: number;
    columns: number;
  };
};
