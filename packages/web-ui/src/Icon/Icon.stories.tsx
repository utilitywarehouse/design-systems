import type { Meta, StoryObj } from '@storybook/react';
import { icons } from '../storybook-utils';
import Icon, { IconProps } from './Icon';

const allIcons = [...icons['24x24'], ...icons['48x48']];

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Workshop: Story = {
  name: 'Workshop',
  render: ({ icon, color }) => {
    // @ts-ignore
    const selected: IconProps['icon'] = allIcons.find(i => i.name === `${icon}`);
    return <Icon color={color} icon={selected} />;
  },
  argTypes: {
    icon: {
      options: allIcons.map(icon => icon.name),
      control: {
        type: 'select',
      },
    },
    color: {
      control: { type: 'text' },
    },
  },
  args: {
    // @ts-ignore
    icon: 'SuccessOutlined',
    color: 'jewel',
  },
};
