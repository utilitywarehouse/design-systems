import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Grid from './Grid';
import { Box } from '../Box';
import Text from '../Text';

const meta: Meta<typeof Grid> = {
  title: 'Components/Grid',
  component: Grid,
};

export default meta;
type Story = StoryObj<typeof Box>;

const LargeContent = (props: { children: React.ReactNode }) => (
  <Box background="purple" height={200} display="grid" sx={{ placeItems: 'center' }}>
    <Text {...props} variant="body" component="span" textTransform="capitalize" />
  </Box>
);

const SmallContent = (props: { children: React.ReactNode }) => (
  <Box background="midnight" height={80} display="grid" sx={{ placeItems: 'center' }}>
    <Text {...props} variant="body" component="span" textTransform="capitalize" />
  </Box>
);

export const GridStory: Story = {
  name: 'Grid',
  render: () => {
    return (
      <Box background="whiteOwl" padding={3}>
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
                mobile: 'column-reverse',
                tablet: 'column-reverse',
                desktop: 'row',
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
      </Box>
    );
  },
};
