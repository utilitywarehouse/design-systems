import React from 'react';
import { Text } from '@utilitywarehouse/native-ui';
import { Meta, StoryFn } from '@storybook/react';

const TextBasic: StoryFn<{
  size: 'xs' | 'sm' | 'md';
  highlight: boolean;
  truncated: boolean;
  bold: boolean;
  italic: boolean;
  underline: boolean;
  strikeThrough: boolean;
}> = ({ ...props }) => {
  return (
    <Text {...props}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </Text>
  );
};

TextBasic.argTypes = {
  size: {
    options: ['xs', 'sm', 'md'],
    control: 'select',
    description: 'The size of the text.',
  },
  highlight: {
    type: 'boolean',
    control: 'boolean',
    description: 'Highlight the text.',
  },
  truncated: {
    type: 'boolean',
    control: 'boolean',
    description: 'Truncate the text.',
  },
  bold: {
    type: 'boolean',
    control: 'boolean',
    description: 'Bold the text.',
  },
  italic: {
    type: 'boolean',
    control: 'boolean',
    description: 'Italicize the text.',
  },
  underline: {
    type: 'boolean',
    control: 'boolean',
    description: 'Underline the text.',
  },
  strikeThrough: {
    type: 'boolean',
    control: 'boolean',
    description: 'Strike through the text.',
  },
} as Meta<typeof Text>['argTypes'];

TextBasic.args = {
  size: 'md',
  highlight: false,
  truncated: false,
  bold: false,
  italic: false,
  underline: false,
  strikeThrough: false,
} as Meta<typeof Text>['args'];

export default TextBasic;
