import React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import { View, Text } from 'react-native';
import { Grid } from '.';

const meta = {
  title: 'Stories / Grid',
  component: Grid,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    columns: {
      control: 'object',
      description: 'Number of columns or responsive object with breakpoints',
    },
    space: {
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'],
      control: 'radio',
      description: 'Responsive spacing between grid items (applied to both rows and columns).',
    },
    gap: {
      control: 'number',
      description: 'Spacing between grid items (applied to both rows and columns)',
    },
    columnGap: {
      control: 'number',
      description: 'Column gap between items',
    },
    rowGap: {
      control: 'number',
      description: 'Row gap between items',
    },
  },
  args: {
    columns: 2,
    space: 'md',
  },
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

// GridItem component to use in examples
const GridItem = ({
  color = '#e0e0e0',
  height = 100,
  children,
}: {
  color?: string;
  height?: number;
  children?: React.ReactNode;
}) => (
  <View
    style={{
      backgroundColor: color,
      height,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
      padding: 16,
    }}
  >
    {children ?? <Text>Grid Item</Text>}
  </View>
);

export const Playground: Story = {
  parameters: {
    controls: {
      include: [
        'columns',
        'space',
        'gap',
        'columnGap',
        'rowGap',
        'style',
        'containerStyle',
        'itemStyle',
      ],
    },
  },
  args: {
    columns: 2,
    space: 'md',
  },
  render: args => (
    <Grid {...args} style={{ width: 400 }}>
      <GridItem color="#FFD6D6" />
      <GridItem color="#D6FFD6" />
      <GridItem color="#D6D6FF" />
      <GridItem color="#FFFFD6" />
      <GridItem color="#FFD6FF" />
      <GridItem color="#D6FFFF" />
    </Grid>
  ),
};

export const ThreeColumns: Story = {
  args: {
    columns: 3,
    space: 'md',
  },
  render: args => (
    <Grid {...args} style={{ width: 500 }}>
      <GridItem color="#FFD6D6" />
      <GridItem color="#D6FFD6" />
      <GridItem color="#D6D6FF" />
      <GridItem color="#FFFFD6" />
      <GridItem color="#FFD6FF" />
      <GridItem color="#D6FFFF" />
      <GridItem color="#E6D6FF" />
      <GridItem color="#FFE6D6" />
      <GridItem color="#D6FFE6" />
    </Grid>
  ),
};

export const ResponsiveColumns: Story = {
  args: {
    columns: {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4,
      xl: 5,
    },
    space: 'md',
  },
  render: args => (
    <Grid {...args} style={{ width: '100%' }}>
      <GridItem color="#FFD6D6" />
      <GridItem color="#D6FFD6" />
      <GridItem color="#D6D6FF" />
      <GridItem color="#FFFFD6" />
      <GridItem color="#FFD6FF" />
      <GridItem color="#D6FFFF" />
      <GridItem color="#E6D6FF" />
      <GridItem color="#FFE6D6" />
      <GridItem color="#D6FFE6" />
      <GridItem color="#FFD6D6" />
    </Grid>
  ),
};

export const DifferentSizes: Story = {
  args: {
    columns: 3,
    space: 'sm',
  },
  render: args => (
    <Grid {...args} style={{ width: 500 }}>
      <GridItem color="#FFD6D6" height={80} />
      <GridItem color="#D6FFD6" height={120} />
      <GridItem color="#D6D6FF" height={100} />
      <GridItem color="#FFFFD6" height={150} />
      <GridItem color="#FFD6FF" height={90} />
      <GridItem color="#D6FFFF" height={110} />
    </Grid>
  ),
};

export const CustomGaps: Story = {
  args: {
    columns: 2,
    columnGap: 24,
    rowGap: 16,
  },
  render: args => (
    <Grid {...args} style={{ width: 400 }}>
      <GridItem color="#FFD6D6" />
      <GridItem color="#D6FFD6" />
      <GridItem color="#D6D6FF" />
      <GridItem color="#FFFFD6" />
    </Grid>
  ),
};

export const WithContent: Story = {
  args: {
    columns: 2,
    space: 'md',
  },
  render: args => (
    <Grid {...args} style={{ width: 400 }}>
      <GridItem color="#FFD6D6">
        <Text>Item 1</Text>
      </GridItem>
      <GridItem color="#D6FFD6">
        <Text>Item 2</Text>
      </GridItem>
      <GridItem color="#D6D6FF">
        <Text>Item 3</Text>
      </GridItem>
      <GridItem color="#FFFFD6">
        <Text>Item 4</Text>
      </GridItem>
    </Grid>
  ),
};
