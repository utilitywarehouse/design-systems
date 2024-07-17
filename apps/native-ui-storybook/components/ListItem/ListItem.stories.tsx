import { Meta } from '@storybook/react';
import ListItem from './ListItem';
// import Variants from './Variants';

const ListItemMeta: Meta<typeof ListItem> = {
  title: 'Native UI / Components / List Item',
  component: ListItem,
};

export default ListItemMeta;

export {
  ListItem as Playground,
  //Variants
};
