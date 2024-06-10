import { styled } from '@gluestack-style/react';
import { View } from 'react-native';

export default styled(View, {}, {
  componentName: 'FormFieldLabel',
  descendantStyle: ['_labelText'],
} as const);
