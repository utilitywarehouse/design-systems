import * as React from 'react';
import { styled } from '../theme';
import { Flex } from '../Flex';
import { withGlobalPrefix } from '../utils';
import { CheckboxGroupProps } from './CheckboxGroup.props';
import { BaseCheckboxGroup } from './BaseCheckboxGroup';
import clsx from 'clsx';

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
