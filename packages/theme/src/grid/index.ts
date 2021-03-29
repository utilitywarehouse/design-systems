import { GridConfiguration } from "./types";

export { GridConfiguration } from "./types";

const gridConfiguration: GridConfiguration = {
  desktop: {
    gutterSize: 3,
    columns: 12,
  },
  tablet: {
    gutterSize: 3,
    columns: 8,
  },
  mobile: {
    gutterSize: 2,
    columns: 4,
  },
};

export default gridConfiguration;
