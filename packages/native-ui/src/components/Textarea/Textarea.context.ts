import { createContext, useContext } from 'react';
import { TextareaContextValue } from './Textarea.props';

export const TextareaContext = createContext<TextareaContextValue>({});

export const useTextareaContext = () => useContext(TextareaContext);
