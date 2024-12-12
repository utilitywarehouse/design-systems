import * as React from 'react';

import clsx from 'clsx';

import { CheckboxTileProps } from './CheckboxTile.props';
import { withGlobalPrefix } from '../../helpers/with-global-prefix';
import { useIds } from '../../hooks/use-ids';
import { useFormFieldGroup } from '../FormFieldGroup/FormFieldGroup.context';
import type { ElementRef } from 'react';
import { CheckboxBase } from '../CheckboxBase/CheckboxBase';
import { Flex } from '../Flex/Flex';
import { Label } from '../Label/Label';
import { HelperText } from '../HelperText/HelperText';

const componentName = 'CheckboxTile';
const componentClassName = withGlobalPrefix(componentName);

type CheckboxTileElement = ElementRef<'button'>;

/**
 * The `CheckboxTile` component is a dual-state checkbox allowing users to
 * toggle between checked and not checked. `CheckboxTile` can be used
 * independently, however multiple checkboxes should be used with a
 * `CheckboxGroup` or `CheckboxGridGroup` to handle the state control and
 * layout. `CheckboxTile` is, by default, appropriately labelled when using the
 * `label` prop, if you do not provide a label, you must specify an
 * `aria-label` or `aria-labelledby` for accessibility.
 */
export const CheckboxTile = React.forwardRef<CheckboxTileElement, CheckboxTileProps>(
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
    const { labelId, helperTextId } = useIds({ providedId, componentPrefix: componentName });
    const context = useFormFieldGroup();
    const ariaDescribedby = context ? context['aria-describedby'] : '';
    const showHelperText = !context?.hasGroupHelperText && !!helperText;
    const showLabel = !!label;
    return (
      <label
        data-disabled={disabled ? '' : undefined}
        className={clsx(componentClassName, className)}
      >
        <CheckboxBase
          {...props}
          ref={ref}
          disabled={disabled}
          aria-describedby={showHelperText ? helperTextId : ariaDescribedby}
          aria-labelledby={ariaLabelledby || !!label ? labelId : undefined}
        />
        {showLabel ? (
          <Flex direction="column" gap="50">
            <Label asChild id={labelId} nested disableUserSelect>
              <span>{label}</span>
            </Label>
            {showHelperText ? (
              <HelperText id={helperTextId} disableUserSelect>
                {helperText}
              </HelperText>
            ) : null}
          </Flex>
        ) : null}
      </label>
    );
  }
);

CheckboxTile.displayName = componentName;
