import { Box, Button } from '@utilitywarehouse/native-ui';
import React, { ComponentType } from 'react';
import * as Icons from '@utilitywarehouse/react-native-icons';
import { StoryFn } from '@storybook/react';
import ScrollWrap from '../../docs/components/ScrollWrap';

const ButtonBasic: StoryFn<{
  variant: 'solid' | 'outline' | 'ghost';
  size: 'small' | 'medium' | 'large';
  colorScheme: 'cyan' | 'red' | 'green' | 'grey' | 'gold';
  disabled: boolean;
  loading: boolean;
  iconPosition: 'left' | 'right';
  icon: string;
  inverted: boolean;
  _ButtonText: string;
  _backgroundColor: 'default' | 'midnight' | 'purple';
}> = ({
  variant,
  size,
  colorScheme,
  disabled,
  loading,
  iconPosition,
  icon: _icon,
  inverted,
  _ButtonText,
  _backgroundColor,
}) => {
  /* eslint-disable @typescript-eslint/no-unsafe-assignment */
  // @ts-expect-error - This is a playground
  const icon: ComponentType | undefined = _icon === 'none' ? undefined : Icons[_icon];
  return (
    <Box height={68} width="100%">
      <ScrollWrap backgroundColor={_backgroundColor}>
        <Button
          size={size}
          variant={variant}
          colorScheme={colorScheme}
          disabled={disabled}
          inverted={inverted}
          iconPosition={iconPosition}
          icon={icon}
          loading={loading}
        >
          {_ButtonText}
        </Button>
      </ScrollWrap>
    </Box>
  );
};

ButtonBasic.argTypes = {
  size: {
    options: ['small', 'medium', 'large'],
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
  icon: {
    options: ['none', ...Object.keys(Icons).filter(icon => icon.includes('Small'))],
    control: 'select',
    description: 'The icon component for the button.',
  },
  iconPosition: {
    options: ['left', 'right'],
    control: 'select',
    description: 'The position of the icon component in the button.',
  },
  loading: {
    type: 'boolean',
    control: 'boolean',
    description: 'To show or hide the loading spinner component for the button.',
  },
  _ButtonText: {
    type: 'string',
    control: 'text',
    description:
      'The text component for the button.\n _Note: this is not a prop of the `Button` component, just a representation of the `ButtonText` component for the Storybook playground._',
  },
  _backgroundColor: {
    options: ['default', 'midnight', 'purple'],
    control: 'select',
    description:
      'The background color the button appears on.\n _Note: this is not a prop of the `Button` component, just a representation of the `Button` component for the Storybook playground._',
  },
};

ButtonBasic.args = {
  size: 'medium',
  variant: 'solid',
  colorScheme: 'cyan',
  disabled: false,
  inverted: false,
  loading: false,
  icon: 'none',
  iconPosition: 'left',
  _ButtonText: 'Example',
  _backgroundColor: 'default',
};

export default ButtonBasic;
