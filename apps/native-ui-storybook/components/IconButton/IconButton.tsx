import { IconButton } from '@utilitywarehouse/native-ui';
import React from 'react';
import { AddMediumIcon } from '@utilitywarehouse/react-native-icons';
import { StoryFn } from '@storybook/react';
import { ScrollWrap } from '../../docs/components';

const IconButtonBasic: StoryFn = ({
  variant,
  colorScheme,
  isDisabled,
  size,
  loading,
  inverted,
  _backgroundColor,
}: any) => {
  return (
    <ScrollWrap backgroundColor={_backgroundColor}>
      <IconButton
        icon={AddMediumIcon}
        variant={variant}
        colorScheme={colorScheme}
        isDisabled={isDisabled}
        loading={loading}
        size={size}
        inverted={inverted}
      />
    </ScrollWrap>
  );
};

IconButtonBasic.argTypes = {
  size: {
    options: ['x-small', 'small', 'medium'],
    control: 'select',
    description: 'The size of the button.',
  },
  variant: {
    options: ['solid', 'outline', 'ghost'],
    control: 'select',
    description: 'The variant of the button.',
  },
  loading: {
    type: 'boolean',
    control: 'boolean',
    description: 'To manually set loading to the button.',
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
  inverted: {
    type: 'boolean',
    control: 'boolean',
    description:
      'To set the button to be inverted. (To only be used on `midnight` or `purple` backgrounds)',
  },
  _backgroundColor: {
    options: ['default', 'midnight', 'purple'],
    control: 'select',
    description:
      'The background color the button appears on.\n _Note: this is not a prop of the `IconButton` component, just a representation of the `IconButton` component for the Storybook playground._',
  },
};

IconButtonBasic.args = {
  size: 'medium',
  variant: 'solid',
  colorScheme: 'cyan',
  loading: false,
  isDisabled: false,
  inverted: false,
  _backgroundColor: 'default',
};

export default IconButtonBasic;

export { IconButton };
