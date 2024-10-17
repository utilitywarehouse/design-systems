import React from 'react';
import { Center, Pressable, Text, useStyles } from '@utilitywarehouse/native-ui';

const PressableBasic = () => {
  const {
    theme: { colors },
  } = useStyles();
  return (
    <Pressable onPress={() => console.log('Hello')} style={{ height: 100, width: 200 }}>
      <Center
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: colors.cyan500,
        }}
      >
        <Text style={{ color: colors.brandWhite }}>PRESSABLE</Text>
      </Center>
    </Pressable>
  );
};

export default PressableBasic;
