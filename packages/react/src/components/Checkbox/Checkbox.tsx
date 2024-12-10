import * as React from 'react';

import clsx from 'clsx';

import type { CheckboxProps } from './Checkbox.props';
import { withGlobalPrefix } from '../../helpers/with-global-prefix';
import { Flex } from '../Flex/Flex';
import { Label } from '../Label/Label';
import { useFormFieldGroup } from '../FormFieldGroup/FormFieldGroup.context';
import { HelperText } from '../HelperText/HelperText';
import { useIds } from '../../hooks/use-ids';
import { CheckboxBase } from '../CheckboxBase/CheckboxBase';
import type { ElementRef } from 'react';

const componentName = 'Checkbox';
const componentClassName = withGlobalPrefix(componentName);

export type CheckboxElement = ElementRef<'button'>;

/**
 * The `Checkbox` component is a dual-state checkbox allowing users to toggle
 * between checked and not checked. `Checkbox` can be used independently,
 * however multiple checkboxes should be used with a `CheckboxGroup` or
 * `CheckboxGridGroup` to handle the state control and layout. `Checkbox` is,
 * by default, appropriately labelled when using the `label` prop, if you do
 * not provide a label, you must specify an `aria-label` or `aria-labelledby`
 * for accessibility.
 */
export const Checkbox = React.forwardRef<CheckboxElement, CheckboxProps>(
  (
    {
      id: providedId,
      label,
      helperText,
      className,
      disabled,
      'aria-labelledby': ariaLabelledby,
      ...props
    },
    ref
  ) => {
    const { id, labelId, helperTextId } = useIds({ providedId, componentPrefix: 'checkbox' });
    const context = useFormFieldGroup();
    const hasGroupHelperText = context?.hasGroupHelperText;
    const ariaDescribedby = context ? context['aria-describedby'] : '';
    const showHelperText = !hasGroupHelperText && !!helperText;
    const showLabel = !!label;

    return (
      <Flex
        className={clsx(componentClassName, className)}
        data-disabled={disabled ? '' : undefined}
        gap="100"
      >
        <CheckboxBase
          ref={ref}
          className="uw-Checkbox-CheckboxBase"
          {...props}
          id={id}
          disabled={disabled}
          aria-describedby={showHelperText ? helperTextId : ariaDescribedby}
          aria-labelledby={ariaLabelledby || showLabel ? labelId : undefined}
        />
        {showLabel ? (
          <Flex direction="column" gap="50">
            <Label id={labelId} htmlFor={id} className="uw-Checkbox-Label" nested disableUserSelect>
              {label}
            </Label>
            {showHelperText ? (
              <HelperText id={helperTextId} disableUserSelect>
                {helperText}
              </HelperText>
            ) : null}
          </Flex>
        ) : null}
      </Flex>
    );
  }
);

Checkbox.displayName = componentName;
