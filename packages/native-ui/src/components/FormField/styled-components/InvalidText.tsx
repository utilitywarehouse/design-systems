import { styled } from '@gluestack-style/react';
import { Text } from 'react-native';

export default styled(Text, {}, {
  componentName: 'FormFieldInvalidText',
  ancestorStyle: ['_invalidText'],
} as const);
