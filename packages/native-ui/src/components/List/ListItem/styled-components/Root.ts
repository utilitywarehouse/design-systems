import { styled } from '@gluestack-ui/themed';
import { Pressable } from 'react-native';
import { createPressable } from '@gluestack-ui/pressable';

const StyledListItem = styled(
  Pressable,
  {},
  {
    componentName: 'ListItem',
    descendantStyle: ['_leadingContent', '_trailingContent', '_text', '_supportingText'],
    ancestorStyle: ['_listItem'],
  }
);

const ListItem = createPressable({
  Root: StyledListItem,
});

export default ListItem;
