import type { Meta, StoryObj } from '@storybook/react';
import { colors } from '@utilitywarehouse/customer-ui-design-tokens';
import { Box } from '../Box';
import Stack from '../Stack';
import Text from '../Text';
import Divider from '@mui/material/Divider';

const meta: Meta<typeof Stack> = {
  title: 'Components/Stack',
  component: Stack,
};

export default meta;
type Story = StoryObj<typeof Stack>;

export const Workshop: Story = {
  render: args => {
    const sx = {
      border: `1px solid ${colors.purple}`,
      borderRadius: '8px',
    };
    return (
      <Box sx={{ padding: 1 }}>
        <Stack
          {...args}
          divider={
            args.divider ? (
              <Divider
                orientation={(args.direction as string).includes('row') ? 'vertical' : 'horizontal'}
                flexItem
              />
            ) : null
          }
        >
          <Box background="purple" px={2} py={4} {...sx}>
            <Text component="span" variant="body">
              Item 1
            </Text>
          </Box>
          <Box background="purple" px={6} py={8} {...sx}>
            <Text component="span" variant="body">
              Item 2
            </Text>
          </Box>
          <Box background="purple" px={12} py={16} {...sx}>
            <Text component="span" variant="body">
              Item 3
            </Text>
          </Box>
        </Stack>
      </Box>
    );
  },
  argTypes: {
    spacing: {
      control: {
        type: 'number',
      },
    },
    direction: {
      options: ['row', 'row-reverse', 'column', 'column-reverse'],
      control: {
        type: 'radio',
      },
    },
    alignItems: {
      options: ['flex-start', 'center', 'flex-end', 'stretch', 'baseline'],
      control: {
        type: 'radio',
      },
    },
    justifyContent: {
      options: [
        'flex-start',
        'center',
        'flex-end',
        'space-between',
        'space-around',
        'space-evently',
      ],
      control: {
        type: 'radio',
      },
    },
  },
  args: {
    spacing: 1,
    direction: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    divider: false,
  },
};
