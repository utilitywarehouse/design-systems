import { Meta, StoryObj } from '@storybook/react-vite';
import { colors } from '@utilitywarehouse/colour-system';
import { Spinner } from '.';
import { VariantTitle } from '../../../docs/components';
import { Flex } from '../Flex';

const meta = {
  title: 'Stories / Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    color: {
      options: [...Object.keys(colors).map(color => `$${color}`)],
      control: 'select',
      description: 'Color of the spinner',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'Size of the spinner',
    },
  },
  args: {
    size: 'md',
    color: undefined,
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Variants: Story = {
  render: args => (
    <Flex direction="column" space="lg">
      <VariantTitle title="x-small - xs">
        <Spinner {...args} size="xs" />
      </VariantTitle>
      <VariantTitle title="small - sm">
        <Spinner {...args} size="sm" />
      </VariantTitle>
      <VariantTitle title="medium - md">
        <Spinner {...args} size="md" />
      </VariantTitle>
      <VariantTitle title="large - lg">
        <Spinner {...args} size="lg" />
      </VariantTitle>
    </Flex>
  ),
};
