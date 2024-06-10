import { styled } from '@gluestack-style/react';
import { TextInput } from 'react-native';

export default styled(
  TextInput,
  {},
  {
    componentName: 'InputField',
    ancestorStyle: ['_inputField'],
    resolveProps: ['placeholderTextColor'],
  } as const,
  {
    propertyTokenMap: {
      placeholderTextColor: 'colors',
    },
  }
);
