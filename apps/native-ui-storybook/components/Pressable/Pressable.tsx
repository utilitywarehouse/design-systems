import React from 'react';
import { Center, Pressable, Text } from '@utilitywarehouse/native-ui';

const PressableBasic = () => {
  return (
    <Pressable onPress={() => console.log('Hello')} sx={{ h: 100, w: 200 }}>
      <Center
        sx={{
          h: '100%',
          w: '100%',
          bg: '$cyan500',
        }}
      >
        <Text sx={{ color: '$white' }}>PRESSABLE</Text>
      </Center>
    </Pressable>
  );
};

export default PressableBasic;
