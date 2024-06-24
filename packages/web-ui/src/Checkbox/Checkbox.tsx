import * as React from 'react';
import { withGlobalPrefix } from '../utils';
import clsx from 'clsx';
import { CheckboxProps } from './Checkbox.props';
import { styled } from '../theme';
import { PropsWithSx } from '../types';
import { useIds } from '../hooks';
import { Flex } from '../Flex';
import { Label } from '../Label';
import { HelperText } from '../HelperText';
import { BaseCheckbox } from '../BaseCheckbox';
import { useBaseCheckboxGroup } from '../BaseCheckboxGroup';

const componentName = 'Checkbox';
const componentClassName = withGlobalPrefix(componentName);

export const StyledBaseCheckbox = styled(BaseCheckbox)({
  ':where(:focus-visible)': {
    '--checkbox-outline-color': 'var(--checkbox-outline-color-focus)',
  },
});

// we do this so that the gap between the checkbox & label is clickable
export const StyledLabel = styled(Label)({
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    height: '100%',
    width: '100%',
    left: -8,
  },
});

/**
 * Checkbox allows the user to toggle between checked and not checked.
 *
 * A Checkbox can be used independently, multiple checkboxes should be used
 * with a `CheckboxGroup` or `CheckboxGridGroup` to handle the state control
 * and layout.
 *
 * > This component does not need to be wrapped in a `ThemeProvider` and can be used standalone with other component libraries.
 */
export const Checkbox = React.forwardRef<HTMLButtonElement, PropsWithSx<CheckboxProps>>(
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
    const context = useBaseCheckboxGroup();
    const ariaDescribedby = context ? context['aria-describedby'] : '';
    const showHelperText = !context?.hasGroupHelperText && !!helperText;
    const showLabel = !!label;
    return (
      <Flex data-disabled={disabled ? '' : undefined} gap={1}>
        <StyledBaseCheckbox
          ref={ref}
          {...props}
          id={id}
          className={clsx(componentClassName, className)}
          disabled={disabled}
          aria-describedby={showHelperText ? helperTextId : ariaDescribedby}
          aria-labelledby={ariaLabelledby || !!label ? labelId : undefined}
        />
        {showLabel ? (
          <Flex direction="column" gap={0.5}>
            <StyledLabel id={labelId} htmlFor={id} nested>
              {label}
            </StyledLabel>
            {showHelperText ? <HelperText id={helperTextId}>{helperText}</HelperText> : null}
          </Flex>
        ) : null}
      </Flex>
    );
  }
);

Checkbox.displayName = componentName;