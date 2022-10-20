import Stack from '@mui/material/Stack';
import { Meta, Story } from '@storybook/react';
import {
  backgroundColors,
  Typography,
  variantMapping,
  Background,
} from '@utilitywarehouse/uw-web-ui';
import type { BackgroundProps, TypographyProps } from '@utilitywarehouse/uw-web-ui';

const variants = [
  'displayHeading',
  'h1',
  'h2',
  'h3',
  'h4',
  'subtitle',
  'body',
  'legalNote',
  'caption',
] as const;

const colors = ['primary', 'secondary', 'success', 'error'] as const;

export default {
  title: 'Foundations/Typography',
  component: Typography,
  argTypes: {
    forwardedRef: { table: { disable: true } },
    children: {
      control: {
        type: 'text',
      },
    },
    component: {
      control: {
        type: 'text',
      },
    },
    variant: {
      control: {
        type: 'radio',
        options: variants,
      },
    },
    color: {
      control: {
        type: 'radio',
        options: colors,
      },
    },
    fontWeight: {
      control: {
        type: 'radio',
        options: ['regular', 'semibold'],
      },
    },
    backgroundColor: {
      control: {
        type: 'radio',
        options: backgroundColors,
      },
    },
    letterSpacing: {
      control: {
        type: 'text',
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
    variant: 'displayHeading',
    color: 'primary',
    fontWeight: 'regular',
    textTransform: 'capitalize',
    gutterBottom: false,
    paragraph: false,
    noWrap: false,
  },
} as Meta;

export const TypographyKitchenSinkStory: Story<
  TypographyProps & { backgroundColor: BackgroundProps['backgroundColor'] }
> = ({ backgroundColor, ...args }) => {
  return (
    <Background
      backgroundColor={backgroundColor}
      sx={{ display: 'flex', justifyContent: 'center', padding: 4 }}
    >
      <Stack spacing={2}>
        {variants.map((v) => (
          <Stack key={v} spacing={4} direction="row">
            <Typography
              {...args}
              variant={v}
              component={variantMapping[v] as React.ElementType<any>}
            />
          </Stack>
        ))}
      </Stack>
    </Background>
  );
};
TypographyKitchenSinkStory.storyName = 'Kitchen Sink';
TypographyKitchenSinkStory.argTypes = {
  variant: { table: { disable: true } },
  gutterBottom: { table: { disable: true } },
  paragraph: { table: { disable: true } },
  component: { table: { disable: true } },
  classes: { table: { disable: true } },
  sx: { table: { disable: true } },
  align: { table: { disable: true } },
  noWrap: { table: { disable: true } },
};
TypographyKitchenSinkStory.args = {
  color: 'primary',
  fontWeight: 'regular',
};

export const TypographyCustomStory: Story<
  TypographyProps & { backgroundColor: BackgroundProps['backgroundColor'] }
> = ({ backgroundColor, ...args }) => {
  return (
    <Background
      backgroundColor={backgroundColor}
      sx={{ display: 'flex', justifyContent: 'center', padding: 4 }}
    >
      <Typography {...args} />
    </Background>
  );
};
TypographyCustomStory.storyName = 'Custom';
