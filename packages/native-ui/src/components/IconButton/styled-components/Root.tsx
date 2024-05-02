import { styled } from '@gluestack-ui/themed';
import { Pressable } from 'react-native';

const IconButton = styled(Pressable, {}, {
  componentName: 'IconButton',
  descendantStyle: ['_text', '_spinner', '_icon'],
  ancestorStyle: ['_button'],
} as const) as React.ForwardRefExoticComponent<import('react-native').PressableProps & {}> & {
  displayName: string;
};

export default IconButton;
