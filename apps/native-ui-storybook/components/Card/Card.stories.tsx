import Card from './Card';
import Variants from './Variants';
import type { Meta } from '@storybook/react';

const CardMeta: Meta<typeof Card> = {
  title: 'Native UI / Components / Card',
  component: Card,
  argTypes: {},
  args: {},
};

export default CardMeta;

export { Card as Playground, Variants };
