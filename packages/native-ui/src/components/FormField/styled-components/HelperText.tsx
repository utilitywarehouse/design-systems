import { styled } from '@gluestack-style/react';
import { Text } from 'react-native';

export default styled(
  Text,
  {
    fontFamily: '$body',
  },
  {
    componentName: 'FormFieldHelperText',
    ancestorStyle: ['_helperText'],
  } as const
);
