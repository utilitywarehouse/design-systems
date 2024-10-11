import * as React from 'react';

import clsx from 'clsx';

import { colors } from '@utilitywarehouse/colour-system';

import { CheckboxTileProps } from './CheckboxTile.props';

import { BaseCheckbox } from '../BaseCheckbox';
import { useBaseCheckboxGroup } from '../BaseCheckboxGroup';
import { Flex } from '../Flex';
import { useFormField } from '../FormField/FormField.context';
import { HelperText } from '../HelperText';
import { Label } from '../Label';

import { useIds } from '../../hooks';
import { styled } from '../../theme';
import type { PropsWithSx } from '../../types';
import { px, spacing, withGlobalPrefix } from '../../utils';

const componentName = 'CheckboxTile';
const componentClassName = withGlobalPrefix(componentName);

const StyledTile = styled('label')({
  display: 'flex',
  gap: spacing(1),
  padding: spacing(2),
  borderRadius: px(8),
  '--checkbox-tile-border-width': px(2),
  '--checkbox-tile-border-color': colors.grey400,
  '--checkbox-tile-border-color-hover': colors.cyan500,
  '--checkbox-tile-border-color-focus': colors.cyan500,
  '--checkbox-tile-border-color-disabled': colors.grey300,
  boxShadow: 'inset 0 0 0 var(--checkbox-tile-border-width) var(--checkbox-tile-border-color)',
  ':where(:has(:focus-visible))': {
    backgroundColor: colors.cyan75,
    outline: `4px solid ${colors.cyan700}`,
    '--checkbox-tile-border-color': 'var(--checkbox-tile-border-color-focus)',
  },
  '@media (hover: hover)': {
    ':where(:hover:not([data-disabled],[data-disabled] &))': {
      backgroundColor: colors.cyan75,
      '--checkbox-tile-border-color': 'var(--checkbox-tile-border-color-hover)',
    },
  },
  ':where([data-disabled],[data-disabled] &)': {
    '--checkbox-tile-border-color': 'var(--checkbox-tile-border-color-disabled)',
  },
  cursor: 'pointer',
  '*': { cursor: 'pointer' },
});

/**
 * The `CheckboxTile` component is a dual-state checkbox allowing users to
 * toggle between checked and not checked. `CheckboxTile` can be used
 * independently, however multiple checkboxes should be used with a
 * `CheckboxGroup` or `CheckboxGridGroup` to handle the state control and
 * layout. `CheckboxTile` is, by default, appropriately labelled when using the
 * `label` prop, if you do not provide a label, you must specify an
 * `aria-label` or `aria-labelledby` for accessibility.
 */
export const CheckboxTile = React.forwardRef<HTMLButtonElement, PropsWithSx<CheckboxTileProps>>(
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
    const { id, labelId, helperTextId } = useIds({ providedId, componentPrefix: componentName });
    const context = useFormField();
    const ariaDescribedby = context ? context['aria-describedby'] : '';
    const hasGroupHelperText = Boolean(context?.helperText);
    const showHelperText = !hasGroupHelperText && !!helperText;
    const showLabel = !!label;
    return (
      <StyledTile data-disabled={disabled ? '' : undefined}>
        <BaseCheckbox
          {...props}
          ref={ref}
          className={clsx(componentClassName, className)}
          disabled={disabled}
          aria-describedby={showHelperText ? helperTextId : ariaDescribedby}
          aria-labelledby={ariaLabelledby || !!label ? labelId : undefined}
        />
        {showLabel ? (
          <Flex direction="column" gap={0.5}>
            <Label component="span" id={labelId} htmlFor={id} nested disableUserSelect>
              {label}
            </Label>
            {showHelperText ? (
              <HelperText id={helperTextId} disableUserSelect>
                {helperText}
              </HelperText>
            ) : null}
          </Flex>
        ) : null}
      </StyledTile>
    );
  }
);

CheckboxTile.displayName = componentName;
