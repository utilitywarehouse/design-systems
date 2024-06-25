import * as React from 'react';
import styled from '../theme/styled';
import clsx from 'clsx';
import { px, spacing, withGlobalPrefix } from '../utils';
import { colors } from '@utilitywarehouse/colour-system';
import { Flex } from '../Flex';
import { Label } from '../Label';
import { HelperText } from '../HelperText';
import { PropsWithSx } from '../types';
import { CheckboxTileProps } from './CheckboxTile.props';
import { useIds } from '../hooks';
import { BaseCheckbox } from '../BaseCheckbox';
import { useBaseCheckboxGroup } from '../BaseCheckboxGroup';

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
});

const StyledLabel = styled(Label)({ userSelect: 'none' });
const StyledHelperText = styled(HelperText)({ userSelect: 'none' });

/**
 * CheckboxTile allows the user to toggle between checked and not checked.
 *
 * A CheckboxTile can be used independently, multiple checkboxes should be used
 * with a `CheckboxGroup` or `CheckboxGridGroup` to handle the state control
 * and layout.
 *
 * > This component does not need to be wrapped in a `ThemeProvider` and can be used standalone with other component libraries.
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
    const context = useBaseCheckboxGroup();
    const ariaDescribedby = context ? context['aria-describedby'] : '';
    const showHelperText = !context?.hasGroupHelperText && !!helperText;
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
            <StyledLabel component="span" id={labelId} htmlFor={id} nested>
              {label}
            </StyledLabel>
            {showHelperText ? (
              <StyledHelperText id={helperTextId}>{helperText}</StyledHelperText>
            ) : null}
          </Flex>
        ) : null}
      </StyledTile>
    );
  }
);

CheckboxTile.displayName = componentName;
