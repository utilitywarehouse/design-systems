import type { Meta, StoryObj } from '@storybook/react';
import { colors } from '@utilitywarehouse/customer-ui-design-tokens';
import { Box } from '../Box';
import { Spacer } from './Spacer';

const meta: Meta<typeof Spacer> = {
  title: 'Components/Spacer',
  component: Spacer,
};

export default meta;
type Story = StoryObj<typeof Spacer>;

export const Workshop: Story = {
  render: args => {
    const isVertical = args.axis === 'vertical';
    const sx = {
      width: isVertical ? 400 : 100,
      height: isVertical ? 100 : 400,
      border: `1px solid ${colors.purple}`,
      borderRadius: '8px',
    };
    const el = <Box {...sx} background="purple" />;
    return (
      <Box
        padding={4}
        display="flex"
        flexDirection={isVertical ? 'column' : 'row'}
        justifyContent="center"
        alignItems="center"
      >
        {el}
        <Spacer {...args} />
        {el}
      </Box>
    );
  },
  argTypes: {
    axis: {
      options: ['vertical', 'horizontal'],
      control: {
        type: 'radio',
      },
    },
    size: {
      control: {
        type: 'number',
      },
    },
    inline: {
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    axis: 'vertical',
    size: 2,
    inline: false,
  },
};
