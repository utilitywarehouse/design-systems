import React from 'react';
import type { ElementType } from 'react';
import { Story, Meta } from '@storybook/react';

import { Typography, Box, Background } from '@utilitywarehouse/uw-web-ui-react';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import { icons } from './icons';
import { colors, transitions } from '@utilitywarehouse/customer-ui-design-tokens';

export default {
  title: 'Iconography',
  components: [...icons['24x24'], ...icons['48x48']],
  args: {},
} as Meta;

interface IconsProps {
  iconSet: '24x24' | '48x48';
}

const Icons: React.FC<IconsProps> = props => {
  const { iconSet } = props;
  const copyToClipboard = (text: string) => navigator.clipboard.writeText(text);
  const [copied, setCopied] = React.useState(false);

  return (
    <Stack spacing={2}>
      <Stack spacing={1}>
        <Typography component="span" variant="h2">
          {iconSet}
        </Typography>
        <Typography component="span" variant="subtitle">
          Click on icon card to copy import statement
        </Typography>
      </Stack>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: 3,
        }}
      >
        {icons[iconSet].map((icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element) => {
          const IconComponent = icon;
          return (
            <Background
              key={icon.name}
              backgroundColor="white"
              sx={{
                transition: `${transitions.duration}ms ${transitions.easingFunction}`,
                transitionProperty: 'border-color',
                paddingY: 3,
                border: `2px solid ${colors.white}`,
                borderRadius: 3,
                cursor: 'pointer',
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
                  <Typography component="span" variant="caption" sx={{ color: colors.white }}>
                    {copied ? 'Copied!' : 'Click to copy import'}
                  </Typography>
                }
                TransitionProps={{
                  onExited: () => setCopied(false),
                }}
              >
                <Stack spacing={2} alignItems="center">
                  <IconComponent fill="midnight" />
                  <Typography variant="body" component="span">
                    {icon.name.replace('Icon', '')}
                  </Typography>
                </Stack>
              </Tooltip>
            </Background>
          );
        })}
      </Box>
    </Stack>
  );
};

export const IconsStory: Story = () => (
  <Background backgroundColor="whiteOwl" sx={{ padding: 6 }}>
    <Stack spacing={4}>
      <Icons iconSet="24x24" />
      <Icons iconSet="48x48" />
    </Stack>
  </Background>
);
IconsStory.storyName = 'Kitchen Sink';

interface IconsCustomStoryProps {
  icon: string;
  fill: string;
  width?: number | string | undefined;
  height?: number | string | undefined;
}

export const Icons24Story: Story<IconsCustomStoryProps> = args => {
  const IconComponent = icons['24x24'].find(icon => icon.name === args.icon) as ElementType;

  return (
    <Box
      sx={{
        padding: 6,
        display: 'grid',
        placeItems: 'center',
      }}
    >
      <IconComponent fill={args.fill} width={args.width} height={args.height} />
    </Box>
  );
};
Icons24Story.storyName = '24 x 24';
Icons24Story.argTypes = {
  icon: {
    control: {
      type: 'select',
      options: icons['24x24'].map(icon => icon.name),
    },
  },
  fill: {
    control: {
      type: 'select',
      options: colors,
    },
  },
  width: {
    control: {
      type: 'text',
    },
  },
  height: {
    control: {
      type: 'text',
    },
  },
};
Icons24Story.args = {
  icon: icons['24x24'][0].name,
  fill: 'midnight',
  width: '24',
  height: '24',
};
Icons24Story.parameters = {
  chromatic: { disableSnapshot: true },
};

export const Icons48Story: Story<IconsCustomStoryProps> = args => {
  const IconComponent = icons['48x48'].find(icon => icon.name === args.icon) as ElementType;

  return (
    <Box
      sx={{
        padding: 6,
        display: 'grid',
        placeItems: 'center',
      }}
    >
      <IconComponent fill={args.fill} width={args.width} height={args.height} />
    </Box>
  );
};
Icons48Story.storyName = '48 x 48';
Icons48Story.argTypes = {
  icon: {
    control: {
      type: 'select',
      options: icons['48x48'].map(icon => icon.name),
    },
  },
  fill: {
    control: {
      type: 'select',
      options: colors,
    },
  },
  width: {
    control: {
      type: 'text',
    },
  },
  height: {
    control: {
      type: 'text',
    },
  },
};
Icons48Story.args = {
  icon: icons['48x48'][0].name,
  fill: 'midnight',
  width: '48',
  height: '48',
};
Icons48Story.parameters = {
  chromatic: { disableSnapshot: true },
};
