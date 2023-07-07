import { useId } from 'react';
import { uwWebUiPrefix } from '../utils';

interface UseFormControlProps {
  providedId?: string;
  providedLabelId?: string;
  providedHelperTextId?: string;
  providedErrorMessageId?: string;
}

export const useFormControl = ({
  providedId,
  providedLabelId,
  providedHelperTextId,
  providedErrorMessageId,
}: UseFormControlProps) => {
  const generatedId = useId();
  const id = providedId || `${uwWebUiPrefix}-${generatedId}`;
  const labelId = providedLabelId || `${uwWebUiPrefix}-${generatedId}-label`;
  const helperTextId = providedHelperTextId || `${uwWebUiPrefix}-${generatedId}-helper-text`;
  const errorMessageId = providedErrorMessageId || `${uwWebUiPrefix}-${generatedId}-error-message`;
  return { id, labelId, helperTextId, errorMessageId };
};
