import React from 'react';
import { Box, Input, InputField, InputIcon } from '@utilitywarehouse/native-ui';
import { StoryFn } from '@storybook/react';
import { AddSmallIcon } from '@utilitywarehouse/react-native-icons';

const InputVariants: StoryFn = () => {
  return (
    <Box gap={8}>
      <Input>
        <InputField />
        <InputIcon as={AddSmallIcon} />
      </Input>
    </Box>
  );
};

export default InputVariants;
