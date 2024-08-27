import React, { useMemo } from 'react';
import type ListProps from './List.props';
import { Root } from './styled-components';
import { ListHeading } from './ListHeading';

const ListContext = React.createContext<
  Pick<ListProps, 'loading' | 'disabled' | 'divider' | 'container'> | undefined
>(undefined);

const List: React.FC<ListProps> = ({ children, headingText, headingSupportingText, ...props }) => {
  const { loading, disabled, divider, container } = props;
  const value = useMemo(
    () => ({ loading, disabled, divider, container }),
    [loading, disabled, divider, container]
  );
  return (
    <ListContext.Provider value={value}>
      <Root {...props}>
        {headingText ? (
          <ListHeading text={headingText} supportingText={headingSupportingText} />
        ) : null}
        {children}
      </Root>
    </ListContext.Provider>
  );
};

export const useListContext = () => {
  const context = React.useContext(ListContext);

  return context;
};

export default List;
