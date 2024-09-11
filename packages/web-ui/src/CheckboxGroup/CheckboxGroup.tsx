import * as React from 'react';
import clsx from 'clsx';
import { BaseCheckboxGroup } from '../BaseCheckboxGroup';
import { Flex } from '../Flex';
import { CheckboxGroupProps } from './CheckboxGroup.props';
import { styled } from '../theme';
import { withGlobalPrefix } from '../utils';

const componentName = 'CheckboxGroup';
const componentClassName = withGlobalPrefix(componentName);

const StyledContentContainer = styled(Flex)({
  minWidth: 'fit-content',
  flexWrap: 'wrap',
  ':where([data-orientation="horizontal"] &)': {
    flexDirection: 'row',
  },
  ':where([data-orientation="vertical"] &)': {
    flexDirection: 'column',
  },
});

/**
 * Set of interactive buttons where multiple options can be selected at a time.
 * The `CheckboxGroup` uses a fieldset to group related `Checkbox` controls.
 * The `CheckboxGroup` is responsible for handling the value, helper text,
 * error state, error message, and disabled state, as well as determining the
 * presentation and selection of the items in the list.
 */
export const CheckboxGroup = React.forwardRef<HTMLFieldSetElement, CheckboxGroupProps>(
  ({ contentWidth = 'fit-content', direction = 'column', children, className, ...props }, ref) => {
    return (
      <BaseCheckboxGroup
        ref={ref}
        className={clsx(componentClassName, className)}
        data-orientation={direction === 'column' ? 'vertical' : 'horizontal'}
        {...props}
      >
        <StyledContentContainer width={contentWidth} gap={2}>
          {children}
        </StyledContentContainer>
      </BaseCheckboxGroup>
    );
  }
);

CheckboxGroup.displayName = componentName;
