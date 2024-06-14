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
import { CheckboxGroupContext } from './CheckboxGroup.context';
import { BaseCheckbox } from './BaseCheckbox';

const componentName = 'Checkbox';
const componentClassName = withGlobalPrefix(componentName);

export const StyledBaseCheckbox = styled(BaseCheckbox)({
  ':where(:focus-visible)': {
    '--checkbox-border-color': 'var(--checkbox-border-color-focus)',
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
 * Checkbox
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
    const { hasGroupHelperText, 'aria-describedby': ariaDescribedby } =
      React.useContext(CheckboxGroupContext);
    const showHelperText = !hasGroupHelperText && !!helperText;
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
