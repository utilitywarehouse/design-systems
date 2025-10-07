import { Meta, StoryObj } from '@storybook/react-vite';
import { Box } from '../Box';
import { Flex } from '../Flex';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Stories / Flex',
  component: Flex,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    space: {
      options: ['none', '2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'],
      control: 'radio',
      description: 'The space between the children of the flex container.',
    },
    direction: {
      options: ['row', 'column', 'row-reverse', 'column-reverse'],
      control: 'select',
      description: 'The direction of the flex container.',
    },
    align: {
      options: ['flex-start', 'flex-end', 'center', 'stretch', 'baseline'],
      control: 'select',
      description: 'The align of the flex container.',
    },
    wrap: {
      options: ['wrap', 'nowrap', 'wrap-reverse'],
      control: 'radio',
      description: 'The wrap of the flex container.',
    },
    justify: {
      options: [
        'flex-start',
        'flex-end',
        'center',
        'space-between',
        'space-around',
        'space-evenly',
      ],
      control: 'select',
      description: 'The justify of the flex container.',
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    direction: 'row',
    align: 'center',
    wrap: 'wrap',
    justify: 'flex-start',
    space: 'sm',
  },
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: args => (
    <Flex {...args}>
      {Array.from({ length: 4 }).map((_, index) => (
        <Box
          key={index}
          // @ts-expect-error - Box does not support dynamic bg colors yet
          bg={`$grey${index + 2}00`}
          w={100 + index * 10}
          h={100 + index * 10}
          borderColor="$grey800"
          borderRadius="sm"
          borderWidth="2"
        />
      ))}
    </Flex>
  ),
};
