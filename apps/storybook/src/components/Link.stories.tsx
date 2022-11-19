import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Link, Typography } from '../../src';
import { BackgroundStack, typographyVariants } from '../utils';
import type { TypographyProps, LinkProps } from '../../src';
import Stack from '@mui/material/Stack';

export default {
  title: 'Components/Links',
  component: Link,
  argTypes: {
    forwardedRef: { table: { disable: true } },
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
  },
  args: {
    children: 'link',
    typographyVariant: 'body',
    variant: 'body',
    textTransform: 'capitalize',
  },
} as Meta;

export const LinkStory: Story<
  LinkProps & { typographyVariant: TypographyProps['variant'] }
> = args => {
  const { typographyVariant, ...rest } = args;
  return (
    <BackgroundStack>
      <Stack spacing={2}>
        <Typography variant={typographyVariant}>
          <Link href="#" {...rest} />
        </Typography>
        <Typography variant={typographyVariant}>
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
