import {
  ButtonGroup,
  Button,
  ButtonIcon,
  ButtonSpinner,
  ButtonText,
} from '@utilitywarehouse/native-ui';
import React from 'react';
import { AddSmallIcon } from '@utilitywarehouse/react-native-icons';
import { StoryFn } from '@storybook/react';

const ButtonPlaygroundVariants: StoryFn = ({
  size,
  colorScheme,
  isDisabled,
  _ButtonText,
  _showIcon,
  _showLoading,
  _loadingPosition,
  _buttonPosition,
}: any) => {
  return (
    <ButtonGroup flexDirection="column" space="md">
      <Button size={size} variant="solid" colorScheme={colorScheme} isDisabled={isDisabled}>
        {_showIcon && _buttonPosition === 'left' && <ButtonIcon as={AddSmallIcon} />}
        {_showLoading && _loadingPosition === 'left' && <ButtonSpinner />}
        <ButtonText>{_ButtonText}</ButtonText>
        {_showLoading && _loadingPosition === 'right' && <ButtonSpinner />}
        {_showIcon && _buttonPosition === 'right' && <ButtonIcon as={AddSmallIcon} />}
      </Button>
      <Button size={size} variant="outline" colorScheme={colorScheme} isDisabled={isDisabled}>
        {_showIcon && _buttonPosition === 'left' && <ButtonIcon as={AddSmallIcon} />}
        {_showLoading && _loadingPosition === 'left' && <ButtonSpinner />}
        <ButtonText>{_ButtonText}</ButtonText>
        {_showLoading && _loadingPosition === 'right' && <ButtonSpinner />}
        {_showIcon && _buttonPosition === 'right' && <ButtonIcon as={AddSmallIcon} />}
      </Button>
      <Button size={size} variant="ghost" colorScheme={colorScheme} isDisabled={isDisabled}>
        {_showIcon && _buttonPosition === 'left' && <ButtonIcon as={AddSmallIcon} />}
        {_showLoading && _loadingPosition === 'left' && <ButtonSpinner />}
        <ButtonText>{_ButtonText}</ButtonText>
        {_showLoading && _loadingPosition === 'right' && <ButtonSpinner />}
        {_showIcon && _buttonPosition === 'right' && <ButtonIcon as={AddSmallIcon} />}
      </Button>
    </ButtonGroup>
  );
};

ButtonPlaygroundVariants.storyName = 'Playground Variants';

ButtonPlaygroundVariants.argTypes = {
  size: {
    options: ['small', 'regular'],
    control: 'select',
    description: 'The size of the button.',
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
  _buttonPosition: {
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
};

ButtonPlaygroundVariants.args = {
  size: 'regular',
  colorScheme: 'cyan',
  isDisabled: false,
  _ButtonText: 'Example',
  _showIcon: true,
  _buttonPosition: 'left',
  _showLoading: false,
  _loadingPosition: 'left',
};

export default ButtonPlaygroundVariants;

export { ButtonText, Button };
