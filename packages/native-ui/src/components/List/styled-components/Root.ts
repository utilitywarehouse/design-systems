import { styled } from '@gluestack-ui/themed';
import { View } from 'react-native';

const List = styled(View, {}, {
  componentName: 'List',
  descendantStyle: ['_listItem', '_listHeading'],
  ancestorStyle: ['_list'],
} as const);
export default List;
