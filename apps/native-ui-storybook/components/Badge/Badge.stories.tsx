import { Meta } from '@storybook/react';
import Badge from './Badge';
import Variants from './Variants';

const BadgeMeta: Meta<typeof Badge> = {
  title: 'Native UI / Components / Badge',
  component: Badge,
  // metaInfo is required for figma generation
  // @ts-ignore
  metaInfo: {
    componentDescription:
      'The badge component lets you quickly and easily add status indicators to your interface for improved usability. They are designed to be attention-grabbing and quickly convey important information.',
  },
};

export default BadgeMeta;

export { Badge as Playground, Variants };
