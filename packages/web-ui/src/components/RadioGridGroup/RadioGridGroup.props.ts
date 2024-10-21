import { RadioGridGroupRootProps } from './RadioGridGroupRoot.props';

import { FormFieldGroupProps } from '../FormFieldGroup';
import { RadioGroupProps } from '../RadioGroup';

export interface RadioGridGroupProps
  extends Omit<RadioGridGroupRootProps, 'width' | 'direction' | keyof FormFieldGroupProps>,
    Pick<RadioGroupProps, 'defaultValue' | 'contentWidth'>,
    Omit<FormFieldGroupProps, 'defaultValue'> {}
