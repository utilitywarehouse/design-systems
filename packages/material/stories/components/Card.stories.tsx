import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Box, CardProps, Card, Button, Typography } from '../../src';
import { BackgroundStack } from '../utils';
import Stack from '@mui/material/Stack';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    variant: { table: { disable: true } },
    forwardedRef: { table: { disable: true } },
    sx: { table: { disable: true } },
  },
} as Meta;

export const CardStory: Story<CardProps> = args => {
  return (
    <BackgroundStack>
      <Card {...args} sx={{ maxWidth: 500, height: 'fit-content' }}>
        <Stack spacing={3}>
          <Typography variant='h3' textTransform='capitalize'>
            card component
          </Typography>
          <Typography>
            Cards are surfaces that display content and actions on a single topic. They should be
            easy to scan for relevant and actionable information.
          </Typography>
        </Stack>
        <Box sx={{ marginTop: 4 }}>
          <Button variant='secondary'>Learn more</Button>
        </Box>
      </Card>
    </BackgroundStack>
  );
};

CardStory.storyName = 'Card';
