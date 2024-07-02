import { styled } from '@gluestack-ui/themed';
import { Pressable } from 'react-native';

const IconButton = styled(Pressable, {}, {
  componentName: 'IconButton',
  descendantStyle: ['_icon', '_spinner'],
  ancestorStyle: ['_button'],
} as const);
export default IconButton;
