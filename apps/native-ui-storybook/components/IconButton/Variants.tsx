import {
  ScrollView,
  Button,
  ButtonText,
  useMedia,
  VStack,
  HStack,
} from '@utilitywarehouse/native-ui';
import React from 'react';
import { StoryFn } from '@storybook/react';

import ButtonVariants from './components/IconButtonVariants';
import { Dimensions, Platform } from 'react-native';

const ButtonPlaygroundVariants: StoryFn = ({ size }: any) => {
  const media = useMedia();
  const { base, xs, sm } = media;
  const isMobile = base || xs || sm;

  const { width, height } = Dimensions.get('window');

  const variants = (
    <>
      <ButtonVariants colorScheme="cyan" />
      <ButtonVariants colorScheme="green" />
      <ButtonVariants colorScheme="red" />
      <ButtonVariants colorScheme="grey" />
      <ButtonVariants colorScheme="gold" />
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

ButtonPlaygroundVariants.storyName = 'Variants';

export default ButtonPlaygroundVariants;

export { ButtonText, Button };
