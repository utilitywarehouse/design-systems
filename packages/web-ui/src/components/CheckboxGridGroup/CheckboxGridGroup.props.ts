import { CheckboxGridGroupRootProps } from './CheckboxGridGroupRoot.props';

import { CheckboxGroupProps } from '../CheckboxGroup';
import { CheckboxGroupRootOwnProps } from '../CheckboxGroup/CheckboxGroupRoot.props';
import { CheckboxGroupBaseProps } from '../CheckboxGroupBase';
import { FormFieldGroupProps } from '../FormFieldGroup/FormFieldGroup.props';

export interface CheckboxGridGroupProps
  extends Omit<CheckboxGroupRootOwnProps, 'width' | 'direction'>,
    Pick<CheckboxGridGroupRootProps, 'columns'>,
    Pick<CheckboxGroupProps, 'contentWidth'>,
    CheckboxGroupBaseProps,
    Omit<FormFieldGroupProps, keyof CheckboxGroupRootOwnProps> {}
