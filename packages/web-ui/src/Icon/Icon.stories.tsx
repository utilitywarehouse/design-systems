import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { icons } from '../storybook-utils';
import Icon, { IconProps } from './Icon';
import Stack from '../Stack';
import Heading from '../Heading';
import Text from '../Text';
import Box from '../Box';
import { borderRadius, colors, transitions } from '@utilitywarehouse/customer-ui-design-tokens';
import Tooltip from '@mui/material/Tooltip';

const allIcons = [...icons['24x24'], ...icons['48x48']];

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
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
      <Box background="white" padding={4} width="fit-content" borderRadius={borderRadius.medium}>
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
      control: { type: 'text' },
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

interface IconsProps {
  iconSet: '24x24' | '48x48';
}

const Icons = (props: IconsProps) => {
  const { iconSet } = props;
  const copyToClipboard = (text: string) => navigator.clipboard.writeText(text);
  const [copied, setCopied] = useState(false);

  return (
    <Stack spacing={2}>
      <Stack spacing={1}>
        <Heading component="span" variant="h2">
          {iconSet}
        </Heading>
        <Text component="span" variant="subtitle">
          Click on icon card to copy import statement
        </Text>
      </Stack>
      <Box display="grid" gridTemplateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={3}>
        {icons[iconSet].map((icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element) => {
          const IconComponent = icon;
          return (
            <Box
              key={icon.name}
              background="white"
              paddingY={3}
              borderRadius={3}
              sx={{
                cursor: 'pointer',
                transition: `${transitions.duration}ms ${transitions.easingFunction}`,
                transitionProperty: 'border-color',
                border: `2px solid ${colors.white}`,
                ':hover': {
                  borderColor: colors.pink,
                },
              }}
              onClick={() => {
                copyToClipboard(
                  `import ${icon.name.replace(
                    'Icon', // Not all icons have the Icon suffix, so in order to have some consistency, we'll remove it from those that do and add it to all icon names
                    ''
                  )}Icon from "@utilitywarehouse/customer-ui-react-icons/${iconSet}/${icon.name}"`
                );
                setCopied(true);
              }}
            >
              <Tooltip
                placement="bottom"
                title={
                  <Text component="span" variant="caption" sx={{ color: colors.white }}>
                    {copied ? 'Copied!' : 'Click to copy import'}
                  </Text>
                }
                TransitionProps={{
                  onExited: () => setCopied(false),
                }}
              >
                <Stack spacing={2} alignItems="center">
                  <IconComponent fill="midnight" />
                  <Text variant="body" component="span">
                    {icon.name.replace('Icon', '')}
                  </Text>
                </Stack>
              </Tooltip>
            </Box>
          );
        })}
      </Box>
    </Stack>
  );
};

export const IconographyKitchenSink: Story = {
  name: 'React Icons Kitchen Sink',
  render: () => {
    return (
      <Box background="whiteOwl" padding={6}>
        <Stack spacing={4}>
          <Icons iconSet="24x24" />
          <Icons iconSet="48x48" />
        </Stack>
      </Box>
    );
  },
};
