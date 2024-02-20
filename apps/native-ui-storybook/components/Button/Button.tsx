import { Pressable, Text } from '@utilitywarehouse/native-ui';
import React from 'react';

interface MyButtonProps {
  onPress: () => void;
  text: string;
}

export const MyButton = ({ onPress, text }: MyButtonProps) => {
  return (
    <Pressable
      sx={{
        paddingHorizontal: 32,
        paddingVertical: 8,
        backgroundColor: 'purple',
        alignSelf: 'flex-start',
        borderRadius: 8,
        ':active': {
          backgroundColor: 'rebeccapurple',
        },
      }}
      onPress={onPress}
    >
      <Text sx={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>{text}</Text>
    </Pressable>
  );
};
