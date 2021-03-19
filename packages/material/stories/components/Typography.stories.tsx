import React from "react";
import base from "paths.macro";
import { Meta } from "@storybook/react";

import { Typography } from "./Typography";
import { withBackground } from "../../src";

export default {
  title: `${base}Typographys`,
  component: Typography,
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
  },
  args: {
    variant: "h1",
    children: "Typography",
  },
} as Meta;

const AllTypography = () => {
  return (
    <React.Fragment>
      <Typography variant="h1">H1: Hello, world!</Typography>
      <Typography variant="h2">H2: Hello, world!</Typography>
      <Typography variant="h3">H3: Hello, world!</Typography>
      <Typography variant="h4">H4: Hello, world!</Typography>
      <Typography variant="h5">H5: Hello, world!</Typography>
      <Typography variant="body">Body: Hello, world!</Typography>
      <Typography variant="bodySmall">Body Small: Hello, world!</Typography>
      <Typography variant="label">Label: Hello, world!</Typography>
      <Typography variant="label" color="success">
        Label: Success!
      </Typography>
      <Typography variant="label" color="error">
        Label: Error...
      </Typography>
    </React.Fragment>
  );
};

export const BackdropLevel0 = withBackground(AllTypography, "level0");
export const BackdropLevel1 = withBackground(AllTypography, "level1");
export const BackdropLevel2 = withBackground(AllTypography, "level2");
export const BackdropLevel3 = withBackground(AllTypography, "level3");
