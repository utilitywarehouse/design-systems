import { createContext, useContext } from 'react';
import { AccordionContextType } from './types';

const AccordionContext = createContext<AccordionContextType | undefined>(undefined);

export const useAccordionContext = (): AccordionContextType => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('useAccordion must be used within an AccordionProvider');
  }
  return context;
};

export default AccordionContext;
