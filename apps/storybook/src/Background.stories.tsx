import { Story, Meta } from '@storybook/react';
import { backgroundColors, Box, Typography, Background } from '@utilitywarehouse/uw-web-ui-react';
import type { BackgroundProps } from '@utilitywarehouse/uw-web-ui-react';
import { colors, borderRadius } from '@utilitywarehouse/customer-ui-design-tokens';

export default {
  title: 'Components/Background',
  component: Background,
  argTypes: {
    forwardedRef: { table: { disable: true } },
    sx: { table: { disable: true } },
    backgroundColor: {
      control: {
        type: 'radio',
        options: backgroundColors,
      },
    },
    component: { control: { type: 'text' } },
  },
  args: {
    backgroundColor: 'white',
    component: 'div',
  },
} as Meta;

export const BackgroundStory: Story<BackgroundProps> = (args) => {
  const hexValue = colors[args.backgroundColor];
  console.log({ hexValue });
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
          {args.backgroundColor} ({hexValue})
        </Typography>
      </Background>
    </Box>
  );
};

BackgroundStory.storyName = 'Background';
