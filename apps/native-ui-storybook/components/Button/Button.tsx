import { Box, Button, ButtonIcon, ButtonSpinner, ButtonText } from '@utilitywarehouse/native-ui';
import React from 'react';
import { AddSmallIcon } from '@utilitywarehouse/react-native-icons';
import { StoryFn } from '@storybook/react';
import ScrollWrap from '../../docs/components/ScrollWrap';

const ButtonBasic: StoryFn = ({
  size,
  variant,
  colorScheme,
  isDisabled,
  inverted,
  _ButtonText,
  _showIcon,
  _showLoading,
  _loadingPosition,
  _iconPosition,
  _backgroundColor,
}: any) => {
  return (
    <Box height={68} width="100%">
      <ScrollWrap backgroundColor={_backgroundColor}>
        <Button
          size={size}
          variant={variant}
          colorScheme={colorScheme}
          isDisabled={isDisabled}
          inverted={inverted}
        >
          {_showIcon && _iconPosition === 'left' && <ButtonIcon as={AddSmallIcon} />}
          {_showLoading && _loadingPosition === 'left' && <ButtonSpinner />}
          <ButtonText>{_ButtonText}</ButtonText>
          {_showLoading && _loadingPosition === 'right' && <ButtonSpinner />}
          {_showIcon && _iconPosition === 'right' && <ButtonIcon as={AddSmallIcon} />}
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
  inverted: {
    type: 'boolean',
    control: 'boolean',
    description:
      'To set the button to be inverted. (To only be used on `midnight` or `purple` backgrounds)',
  },
  isDisabled: {
    type: 'boolean',
    control: 'boolean',
    description: 'To manually set disable to the button.',
  },
  _ButtonText: {
    type: 'string',
    control: 'text',
    description:
      'The text component for the button.\n _Note: this is not a prop of the `Button` component, just a representation of the `ButtonText` component for the Storybook playground._',
  },
  _showIcon: {
    type: 'boolean',
    control: 'boolean',
    description:
      'To show or hide the icon component for the button.\n _Note: this is not a prop of the `Button` component, just a representation of the `ButtonIcon` component for the Storybook playground._',
  },
  _iconPosition: {
    options: ['left', 'right'],
    control: 'select',
    description:
      'The position of the icon component in the button.\n _Note: this is not a prop of the `Button` component, just a representation of the `ButtonIcon` component for the Storybook playground._',
  },
  _showLoading: {
    type: 'boolean',
    control: 'boolean',
    description:
      'To show or hide the loading spinner component for the button.\n _Note: this is not a prop of the `Button` component, just a representation of the `ButtonSpinner` component for the Storybook playground._',
  },
  _loadingPosition: {
    options: ['left', 'right'],
    control: 'select',
    description:
      'The position of the loading spinner component in the button.\n _Note: this is not a prop of the `Button` component, just a representation of the `ButtonSpinner` component for the Storybook playground._',
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
  isDisabled: false,
  inverted: false,
  _ButtonText: 'Example',
  _showIcon: true,
  _iconPosition: 'left',
  _showLoading: false,
  _loadingPosition: 'left',
  _backgroundColor: 'default',
};

export default ButtonBasic;

export { ButtonText, Button };
