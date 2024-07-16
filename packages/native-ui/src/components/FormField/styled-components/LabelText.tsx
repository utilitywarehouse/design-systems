import { styled } from '@gluestack-style/react';
import { Text } from 'react-native';

export default styled(
  Text,
  {
    fontSize: '$md',
    lineHeight: '$2xs',
    fontFamily: '$body',
    fontWeight: '$medium',
  },
  {
    componentName: 'FormFieldLabelText',
    ancestorStyle: ['_labelText'],
  } as const
);
