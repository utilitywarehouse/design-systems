import { Meta } from '@storybook/react';
import Badge from './Badge';
import Variants from './Variants';

const BadgeMeta: Meta<typeof Badge> = {
  title: 'Native UI / Components / Badge',
  component: Badge,
};

export default BadgeMeta;

export { Badge as Playground, Variants };
