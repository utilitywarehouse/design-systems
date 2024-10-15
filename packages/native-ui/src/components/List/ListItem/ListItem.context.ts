import { createContext, useContext } from 'react';
import ListItemProps from './ListItem.props';

export interface IListItemContext extends Pick<ListItemProps, 'divider' | 'loading' | 'disabled'> {
  showPressed?: boolean;
  active?: boolean;
}

export const ListItemContext = createContext<IListItemContext>({});

export const useListItemContext = () => useContext(ListItemContext);
