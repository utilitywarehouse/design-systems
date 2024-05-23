import { ScrollView, IconButton, useMedia, VStack, HStack } from '@utilitywarehouse/native-ui';
import React from 'react';
import { StoryFn } from '@storybook/react';

import ButtonVariants from './components/IconButtonVariants';
import { Dimensions, Platform } from 'react-native';

const IconButtonPlaygroundVariants: StoryFn = ({ size }: any) => {
  const media = useMedia();
  const { base, xs, sm } = media;
  const isMobile = base || xs || sm;

  const { width, height } = Dimensions.get('window');

  const variants = (
    <>
      <ButtonVariants colorScheme="cyan" size={size} />
      <ButtonVariants colorScheme="green" size={size} />
      <ButtonVariants colorScheme="red" size={size} />
      <ButtonVariants colorScheme="grey" size={size} />
      <ButtonVariants colorScheme="gold" size={size} />
    </>
  );

  const nativeStyles =
    Platform.OS !== 'web'
      ? {
          position: 'absolute',
          top: -40,
          left: -40,
          width: width,
          height: Platform.OS === 'android' ? height - 50 : height - 140,
        }
      : {};

  return (
    <ScrollView
      sx={{
        padding: '$4',
        ...nativeStyles,
      }}
    >
      {isMobile ? (
        <VStack space="md" sx={{ paddingBottom: '$10' }}>
          {variants}
        </VStack>
      ) : (
        <HStack space="md">{variants}</HStack>
      )}
    </ScrollView>
  );
};

IconButtonPlaygroundVariants.storyName = 'Variants';

IconButtonPlaygroundVariants.argTypes = {
  size: {
    options: ['x-small', 'small', 'large'],
    control: 'select',
    description: 'The size of the button.',
  },
};

IconButtonPlaygroundVariants.args = {
  size: 'large',
};

export default IconButtonPlaygroundVariants;

export { IconButton };
