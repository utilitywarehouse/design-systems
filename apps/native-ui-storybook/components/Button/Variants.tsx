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

const ButtonPlaygroundVariants: StoryFn = ({ size }: any) => {
  const media = useMedia();
  const { base, xs, sm } = media;
  const isMobile = base || xs || sm;

  const variants = (
    <>
      <ButtonVariants colorScheme="cyan" size={size} />
      <ButtonVariants colorScheme="green" size={size} />
      <ButtonVariants colorScheme="red" size={size} />
      <ButtonVariants colorScheme="grey" size={size} />
      <ButtonVariants colorScheme="gold" size={size} />
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
