import { Story, Meta } from '@storybook/react';
import { backgroundColors, Typography, Background, Box } from '@utilitywarehouse/web-ui';
import type { BackgroundProps } from '@utilitywarehouse/web-ui';
import { colors, borderRadius } from '@utilitywarehouse/customer-ui-design-tokens';

export default {
  title: 'Components/Background',
  component: Background,
  argTypes: {
    forwardedRef: { table: { disable: true } },
    sx: { table: { disable: true } },
    background: {
      control: {
        type: 'radio',
        options: backgroundColors,
      },
    },
    component: { control: { type: 'text' } },
  },
  args: {
    background: 'white',
    component: 'div',
  },
} as Meta;

export const BackgroundStory: Story<BackgroundProps> = args => {
  const hexValue = colors[args.background];
  return (
    <Box sx={{ padding: 3 }}>
      <Background
        {...args}
        sx={{
          width: '100%',
          height: 300,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: borderRadius.medium,
        }}
      >
        <Typography variant="h2" component="span">
          {args.background} ({hexValue})
        </Typography>
      </Background>
    </Box>
  );
};

BackgroundStory.storyName = 'Background';
