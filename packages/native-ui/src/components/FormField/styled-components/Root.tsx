import { View } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(View, {}, {
  componentName: 'FormField',
  descendantStyle: [
    '_labelText',
    '_helperText',
    '_errorText',
    '_labelAstrick',
    '_validationText',
    '_input',
  ],
} as const);
