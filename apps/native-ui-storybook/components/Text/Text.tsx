import React from 'react';
import { Text } from '@utilitywarehouse/native-ui';
import { StoryFn } from '@storybook/react';
import { colors } from '@utilitywarehouse/colour-system';
import { ColorValue } from '@utilitywarehouse/native-ui/core/types';

const TextBasic: StoryFn<{
  size: 'xs' | 'sm' | 'md';
  highlight: boolean;
  truncated: boolean;
  bold: boolean;
  italic: boolean;
  underline: boolean;
  strikeThrough: boolean;
  color: ColorValue;
}> = ({ ...props }) => {
  return (
    <Text {...props} color={`$${props.color?.replace('$', '')}` as ColorValue}>
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
  color: {
    options: [...Object.keys(colors)],
    control: 'select',
    description: 'Color of the text. Use the color name from the theme.',
  },
};

TextBasic.args = {
  size: 'md',
  highlight: false,
  truncated: false,
  bold: false,
  italic: false,
  underline: false,
  strikeThrough: false,
  color: 'grey1000' as ColorValue,
};

export default TextBasic;
