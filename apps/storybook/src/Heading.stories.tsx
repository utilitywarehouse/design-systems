import Stack from '@mui/material/Stack';
import { Meta, Story } from '@storybook/react';
import { backgroundColors, Heading, Box, variantMapping } from '@utilitywarehouse/web-ui';
import type { BackgroundProps, HeadingProps } from '@utilitywarehouse/web-ui';
import { BackgroundStack } from './utils';

const variants = ['displayHeading', 'h1', 'h2', 'h3', 'h4'] as const;

const colors = ['primary', 'secondary'] as const;

export default {
  title: 'Components/Heading',
  component: Heading,
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
    variant: 'h2',
    component: 'h2',
    color: 'primary',
    textTransform: 'capitalize',
    gutterBottom: false,
    paragraph: false,
    noWrap: false,
  },
} as Meta;

export const HeadingKitchenSinkStory: Story<
  HeadingProps & { backgroundColor: BackgroundProps['backgroundColor'] }
> = ({ backgroundColor, ...args }) => {
  return (
    <BackgroundStack>
      <Stack spacing={4} direction="row">
        {variants.map(v => (
          <Stack key={v} spacing={2}>
            {colors.map(c => (
              <Heading
                key={`${v}${c}`}
                {...args}
                variant={v}
                component={variantMapping[v] as React.ElementType<any>}
                color={c}
              />
            ))}
          </Stack>
        ))}
      </Stack>
    </BackgroundStack>
  );
};
HeadingKitchenSinkStory.storyName = 'Kitchen Sink';
HeadingKitchenSinkStory.argTypes = {
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
HeadingKitchenSinkStory.args = {
  color: 'primary',
};

export const HeadingCustomStory: Story<
  HeadingProps & { backgroundColor: BackgroundProps['backgroundColor'] }
> = ({ backgroundColor, ...args }) => {
  return (
    <Box background={backgroundColor} display="flex" justifyContent="center" padding={4}>
      <Heading {...args} component="span" />
    </Box>
  );
};
HeadingCustomStory.storyName = 'Custom';
