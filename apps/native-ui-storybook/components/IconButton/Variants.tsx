import { useMedia, VStack, HStack } from '@utilitywarehouse/native-ui';
import { Box } from '@utilitywarehouse/native-ui/lab';
import React from 'react';
import { StoryFn } from '@storybook/react';

import ButtonVariants from './components/IconButtonVariants';
import { ScrollWrap } from '../../docs/components';

const IconButtonVariants: StoryFn<{
  size: 'x-small' | 'small' | 'medium';
  inverted: boolean;
  _backgroundColor: 'default' | 'midnight' | 'purple';
}> = ({ size, inverted, _backgroundColor }) => {
  const media = useMedia();
  // @ts-expect-error - Reported to Gluestack error
  const { base, xs, sm } = media;
  /* eslint-disable @typescript-eslint/no-unsafe-assignment */
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
        <Box pb="$10">
          <VStack space="md">{variants}</VStack>
        </Box>
      ) : (
        <HStack space="md">{variants}</HStack>
      )}
    </ScrollWrap>
  );
};

IconButtonVariants.storyName = 'Variants';

IconButtonVariants.argTypes = {
  size: {
    options: ['x-small', 'small', 'medium'],
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
      'The background color the button appears on.\n _Note: this is not a prop of the `IconButton` component, just a representation of the `IconButton` component for the Storybook playground._',
  },
};

IconButtonVariants.args = {
  size: 'medium',
  inverted: false,
  _backgroundColor: 'default',
};

export default IconButtonVariants;
