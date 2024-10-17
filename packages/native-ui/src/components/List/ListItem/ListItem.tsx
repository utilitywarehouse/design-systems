import { createPressable } from '@gluestack-ui/pressable';
import ListItemRoot from './ListItemRoot';

const ListItem = createPressable({
  Root: ListItemRoot,
});

ListItem.displayName = 'ListItem';

export default ListItem;
