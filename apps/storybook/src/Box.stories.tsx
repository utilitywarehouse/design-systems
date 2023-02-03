import { Story, Meta } from '@storybook/react';
import { backgroundColors, Box, BoxProps, Heading } from '@utilitywarehouse/web-ui';
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
  args: {
    background: 'white',
    component: 'div',
  },
} as Meta;

export const BoxStory: Story<BoxProps> = args => {
  const hexValue = args.background ? colors[args.background] : '';
  return (
    <Box padding={4}>
      <Box
        {...args}
        width="100%"
        height={300}
        display="flex"
        justifyContent="center"
        alignItems="center"
        borderRadius={borderRadius.medium}
      >
        <Heading variant="h2" component="span">
          {args.background} ({hexValue})
        </Heading>
      </Box>
    </Box>
  );
};

BoxStory.storyName = 'Box';
