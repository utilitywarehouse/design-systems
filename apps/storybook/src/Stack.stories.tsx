import { Story, Meta } from '@storybook/react';

import { colors } from '@utilitywarehouse/customer-ui-design-tokens';
import Divider from '@mui/material/Divider';
import { Background, Box, Stack, StackProps, Typography } from '@utilitywarehouse/web-ui';

export default {
  title: 'Components/Stack',
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
        <Background backgroundColor="purple" sx={{ ...sx, paddingX: 2, paddingY: 4 }}>
          <Typography component="span" variant="body">
            Item 1
          </Typography>
        </Background>
        <Background backgroundColor="purple" sx={{ ...sx, paddingX: 6, paddingY: 8 }}>
          <Typography component="span" variant="body">
            Item 2
          </Typography>
        </Background>
        <Background backgroundColor="purple" sx={{ ...sx, paddingX: 12, paddingY: 16 }}>
          <Typography component="span" variant="body">
            Item 3
          </Typography>
        </Background>
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
    <Box sx={{ padding: 1 }}>
      <Stack
        {...args}
        divider={
          <Divider
            orientation={(args.direction as string).includes('row') ? 'vertical' : 'horizontal'}
            flexItem
          />
        }
      >
        <Background backgroundColor="purple" sx={{ ...sx, paddingX: 2, paddingY: 4 }}>
          <Typography component="span" variant="body">
            Item 1
          </Typography>
        </Background>
        <Background backgroundColor="purple" sx={{ ...sx, paddingX: 6, paddingY: 8 }}>
          <Typography component="span" variant="body">
            Item 2
          </Typography>
        </Background>
        <Background backgroundColor="purple" sx={{ ...sx, paddingX: 12, paddingY: 16 }}>
          <Typography component="span" variant="body">
            Item 3
          </Typography>
        </Background>
      </Stack>
    </Box>
  );
};

StackWithDividerStory.storyName = 'Stack with Divider';
