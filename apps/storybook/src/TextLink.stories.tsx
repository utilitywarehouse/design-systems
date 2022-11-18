import { Story, Meta } from '@storybook/react';
import {
  Stack,
  Typography,
  TypographyProps,
  TextLink,
  TextLinkProps,
} from '@utilitywarehouse/uw-web-ui-react';
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
  title: 'Components/TextLink',
  component: TextLink,
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
    children: 'text link',
    typographyVariant: 'body',
    variant: 'body',
    textTransform: 'capitalize',
  },
} as Meta;

export const TextLinkStory: Story<
  TextLinkProps & { typographyVariant: TypographyProps['variant'] }
> = args => {
  const { typographyVariant, ...rest } = args;
  return (
    <BackgroundStack>
      <Stack spacing={2}>
        <Typography component="span" variant={typographyVariant}>
          <TextLink href="#" {...rest} />
        </Typography>
        <Typography component="span" variant={typographyVariant}>
          This is an inline{' '}
          <TextLink href="#" {...rest} variant="inherit">
            link
          </TextLink>
          .
        </Typography>
      </Stack>
    </BackgroundStack>
  );
};

TextLinkStory.storyName = 'TextLink';
