import type { Meta, StoryObj } from '@storybook/react';
import { icons } from '../storybook-utils';
import { Icon } from './Icon';
import type { IconProps } from './Icon';
import { Box } from '../Box';
import { colorsCommon } from '@utilitywarehouse/colour-system';
import { legacyColors } from './legacy-colors';

const allIcons = [...icons['24x24'], ...icons['48x48']];

const meta: Meta<typeof Icon> = {
  title: 'Web UI / Components / Icon',
  component: Icon,
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Workshop: Story = {
  name: 'Workshop',
  parameters: { layout: 'centered' },
  // @ts-ignore
  render: ({ icon, color, width, height }) => {
    // @ts-ignore
    const selected: IconProps['icon'] = allIcons.find(i => i.name === `${icon}`);
    const iconProps = !!height && !!width ? { width, height } : {};
    return (
      <Box bgcolor={colorsCommon.brandWhite} padding={4} width="fit-content" borderRadius="16px">
        <Icon color={color} icon={selected} iconProps={iconProps} />
      </Box>
    );
  },
  argTypes: {
    icon: {
      options: allIcons.map(icon => icon.name),
      control: {
        type: 'select',
      },
    },
    color: {
      options: Object.keys(legacyColors),
      control: { type: 'select' },
    },
    // @ts-ignore
    width: {
      control: {
        type: 'number',
      },
    },
    height: {
      control: {
        type: 'number',
      },
    },
  },
  args: {
    // @ts-ignore
    icon: 'SuccessOutlined',
    color: 'cyan',
  },
};
