import { addons } from "@storybook/addons";
import { create } from "@storybook/theming";
import { version } from "../package.json";

const theme = create({
  brandTitle: `Customer Web UI v${version}`,
});

addons.setConfig({
  panelPosition: "right",
  selectedPanel: "storybook/controls/panel",
  theme,
});
