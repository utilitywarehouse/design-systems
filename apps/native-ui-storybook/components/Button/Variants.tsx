import { ScrollView, Button, ButtonText, useMedia, Box } from '@utilitywarehouse/native-ui';
import React from 'react';
import { StoryFn } from '@storybook/react';

import ButtonVariants from './components/ButtonVariants';

const ButtonPlaygroundVariants: StoryFn = ({ size }: any) => {
  const media = useMedia();
  return (
    <ScrollView
      sx={{
        padding: '$4',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: !media.sm ? 'column' : 'row',
          gap: '$4',
        }}
      >
        <ButtonVariants colorScheme="cyan" size={size} />
        <ButtonVariants colorScheme="green" size={size} />
        <ButtonVariants colorScheme="red" size={size} />
        <ButtonVariants colorScheme="grey" size={size} />
        <ButtonVariants colorScheme="gold" size={size} />
      </Box>
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
