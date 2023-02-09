import { Story, Meta } from '@storybook/react';
import { backgroundColors, Typography, Box, BoxProps } from '@utilitywarehouse/web-ui';
import { colors, borderRadius } from '@utilitywarehouse/customer-ui-design-tokens';

export default {
  title: 'Components/Box',
  component: Box,
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
} as Meta;

export const BoxStory: Story<BoxProps> = args => {
  const hexValue = args.background ? (colors as { [key: string]: string })[args.background] : '';
  return (
    <Box
      {...args}
      width="100%"
      height={300}
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderRadius={borderRadius.medium}
      padding={3}
    >
      <Typography variant="h2" component="span">
        {args.background} ({hexValue})
      </Typography>
    </Box>
  );
};

BoxStory.storyName = 'Box';
BoxStory.args = {
  background: 'white',
  component: 'div',
};
