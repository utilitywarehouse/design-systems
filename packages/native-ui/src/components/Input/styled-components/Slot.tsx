import { styled } from '@gluestack-style/react';
import { Pressable } from 'react-native';

export default styled(
  Pressable,
  {},
  {
    componentName: 'InputSlot',
    ancestorStyle: ['_slot'],
    descendantStyle: ['_icon'],
  }
  // TODO: remove once upgraded to typescript 5.5
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
) as any;
