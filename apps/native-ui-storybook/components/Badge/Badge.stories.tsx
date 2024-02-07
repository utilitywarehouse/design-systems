import { Meta } from '@storybook/react';
import Badge from './Badge';

const BadgeMeta: Meta<typeof Badge> = {
  title: 'components/Badge',
  component: Badge,
  // metaInfo is required for figma generation
  // @ts-ignore
  metaInfo: {
    componentDescription:
      'The badge component lets you quickly and easily add status indicators to your interface for improved usability. They are designed to be attention-grabbing and quickly convey important information.',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['outline', 'solid'],
    },
    action: {
      control: 'select',
      options: ['error', 'warning', 'success', 'info', 'muted'],
    },
    size: {
      control: 'select',
      options: ['badge'],
    },
  },
  args: {
    text: 'New Feature',
    variant: 'solid',
    action: 'muted',
    size: 'badge',
  },
};

export default BadgeMeta;

export { Badge };