import { styled } from '@gluestack-style/react';
import { View } from 'react-native';

export default styled(View, {}, {
  componentName: 'Input',
  ancestorStyle: ['_input'],
  descendantStyle: ['_inputField', '_icon'],
} as const);
