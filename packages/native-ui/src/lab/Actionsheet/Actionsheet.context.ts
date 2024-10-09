import { createContext, useContext } from 'react';
import { ActionsheetContextValue } from './Actionsheet.props';

const ActionsheetContext = createContext<ActionsheetContextValue>({} as ActionsheetContextValue);

export const useActionsheetContext = () => useContext(ActionsheetContext);

export default ActionsheetContext;
