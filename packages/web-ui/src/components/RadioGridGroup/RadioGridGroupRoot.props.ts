import { RadioGroupRootProps } from '../RadioGroup';
import { StackProps } from '../Stack';

export interface RadioGridGroupRootProps extends RadioGroupRootProps {
  /** Sets the number of columns to display the contents in. */
  columns?: StackProps['spacing'];
}
