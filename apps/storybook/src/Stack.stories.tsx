import { Story, Meta } from '@storybook/react';

import { colors } from '@utilitywarehouse/customer-ui-design-tokens';
import Divider from '@mui/material/Divider';
import { Box, Stack, StackProps, Typography } from '@utilitywarehouse/web-ui';

export default {
  title: 'Layout/Stack',
  component: Stack,
  argTypes: {
    spacing: {
      control: {
        type: 'number',
      },
    },
    direction: {
      control: {
        type: 'radio',
        options: ['row', 'row-reverse', 'column', 'column-reverse'],
      },
    },
    alignItems: {
      control: {
        type: 'radio',
        options: ['flex-start', 'center', 'flex-end', 'stretch', 'baseline'],
      },
    },
    justifyContent: {
      control: {
        type: 'radio',
        options: [
          'flex-start',
          'center',
          'flex-end',
          'space-between',
          'space-around',
          'space-evently',
        ],
      },
    },
  },
  args: {
    spacing: 1,
    direction: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
} as Meta;

export const StackStory: Story<StackProps> = args => {
  const sx = {
    border: `1px solid ${colors.purple}`,
    borderRadius: '8px',
  };
  return (
    <Box sx={{ padding: 1 }}>
      <Stack {...args}>
        <Box background="purple" px={2} py={4} {...sx}>
          <Typography component="span" variant="body">
            Item 1
          </Typography>
        </Box>
        <Box background="purple" px={6} py={8} {...sx}>
          <Typography component="span" variant="body">
            Item 2
          </Typography>
        </Box>
        <Box background="purple" px={12} py={16} {...sx}>
          <Typography component="span" variant="body">
            Item 3
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

StackStory.storyName = 'Stack';

export const StackWithDividerStory: Story<StackProps> = args => {
  const sx = {
    border: `1px solid ${colors.purple}`,
    borderRadius: '8px',
  };
  return (
    <Box padding={1}>
      <Stack
        {...args}
        divider={
          <Divider
            orientation={(args.direction as string).includes('row') ? 'vertical' : 'horizontal'}
            flexItem
          />
        }
      >
        <Box background="purple" px={2} py={4} {...sx}>
          <Typography component="span" variant="body">
            Item 1
          </Typography>
        </Box>
        <Box background="purple" px={6} py={8} {...sx}>
          <Typography component="span" variant="body">
            Item 2
          </Typography>
        </Box>
        <Box background="purple" px={12} py={16} {...sx}>
          <Typography component="span" variant="body">
            Item 3
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

StackWithDividerStory.storyName = 'Stack with Divider';
