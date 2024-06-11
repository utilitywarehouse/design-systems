import { View } from 'react-native';
import { styled } from '@gluestack-style/react';

export default styled(View, {}, {
  componentName: 'FormField',
  descendantStyle: [
    '_labelText',
    '_helperText',
    '_helperIcon',
    '_errorText',
    '_labelAstrick',
    '_invalidText',
    '_validText',
    '_invalidIcon',
    '_validIcon',
    '_input',
  ],
} as const);
