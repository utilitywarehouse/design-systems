import { styled } from '@gluestack-ui/themed';
import { Pressable } from 'react-native';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const IconButton: any = styled(Pressable, {}, {
  componentName: 'IconButton',
  descendantStyle: ['_icon', '_spinner'],
  ancestorStyle: ['_button'],
} as const);
export default IconButton;
