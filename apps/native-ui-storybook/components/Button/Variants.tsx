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

import ButtonVariants from './components/ButtonVariants';
import { Dimensions, Platform } from 'react-native';

const ButtonPlaygroundVariants: StoryFn = ({ size }: any) => {
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
      {isMobile ? <VStack space="md">{variants}</VStack> : <HStack space="md">{variants}</HStack>}
    </ScrollView>
  );
};

ButtonPlaygroundVariants.storyName = 'Variants';

ButtonPlaygroundVariants.argTypes = {
  size: {
    options: ['small', 'regular'],
    control: 'select',
    description: 'The size of the button.',
  },
};

ButtonPlaygroundVariants.args = {
  size: 'regular',
};

export default ButtonPlaygroundVariants;

export { ButtonText, Button };
