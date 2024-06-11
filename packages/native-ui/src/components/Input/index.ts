export { default as Input } from './Input';
import { AccessibleInput } from './Input';
import ValidationIcon from './styled-components/ValidationIcon';

// TODO: remove once upgraded to typescript 5.5
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
export const InputIcon = AccessibleInput.Icon;
// TODO: remove once upgraded to typescript 5.5
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
export const InputSlot = AccessibleInput.Slot;
// TODO: remove once upgraded to typescript 5.5
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
export const InputField = AccessibleInput.Input;
export const InputValidationIcon = ValidationIcon;
