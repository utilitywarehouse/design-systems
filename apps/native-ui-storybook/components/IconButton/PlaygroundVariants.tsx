import {
  ButtonGroup,
  Button,
  IconButtonIcon,
  IconButton,
  ButtonText,
} from '@utilitywarehouse/native-ui';
import React from 'react';
import { ChevronRightMediumIcon } from '@utilitywarehouse/react-native-icons';
import { StoryFn } from '@storybook/react';

const ButtonPlaygroundVariants: StoryFn = ({ colorScheme, isDisabled }: any) => {
  return (
    <ButtonGroup flexDirection="column" space="md">
      <IconButton variant="solid" colorScheme={colorScheme} isDisabled={isDisabled}>
        <IconButtonIcon as={ChevronRightMediumIcon} />
      </IconButton>
      <IconButton variant="outline" colorScheme={colorScheme} isDisabled={isDisabled}>
        <IconButtonIcon as={ChevronRightMediumIcon} />
      </IconButton>
      <IconButton variant="ghost" colorScheme={colorScheme} isDisabled={isDisabled}>
        <IconButtonIcon as={ChevronRightMediumIcon} />
      </IconButton>
    </ButtonGroup>
  );
};

ButtonPlaygroundVariants.storyName = 'Playground Variants';

ButtonPlaygroundVariants.argTypes = {
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

ButtonPlaygroundVariants.args = {
  colorScheme: 'cyan',
  isDisabled: false,
};

export default ButtonPlaygroundVariants;

export { ButtonText, Button };
