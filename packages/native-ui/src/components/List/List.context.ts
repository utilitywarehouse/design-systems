import { createContext, useContext } from 'react';
import type ListProps from './List.props';

export const ListContext = createContext<
  Pick<ListProps, 'loading' | 'disabled' | 'divider' | 'container'>
>({});

export const useListContext = () => {
  const context = useContext(ListContext);

  return context;
};
