import { createContext, useContext } from 'react';
import type ListProps from './List.props';

export const ListContext = createContext<
  Pick<ListProps, 'loading' | 'disabled' | 'divider' | 'container' | 'dividerColor'> | undefined
>(undefined);

export const useListContext = () => {
  const context = useContext(ListContext);

  return context;
};
