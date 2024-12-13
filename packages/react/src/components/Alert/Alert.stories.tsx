import * as React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Alert } from './Alert';
import { Flex } from '../Flex/Flex';
import { Button } from '../Button/Button';
import { AlertText } from './AlertText';
import { Strong } from '../Strong/Strong';

const colorSchemes = ['cyan', 'red', 'green', 'gold'] as const;

const meta: Meta<typeof Alert> = {
  title: 'Stories / Alert',
  component: Alert,
  argTypes: {
    children: { control: { type: 'text' } },
    colorScheme: { options: colorSchemes, control: { type: 'radio' } },
    direction: { options: ['column', 'row'], control: { type: 'radio' } },
  },
  args: {
    title: 'Did you know?',
    text: 'The quick brown fox jumps over the lazy dog.',
    linkText: 'Learn more',
    linkHref: '#',
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const KitchenSink: Story = {
  parameters: { controls: { hideNoControlsWarning: true } },
  render: args => {
    return (
      <Flex direction="column" gap="800" width="800px" padding="400">
        {colorSchemes.map(colorScheme => (
          <Flex key={colorScheme} direction="column" gap="200">
            <Alert {...args} colorScheme={colorScheme} direction="row" />
            <Alert {...args} colorScheme={colorScheme} direction="column" />
            <Alert
              {...args}
              colorScheme={colorScheme}
              direction="row"
              onClose={() => alert('closed')}
            />
            <Alert
              {...args}
              colorScheme={colorScheme}
              direction="column"
              onClose={() => alert('closed')}
            />
            <Alert {...args} colorScheme={colorScheme} direction="row" linkText={undefined} />
            <Alert {...args} colorScheme={colorScheme} direction="column" linkText={undefined} />
          </Flex>
        ))}
      </Flex>
    );
  },
};

export const Workshop: Story = {};

export const ToggleAlert: Story = {
  parameters: { layout: 'none' },
  render: () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
      <Flex direction="column" align="start" gap="200" width="fit-content" padding="400">
        <Button size="small" variant="outline" onClick={handleOpen}>
          Open alert
        </Button>
        {open ? (
          <Alert direction="row" text="This is for your information." onClose={handleClose} />
        ) : null}
      </Flex>
    );
  },
};

export const AlertColorSchemes: Story = {
  name: 'Alert ColorSchemes',
  render: () => {
    return (
      <Flex direction="column" gap="200" width="fit-content">
        <Alert
          colorScheme="cyan"
          direction="row"
          text="Cyan colour scheme for informational messages"
        />
        <Alert
          colorScheme="green"
          direction="row"
          text="Green colour scheme for positive or success messages"
        />
        <Alert colorScheme="gold" direction="row" text="Gold colour scheme for warning messages" />
        <Alert
          colorScheme="red"
          direction="row"
          text="Red colour scheme for errors and higher warnings"
        />
      </Flex>
    );
  },
};

export const AlertAdvancedUsage: Story = {
  render: () => {
    return (
      <Flex align="start">
        <Alert
          colorScheme="red"
          title="Delete account"
          text={
            <AlertText>
              Are you <Strong>sure</Strong> you want to do this?
            </AlertText>
          }
          linkHref="#"
          linkText="Delete"
          onClose={() => {}}
          direction="row"
        />
      </Flex>
    );
  },
};
