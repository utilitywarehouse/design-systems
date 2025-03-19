import { createContext, useContext } from 'react';

const AccordionItemContext = createContext<{
  noPadding?: boolean;
  disabled?: boolean;
  divider?: boolean;
}>({});

export const useAccordionItemContext = () => useContext(AccordionItemContext);

export default AccordionItemContext;
