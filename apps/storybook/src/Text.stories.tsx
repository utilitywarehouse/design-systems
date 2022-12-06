import Stack from '@mui/material/Stack';
import { Meta, Story } from '@storybook/react';
import { backgroundColors, Text, Background } from '@utilitywarehouse/web-ui';
import type { BackgroundProps, TextProps } from '@utilitywarehouse/web-ui';
import BackgroundStack from './BackgroundStack';

const variants = ['subtitle', 'body', 'legalNote', 'caption'] as const;

const colors = ['primary', 'success', 'error'] as const;

export default {
  title: 'Components/Text',
  component: Text,
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
    variant: 'body',
    color: 'primary',
    bold: false,
    textTransform: 'capitalize',
    gutterBottom: false,
    paragraph: false,
    noWrap: false,
  },
} as Meta;

export const TextKitchenSinkStory: Story<
  TextProps & { backgroundColor: BackgroundProps['backgroundColor'] }
> = ({ backgroundColor, ...args }) => {
  return (
    <BackgroundStack>
      <Stack spacing={4} direction="row">
        {variants.map(v => (
          <Stack key={v} spacing={2}>
            {colors.map(c => (
              <Text key={`${v}${c}`} {...args} variant={v} color={c} />
            ))}
          </Stack>
        ))}
      </Stack>
    </BackgroundStack>
  );
};
TextKitchenSinkStory.storyName = 'Kitchen Sink';
TextKitchenSinkStory.argTypes = {
  variant: { table: { disable: true } },
  gutterBottom: { table: { disable: true } },
  paragraph: { table: { disable: true } },
  component: { table: { disable: true } },
  classes: { table: { disable: true } },
  sx: { table: { disable: true } },
  align: { table: { disable: true } },
  noWrap: { table: { disable: true } },
  color: { table: { disable: true } },
  backgroundColor: { table: { disable: true } },
  textTransform: { table: { disable: true } },
  letterSpacing: { table: { disable: true } },
};
TextKitchenSinkStory.args = {
  color: 'primary',
};

export const TextCustomStory: Story<
  TextProps & { backgroundColor: BackgroundProps['backgroundColor'] }
> = ({ backgroundColor, ...args }) => {
  return (
    <Background
      backgroundColor={backgroundColor}
      sx={{ display: 'flex', justifyContent: 'center', padding: 4 }}
    >
      <Text {...args} component="span" />
    </Background>
  );
};
TextCustomStory.storyName = 'Custom';
