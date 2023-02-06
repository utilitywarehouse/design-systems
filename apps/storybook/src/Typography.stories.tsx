import * as React from 'react';
import { ComponentMeta, ComponentStory, Meta, Story } from '@storybook/react';
import { backgroundColors, Typography, Box, BoxProps } from '@utilitywarehouse/web-ui';

type TypographyProps = React.ComponentProps<typeof Typography>;

export default {
  // title: 'Components/Typography',
  component: Typography,
  // argTypes: {
  // forwardedRef: { table: { disable: true } },
  // children: {
  //   control: {
  //     type: 'text',
  //   },
  // },
  // background: {
  //   control: {
  //     type: 'radio',
  //     options: backgroundColors,
  //   },
  // },
  // textTransform: {
  //   control: {
  //     type: 'radio',
  //     options: ['capitalize', 'uppercase', 'lowercase', 'none'],
  //   },
  // },
  // },
  // args: {
  //   background: 'white',
  //   children: 'hamburgefons',
  // },
} as Meta<TypographyProps>;

export const TypographyStory: Story<TypographyProps & { background: BoxProps['background'] }> = ({
  background,
  ...args
}) => {
  return (
    <Box background={background} display="flex" justifyContent="center" padding={4}>
      <Typography {...args} />
    </Box>
  );
};
TypographyStory.storyName = 'Typography';
