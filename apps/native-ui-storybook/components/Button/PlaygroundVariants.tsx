import { ButtonGroup, Button, Box } from '@utilitywarehouse/native-ui';
import React, { ComponentType } from 'react';
import * as Icons from '@utilitywarehouse/react-native-icons';
import { StoryFn } from '@storybook/react';
import ScrollWrap from '../../docs/components/ScrollWrap';
import { VariantTitle } from '../../docs/components';

const ButtonPlaygroundVariants: StoryFn<{
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
  const icon: ComponentType = _icon === 'none' ? undefined : Icons[_icon];
  return (
    <Box height={240} width="100%">
      <ScrollWrap backgroundColor={_backgroundColor}>
        <ButtonGroup flexDirection="column" space="md">
          <VariantTitle title="Solid">
            <Button
              size={size}
              variant="solid"
              colorScheme={colorScheme}
              disabled={disabled}
              inverted={inverted}
              iconPosition={iconPosition}
              icon={icon}
              loading={loading}
            >
              {_ButtonText}
            </Button>
          </VariantTitle>
          <VariantTitle title="Outline">
            <Button
              size={size}
              variant="outline"
              colorScheme={colorScheme}
              disabled={disabled}
              inverted={inverted}
              iconPosition={iconPosition}
              icon={icon}
              loading={loading}
            >
              {_ButtonText}
            </Button>
          </VariantTitle>
          <VariantTitle title="Ghost">
            <Button
              size={size}
              variant="ghost"
              colorScheme={colorScheme}
              disabled={disabled}
              inverted={inverted}
              iconPosition={iconPosition}
              icon={icon}
              loading={loading}
            >
              {_ButtonText}
            </Button>
          </VariantTitle>
        </ButtonGroup>
      </ScrollWrap>
    </Box>
  );
};

ButtonPlaygroundVariants.storyName = 'Playground Variants';

ButtonPlaygroundVariants.argTypes = {
  size: {
    options: ['small', 'medium', 'large'],
    control: 'select',
    description: 'The size of the button.',
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

ButtonPlaygroundVariants.args = {
  size: 'medium',
  colorScheme: 'cyan',
  disabled: false,
  inverted: false,
  loading: false,
  icon: 'none',
  iconPosition: 'left',
  _ButtonText: 'Example',
  _backgroundColor: 'default',
};

export default ButtonPlaygroundVariants;
