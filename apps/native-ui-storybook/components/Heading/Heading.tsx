import React from 'react';
import { Heading } from '@utilitywarehouse/native-ui';
import { Meta } from '@storybook/react';

const HeadingBasic = ({ ...props }) => {
  return (
    <Heading {...props}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua.
    </Heading>
  );
};

HeadingBasic.argTypes = {
  size: {
    options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    control: 'select',
    description: 'The size of the heading.',
  },
  truncated: {
    type: 'boolean',
    control: 'boolean',
    description: 'Truncate the heading.',
  },
  underline: {
    type: 'boolean',
    control: 'boolean',
    description: 'Underline the heading.',
  },
  strikeThrough: {
    type: 'boolean',
    control: 'boolean',
    description: 'Strike through the heading.',
  },
} as Meta<typeof Heading>['argTypes'];

HeadingBasic.args = {
  size: 'h4',
  truncated: false,
  underline: false,
  strikeThrough: false,
} as Meta<typeof Heading>['args'];

export default HeadingBasic;
