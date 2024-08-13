import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';
import { Flex } from '../Flex';
import { Button } from '../Button';

const colorSchemes = ['cyan', 'red', 'green', 'gold'] as const;

const meta: Meta<typeof Alert> = {
  title: 'Web UI / Components / Alert',
  component: Alert,
  argTypes: {
    children: { control: { type: 'text' } },
    colorScheme: { options: colorSchemes, control: { type: 'radio' } },
    direction: { options: ['column', 'row'], control: { type: 'radio' } },
  },
  args: {
    title: 'Alert title',
    text: 'Alert text purus odio, maximus tincidunt aliquet posuere, mollis ut mauris.',
    linkText: 'Alert link',
    linkHref: '#',
    colorScheme: 'cyan',
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const KitchenSink: Story = {
  parameters: { controls: { hideNoControlsWarning: true } },
  render: () => {
    return (
      <Flex direction="column" gap={2}>
        {colorSchemes.map(colorScheme => (
          <Flex key={colorScheme} direction="column" gap={2}>
            <Alert
              colorScheme={colorScheme}
              direction="row"
              title="AlertTitle"
              text="Alert text purus odio, maximus tincidunt aliquet posuere, mollis ut mauris."
              linkText="Alert link"
              linkHref="#"
            />
            <Alert
              colorScheme={colorScheme}
              direction="column"
              title="AlertTitle"
              text="Alert text purus odio, maximus tincidunt aliquet posuere, mollis ut mauris. Mauris nibh quam, hendrerit mattis ligula sit amet."
              linkText="Alert link"
              linkHref="#"
            />
            <Alert
              colorScheme={colorScheme}
              direction="row"
              text="Alert text purus odio, maximus tincidunt aliquet posuere, mollis ut mauris."
              title="Alert title"
              linkText="Alert link"
              linkHref="#"
              onClose={() => alert('closed')}
            />
            <Alert
              colorScheme={colorScheme}
              direction="column"
              title="Alert title"
              text="Alert text purus odio, maximus tincidunt aliquet posuere, mollis ut mauris. Mauris nibh quam, hendrerit mattis ligula sit amet."
              linkText="Alert link"
              linkHref="#"
              onClose={() => alert('closed')}
            />
            <Alert
              colorScheme={colorScheme}
              direction="row"
              title="Alert title"
              text="Alert text purus odio, maximus tincidunt aliquet posuere, mollis ut mauris."
              linkHref="#"
            />
            <Alert
              colorScheme={colorScheme}
              direction="column"
              title="Alert title"
              text="Alert text purus odio, maximus tincidunt aliquet posuere, mollis ut mauris. Mauris nibh quam, hendrerit mattis ligula sit amet."
              linkHref="#"
            />
          </Flex>
        ))}
      </Flex>
    );
  },
};

export const Workshop: Story = {};

export const ToggleAlert: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
      <Flex direction="column" gap={2} width="fit-content">
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
      <Flex direction="column" gap={2} width="fit-content">
        <Alert
          colorScheme="cyan"
          direction="row"
          text="Cyan colorScheme for informational messages"
        />
        <Alert
          colorScheme="green"
          direction="row"
          text="Green colorScheme for positive or success messages"
        />
        <Alert colorScheme="gold" direction="row" text="Gold colorScheme for warning messages" />
        <Alert
          colorScheme="red"
          direction="row"
          text="Red colorScheme for errors and higher warnings"
        />
      </Flex>
    );
  },
};
