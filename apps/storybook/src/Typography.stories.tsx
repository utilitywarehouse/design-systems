import { Meta, Story } from '@storybook/react';
import { backgroundColors, Typography, Box, BoxProps } from '@utilitywarehouse/web-ui';
import type { TypographyProps } from '@utilitywarehouse/web-ui';

export default {
  title: 'Components/Typography',
  component: Typography,
  argTypes: {
    forwardedRef: { table: { disable: true } },
    children: {
      control: {
        type: 'text',
      },
    },
    backgroundColor: {
      control: {
        type: 'radio',
        options: backgroundColors,
      },
    },
    textTransform: {
      control: {
        type: 'radio',
        options: ['capitalize', 'uppercase', 'lowercase', 'none'],
      },
    },
  },
  args: {
    backgroundColor: 'white',
    children: 'hamburgefons',
  },
} as Meta;

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
