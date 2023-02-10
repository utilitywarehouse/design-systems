import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { backgroundColors, Box, Heading } from '@utilitywarehouse/web-ui';
import type { BoxProps } from '@utilitywarehouse/web-ui';
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
} as ComponentMeta<typeof Box>;

export const BoxStory: ComponentStory<typeof Box> = (args: BoxProps) => {
  const hexValue = args.background ? colors[args.background] : '';
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
      <Heading variant="h2" component="span">
        {args.background} ({hexValue})
      </Heading>
    </Box>
  );
};

BoxStory.storyName = 'Box';
BoxStory.args = {
  background: 'white',
  component: 'div',
};
