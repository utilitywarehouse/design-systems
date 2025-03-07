import React, { ElementType } from 'react';
import { Icon } from '.';
import { Meta, StoryObj } from '@storybook/react';
import * as Icons from '@utilitywarehouse/react-native-icons';
import { colors } from '@utilitywarehouse/colour-system';
import { ColorValue } from '../../types';

const meta = {
  title: 'Stories / Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    as: {
      control: 'select',
      options: [...Object.keys(Icons)],
      description: 'The Icon that should render in as the component',
      defaultValue: 'Helper text icon',
    },
    color: {
      options: [...Object.keys(colors)],
      control: 'select',
      description: 'Background color of the Icon. Use the color name from the theme.',
    },
  },
  args: {
    as: Object.keys(Icons)[0] as ElementType,
    color: 'grey1000' as ColorValue,
  },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  // @ts-expect-error - This is a playground
  render: ({ as: icon, color }) => {
    const as = icon === 'none' ? undefined : Icons[icon];
    return <Icon as={as} color={colors[color]} />;
  },
};
