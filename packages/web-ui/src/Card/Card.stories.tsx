import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';
import { backgroundColors } from '../types';
import { Flex } from '../Flex';
import { Background } from '../Background';
import { Stack } from '../Stack';
import { Box } from '../Box';
import { Button } from '../Button';
import { Typography } from '../Typography';
import { BackgroundColor } from '../Background/Background';

const meta: Meta<typeof Card> = {
  title: 'Web UI / Deprecated / Card',
  component: Card,
};
export default meta;
type Story = StoryObj<typeof Card>;

export const KitchenSink: Story = {
  render: args => (
    <Flex direction="column" gap={0}>
      {backgroundColors.map(bg => (
        <Background
          key={bg}
          backgroundColor={bg as BackgroundColor}
          display="flex"
          justifyContent="center"
          padding={4}
        >
          <Card {...args} sx={{ maxWidth: 500, height: 'fit-content' }}>
            <Stack spacing={3}>
              <Typography variant="h3" textTransform="capitalize">
                card component
              </Typography>
              <Typography variant="body">
                Cards are surfaces that display content and actions on a single topic. They should
                be easy to scan for relevant and actionable information.
              </Typography>
            </Stack>
            <Box sx={{ marginTop: 4 }}>
              <Button variant="secondary">Learn more</Button>
            </Box>
          </Card>
        </Background>
      ))}
    </Flex>
  ),
};
