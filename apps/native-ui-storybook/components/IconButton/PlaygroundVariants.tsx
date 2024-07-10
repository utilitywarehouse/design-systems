import { ButtonGroup, Button, IconButton, ButtonText, Box } from '@utilitywarehouse/native-ui';
import React from 'react';
import { ChevronRightMediumIcon } from '@utilitywarehouse/react-native-icons';
import { StoryFn } from '@storybook/react';
import { ScrollWrap, VariantTitle } from '../../docs/components';
import { V } from '@storybook/react-native/dist/View-9ba91d66';

const ButtonPlaygroundVariants: StoryFn = ({
  colorScheme,
  isDisabled,
  size,
  loading,
  inverted,
  _backgroundColor,
}: any) => {
  return (
    <Box height={240} width="100%">
      <ScrollWrap backgroundColor={_backgroundColor}>
        <ButtonGroup flexDirection="column" space="md">
          <VariantTitle title="Solid">
            <IconButton
              icon={ChevronRightMediumIcon}
              variant="solid"
              colorScheme={colorScheme}
              isDisabled={isDisabled}
              loading={loading}
              size={size}
              inverted={inverted}
            />
          </VariantTitle>
          <VariantTitle title="Outline">
            <IconButton
              icon={ChevronRightMediumIcon}
              variant="outline"
              colorScheme={colorScheme}
              isDisabled={isDisabled}
              loading={loading}
              size={size}
              inverted={inverted}
            />
          </VariantTitle>
          <VariantTitle title="Ghost">
            <IconButton
              icon={ChevronRightMediumIcon}
              variant="ghost"
              colorScheme={colorScheme}
              isDisabled={isDisabled}
              loading={loading}
              size={size}
              inverted={inverted}
            />
          </VariantTitle>
        </ButtonGroup>
      </ScrollWrap>
    </Box>
  );
};

ButtonPlaygroundVariants.storyName = 'Playground Variants';

ButtonPlaygroundVariants.argTypes = {
  size: {
    options: ['x-small', 'small', 'medium'],
    control: 'select',
    description: 'The size of the button.',
  },
  colorScheme: {
    options: ['cyan', 'red', 'green', 'grey', 'gold'],
    control: 'select',
    description: 'The color scheme of the button.',
  },
  loading: {
    type: 'boolean',
    control: 'boolean',
    description: 'To manually set loading to the button.',
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

ButtonPlaygroundVariants.args = {
  size: 'medium',
  colorScheme: 'cyan',
  loading: false,
  isDisabled: false,
  inverted: false,
  _backgroundColor: 'default',
};

export default ButtonPlaygroundVariants;

export { ButtonText, Button };
