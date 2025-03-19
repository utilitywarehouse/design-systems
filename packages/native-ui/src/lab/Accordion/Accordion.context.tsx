import { createContext, useContext } from 'react';

const AccordionContext = createContext<{
  noPadding?: boolean;
  disabled?: boolean;
  divider?: boolean;
  contentNoPadding?: boolean;
}>({});

export const useAccordionContext = () => useContext(AccordionContext);

export default AccordionContext;
