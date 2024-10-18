import { styled } from '@gluestack-style/react';
import { Text } from 'react-native';

export default styled(Text, {}, {
  componentName: 'FormFieldValidText',
  ancestorStyle: ['_validText'],
} as const);
