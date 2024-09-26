import { styled } from '@gluestack-ui/themed';
import { Pressable } from 'react-native';
import { createPressable } from '@gluestack-ui/pressable';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StyledListItem: any = styled(
  Pressable,
  {},
  {
    componentName: 'ListItem',
    descendantStyle: ['_leadingContent', '_trailingContent', '_text', '_supportingText'],
    ancestorStyle: ['_listItem'],
  }
);

const ListItem = createPressable({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  Root: StyledListItem,
});

export default ListItem;
