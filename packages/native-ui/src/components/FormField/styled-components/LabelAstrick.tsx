import { styled } from '@gluestack-style/react';
import { Text } from 'react-native';

export default styled(
  Text,
  {
    lineHeight: '$2xs',
    fontFamily: '$body',
  },
  {
    componentName: 'FormFieldErrorText',
    ancestorStyle: ['_labelAstrick'],
  } as const
);