import { backgroundColors } from '../types';
import Typography from '../Typography';
import Box from './Box';
import type { Meta, StoryObj } from '@storybook/react';
import { colors, borderRadius } from '@utilitywarehouse/customer-ui-design-tokens';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Box> = {
  title: 'Components / Box',
  component: Box,
  decorators: [
    Story => (
      <Box padding={4}>
        <Story />
      </Box>
    ),
  ],
  argTypes: {
    background: {
      control: {
        type: 'radio',
        options: backgroundColors,
      },
    },
  },
};

type Story = StoryObj<typeof Box>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Basic: Story = {
  name: 'Playground',
  render: args => {
    const hexValue = args.background ? colors[args.background] : '';
    const children = args.children || `${args.background} (${hexValue})`;
    return (
      <Box {...args}>
        <Typography variant="h2" component="span">
          {children}
        </Typography>
      </Box>
    );
  },
  args: {
    component: 'div',
    children: '',
    background: 'white',
    height: 300,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default meta;
