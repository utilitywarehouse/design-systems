import { IconButton } from '@utilitywarehouse/native-ui';
import React from 'react';
import { AddMediumIcon } from '@utilitywarehouse/react-native-icons';
import { StoryFn } from '@storybook/react';

const IconButtonBasic: StoryFn = ({ variant, colorScheme, isDisabled, size }: any) => {
  return (
    <IconButton
      icon={AddMediumIcon}
      variant={variant}
      colorScheme={colorScheme}
      isDisabled={isDisabled}
      size={size}
    />
  );
};

IconButtonBasic.argTypes = {
  size: {
    options: ['x-small', 'small', 'large'],
    control: 'select',
    description: 'The size of the button.',
  },
  variant: {
    options: ['solid', 'outline', 'ghost'],
    control: 'select',
    description: 'The variant of the button.',
  },
  colorScheme: {
    options: ['cyan', 'red', 'green', 'grey', 'gold'],
    control: 'select',
    description: 'The color scheme of the button.',
  },
  isDisabled: {
    type: 'boolean',
    control: 'boolean',
    description: 'To manually set disable to the button.',
  },
};

IconButtonBasic.args = {
  size: 'large',
  variant: 'solid',
  colorScheme: 'cyan',
  isDisabled: false,
};

export default IconButtonBasic;

export { IconButton };
