import { styled } from '@gluestack-style/react';
import { Pressable } from 'react-native';

export default styled(Pressable, {}, {
  componentName: 'InputSlot',
  ancestorStyle: ['_slot'],
  descendantStyle: ['_icon'],
} as const);
