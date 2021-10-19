import React from "react";
import { Story, Meta } from "@storybook/react";

import { Background, Box, Typography, Grid, GridSpacer } from "../src";
import type { GridProps } from "../src";
import { BackdropLevel } from "@utilitywarehouse/customer-ui-theme";

export default {
  title: "Grid",
  component: Grid,
} as Meta;

const getBox = (
  text: string,
  height?: string,
  backgroundColor?: BackdropLevel
) => (
  <Background
    backgroundColor={backgroundColor ?? "level1"}
    width="100%"
    height={height ?? "200px"}
    textAlign="center"
  >
    <Box
      flexDirection="column"
      display="flex"
      height="100%"
      justifyContent="center"
    >
      <Typography>{text}</Typography>
    </Box>
  </Background>
);

const bindTemplate = () => {
  const Template: Story<GridProps> = () => {
    return (
      <Background backgroundColor="level4" padding={3}>
        <Grid container>
          <Grid item desktop={8} mobile={4}>
            {getBox("Account actions")}
          </Grid>
          <Grid item desktop={4} mobile={4}>
            {getBox("Billing")}
          </Grid>
        </Grid>
        <GridSpacer />
        <Grid
          container
          direction={{ mobile: "column-reverse", tablet: "column-reverse" }}
        >
          <Grid item desktop={8} mobile={4}>
            <Grid container>
              <Grid item desktop={3} tablet={2} mobile={2}>
                {getBox("Quick link 1", "80px", "level0")}
              </Grid>
              <Grid item desktop={3} tablet={2} mobile={2}>
                {getBox("Quick link 2", "80px", "level0")}
              </Grid>
              <Grid item desktop={3} tablet={2} mobile={2}>
                {getBox("Quick link 3", "80px", "level0")}
              </Grid>
            </Grid>
          </Grid>
          <Grid item desktop={4} mobile={4}>
            {getBox("Recommended for you")}
          </Grid>
        </Grid>
      </Background>
    );
  };

  return Template;
};

export const GridExample = bindTemplate();
GridExample.storyName = "Grid";
