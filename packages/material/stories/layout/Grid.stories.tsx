import React from "react";
import { Story, Meta } from "@storybook/react";

import { Background, Typography, Grid } from "../../src";
import type { GridProps } from "../../src";

export default {
  title: "Layout/Grid",
  component: Grid,
} as Meta;

const LargeContent: React.FC = (props) => (
  <Background
    backgroundColor="purple"
    sx={{ height: 200, display: "grid", placeItems: "center" }}
  >
    <Typography {...props} component="span" textTransform="capitalize" />
  </Background>
);

const SmallContent: React.FC = (props) => (
  <Background
    backgroundColor="midnight"
    sx={{ height: 80, display: "grid", placeItems: "center" }}
  >
    <Typography {...props} component="span" textTransform="capitalize" />
  </Background>
);

export const GridStory: Story<GridProps> = () => (
  <Background backgroundColor="whiteOwl" sx={{ padding: 3 }}>
    <Grid container>
      <Grid item mobile={4} desktop={8}>
        <LargeContent>account actions</LargeContent>
      </Grid>
      <Grid item mobile={4} desktop={4}>
        <LargeContent>billing</LargeContent>
      </Grid>
      <Grid item mobile={4} tablet={8} desktop={12}>
        <Grid
          container
          spacing={3}
          direction={{
            mobile: "column-reverse",
            tablet: "column-reverse",
            desktop: "row",
          }}
        >
          <Grid item mobile={4} tablet={4} desktop={8}>
            <Grid container spacing={3}>
              <Grid item mobile={2} tablet={2} desktop={3}>
                <SmallContent>quick link 1</SmallContent>
              </Grid>
              <Grid item mobile={2} tablet={2} desktop={3}>
                <SmallContent>quick link 2</SmallContent>
              </Grid>
              <Grid item mobile={2} tablet={2} desktop={3}>
                <SmallContent>quick link 3</SmallContent>
              </Grid>
            </Grid>
          </Grid>
          <Grid item mobile={4} tablet={8} desktop={4}>
            <LargeContent>recommended for you</LargeContent>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Background>
);

GridStory.storyName = "Grid";
