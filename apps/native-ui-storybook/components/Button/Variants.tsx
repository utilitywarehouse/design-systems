import { useMedia, VStack, HStack, Center } from '@utilitywarehouse/native-ui';
import React from 'react';
import { StoryFn } from '@storybook/react';

import ButtonVariants from './components/ButtonVariants';
import ScrollWrap from '../../docs/components/ScrollWrap';

const ButtonPlaygroundVariants: StoryFn<{
  size: 'small' | 'medium' | 'large';
  inverted: boolean;
  _backgroundColor: 'default' | 'midnight' | 'purple';
}> = ({ size, inverted, _backgroundColor }) => {
  const media = useMedia();
  const { base, xs, sm } = media;
  const isMobile: boolean = base || xs || sm || false;

  const variants = (
    <>
      <ButtonVariants
        colorScheme="cyan"
        size={size}
        inverted={inverted}
        _backgroundColor={_backgroundColor}
      />
      <ButtonVariants
        colorScheme="green"
        size={size}
        inverted={inverted}
        _backgroundColor={_backgroundColor}
      />
      <ButtonVariants
        colorScheme="red"
        size={size}
        inverted={inverted}
        _backgroundColor={_backgroundColor}
      />
      <ButtonVariants
        colorScheme="grey"
        size={size}
        inverted={inverted}
        _backgroundColor={_backgroundColor}
      />
      <ButtonVariants
        colorScheme="gold"
        size={size}
        inverted={inverted}
        _backgroundColor={_backgroundColor}
      />
    </>
  );

  return (
    <ScrollWrap backgroundColor={_backgroundColor}>
      {isMobile ? (
        <VStack space="md">{variants}</VStack>
      ) : (
        <Center>
          <HStack space="md">{variants}</HStack>
        </Center>
      )}
    </ScrollWrap>
  );
};

ButtonPlaygroundVariants.storyName = 'Variants';

ButtonPlaygroundVariants.argTypes = {
  size: {
    options: ['small', 'medium', 'large'],
    control: 'select',
    description: 'The size of the button.',
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
      'The background color the button appears on.\n _Note: this is not a prop of the `Button` component, just a representation of the `Button` component for the Storybook playground._',
  },
};

ButtonPlaygroundVariants.args = {
  size: 'medium',
  inverted: false,
  _backgroundColor: 'default',
};

export default ButtonPlaygroundVariants;
