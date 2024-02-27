import { Meta } from '@storybook/react';
import Badge from './Badge';

const BadgeMeta: Meta<typeof Badge> = {
  title: 'components/Badge',
  tags: ['autodocs'],
  component: Badge,
  // metaInfo is required for figma generation
  // @ts-ignore
  metaInfo: {
    componentDescription:
      'The badge component lets you quickly and easily add status indicators to your interface for improved usability. They are designed to be attention-grabbing and quickly convey important information.',
  },
  argTypes: {
    colorScheme: {
      control: 'select',
      options: ['cyan', 'red', 'green', 'gold', 'grey'],
    },
    borderless: {
      control: 'boolean',
    },
    strong: {
      control: 'boolean',
    },
    size: {
      control: 'select',
      options: ['large', 'small'],
    },
  },
  args: {
    text: 'New Feature',
    strong: false,
    borderless: false,
    colorScheme: 'cyan',
    size: 'large',
  },
};

export default BadgeMeta;

export { Badge };
