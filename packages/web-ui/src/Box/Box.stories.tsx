import type { ComponentStory, ComponentMeta, Story, Meta } from '@storybook/react';
import type { BoxProps } from './Box';
import Box from './Box';
import { colors, borderRadius } from '@utilitywarehouse/customer-ui-design-tokens';
import { backgroundColors } from '../types';
import { Heading } from '../Typography';

export default {
  title: 'Components/Box',
  // component: Box,
  // component: Box as (props: BoxProps) => JSX.Element,
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

export const BoxStory: Story<BoxProps> = (args: BoxProps) => {
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
      {args.background} ({hexValue})
    </Box>
  );
};

BoxStory.storyName = 'Box';
BoxStory.args = {
  background: 'white',
  component: 'div',
};
