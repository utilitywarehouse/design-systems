import { backgroundColors } from '../types';
import { Heading } from '../Typography';
import type { Meta, StoryObj } from '@storybook/react';
import { colors } from '@utilitywarehouse/customer-ui-design-tokens';
import { Title, ArgsTable, Description } from '@storybook/blocks';
import Box, { BoxProps } from './Box';

const meta: Meta<typeof Box> = {
  title: 'Components / Box',
  component: StoryBox,
  tags: ['autodocs'],
  // parameters: {
  //   docs: {
  //     page: () => (
  //       <>
  //         <Title />
  //         <Description />
  //         <ArgsTable />
  //       </>
  //     ),
  //   },
  // },
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
  name: 'Workshop',
  render: (args: BoxProps) => {
    const hexValue = args.background ? colors[args.background] : '';
    const children = args.children || `${args.background} (${hexValue})`;
    return (
      <Box {...args}>
        <Heading variant="h2" component="span">
          {children}
        </Heading>
      </Box>
    );
  },
  args: {
    //   component: 'div',
    //   children: '',
    background: 'white',
    //   height: 300,
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
  },
};

export default meta;
