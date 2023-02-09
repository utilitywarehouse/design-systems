import { Story, Meta } from '@storybook/react';
import { icons } from './icons';
import { Icon, IconProps } from '@utilitywarehouse/web-ui';
import { BackgroundStack } from './utils';

const allIcons = [...icons['24x24'], ...icons['48x48']];

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    forwardedRef: { table: { disable: true } },
    icon: {
      control: {
        type: 'select',
        options: allIcons.map(icon => icon.name),
      },
    },
  },
  args: {
    icon: allIcons[0].name,
    color: 'midnight',
  },
} as Meta;

interface IconStoryProps extends Omit<IconProps, 'icon'> {
  icon: string;
}

export const IconStory: Story<IconStoryProps> = args => {
  const icon = allIcons.find(i => i.name === args.icon);
  return (
    <BackgroundStack>
      <Icon {...args} icon={icon} />
    </BackgroundStack>
  );
};
IconStory.storyName = 'Icon';
