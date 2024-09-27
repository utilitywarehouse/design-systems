import { Box, IconButton } from '@utilitywarehouse/native-ui';
import React, { ComponentType } from 'react';
import * as Icons from '@utilitywarehouse/react-native-icons';
import { StoryFn } from '@storybook/react';
import { ScrollWrap } from '../../docs/components';

const IconButtonBasic: StoryFn<{
  variant: 'solid' | 'outline' | 'ghost';
  colorScheme: 'cyan' | 'red' | 'green' | 'grey' | 'gold';
  disabled: boolean;
  icon: string;
  size: 'x-small' | 'small' | 'medium';
  loading: boolean;
  inverted: boolean;
  _backgroundColor: 'default' | 'midnight' | 'purple';
}> = ({
  variant,
  colorScheme,
  disabled,
  icon: _icon,
  size,
  loading,
  inverted,
  _backgroundColor,
}) => {
  /* eslint-disable @typescript-eslint/no-unsafe-assignment */
  // @ts-expect-error - This is a playground
  const icon: ComponentType = _icon === 'none' ? undefined : Icons[_icon];
  return (
    <Box height={48} width="100%">
      <ScrollWrap backgroundColor={_backgroundColor}>
        <IconButton
          icon={icon}
          variant={variant}
          colorScheme={colorScheme}
          disabled={disabled}
          loading={loading}
          size={size}
          inverted={inverted}
        />
      </ScrollWrap>
    </Box>
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
  icon: {
    options: [...Object.keys(Icons)],
    control: 'select',
    description: 'The icon component for the button.',
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
  disabled: {
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
  icon: 'AddMediumIcon',
  loading: false,
  disabled: false,
  inverted: false,
  _backgroundColor: 'default',
};

export default IconButtonBasic;
