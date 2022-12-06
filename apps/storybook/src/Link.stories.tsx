import { Story, Meta } from '@storybook/react';
import { Stack, Typography, TypographyProps, Link, LinkProps } from '@utilitywarehouse/web-ui';
import BackgroundStack from './BackgroundStack';

const typographyVariants = [
  'displayHeading',
  'h1',
  'h2',
  'h3',
  'h4',
  'subtitle',
  'body',
  'legalNote',
  'caption',
  'inherit',
] as const;

export default {
  title: 'Components/Link',
  component: Link,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
    typographyVariant: {
      control: {
        type: 'radio',
        options: typographyVariants,
      },
    },
    variant: {
      control: {
        type: 'radio',
        options: typographyVariants,
      },
    },
    textTransform: {
      control: {
        type: 'radio',
        options: ['none', 'lowercase', 'uppercase', 'capitalize'] as const,
      },
    },
  },
  args: {
    children: 'link',
    typographyVariant: 'body',
    variant: 'body',
    textTransform: 'none',
  },
} as Meta;

export const LinkStory: Story<
  LinkProps & { typographyVariant: TypographyProps['variant'] }
> = args => {
  const { typographyVariant, ...rest } = args;
  return (
    <BackgroundStack>
      <Stack spacing={2}>
        <Typography component="span" variant={typographyVariant}>
          <Link href="#" {...rest} />
        </Typography>
        <Typography component="span" variant={typographyVariant}>
          This is an inline{' '}
          <Link href="#" {...rest} variant="inherit">
            link
          </Link>
          .
        </Typography>
      </Stack>
    </BackgroundStack>
  );
};

LinkStory.storyName = 'Link';
