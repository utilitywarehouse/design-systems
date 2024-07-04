import { ScrollView, IconButton, useMedia, VStack, HStack } from '@utilitywarehouse/native-ui';
import React from 'react';
import { StoryFn } from '@storybook/react';

import ButtonVariants from './components/IconButtonVariants';
import { Dimensions, Platform } from 'react-native';
import { ScrollWrap } from '../../docs/components';

const IconButtonPlaygroundVariants: StoryFn = ({ size, inverted, _backgroundColor }: any) => {
  const media = useMedia();
  const { base, xs, sm } = media;
  const isMobile = base || xs || sm;

  const variants = (
    <>
      <ButtonVariants colorScheme="cyan" size={size} inverted={inverted} />
      <ButtonVariants colorScheme="green" size={size} inverted={inverted} />
      <ButtonVariants colorScheme="red" size={size} inverted={inverted} />
      <ButtonVariants colorScheme="grey" size={size} inverted={inverted} />
      <ButtonVariants colorScheme="gold" size={size} inverted={inverted} />
    </>
  );

  return (
    <ScrollWrap backgroundColor={_backgroundColor}>
      {isMobile ? (
        <VStack space="md" sx={{ paddingBottom: '$10' }}>
          {variants}
        </VStack>
      ) : (
        <HStack space="md">{variants}</HStack>
      )}
    </ScrollWrap>
  );
};

IconButtonPlaygroundVariants.storyName = 'Variants';

IconButtonPlaygroundVariants.argTypes = {
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

IconButtonPlaygroundVariants.args = {
  size: 'medium',
  inverted: false,
  _backgroundColor: 'default',
};

export default IconButtonPlaygroundVariants;

export { IconButton };
