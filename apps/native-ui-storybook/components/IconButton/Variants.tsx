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

const ButtonPlaygroundVariants: StoryFn = ({ size }: any) => {
  const media = useMedia();
  const { base, xs, sm } = media;
  const isMobile = base || xs || sm;

  const variants = (
    <>
      <ButtonVariants colorScheme="cyan" />
      <ButtonVariants colorScheme="green" />
      <ButtonVariants colorScheme="red" />
      <ButtonVariants colorScheme="grey" />
      <ButtonVariants colorScheme="gold" />
    </>
  );

  return (
    <ScrollView
      sx={{
        padding: '$4',
      }}
    >
      {isMobile ? <VStack space="md">{variants}</VStack> : <HStack space="md">{variants}</HStack>}
    </ScrollView>
  );
};

ButtonPlaygroundVariants.storyName = 'Variants';

export default ButtonPlaygroundVariants;

export { ButtonText, Button };
