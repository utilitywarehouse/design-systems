import React, { ComponentProps, forwardRef, useMemo } from 'react';
import { ButtonGroupComponent } from './Button';
import { ButtonGroupContext } from './ButtonGroup.context';
import { View } from 'react-native';

interface ButtonGroupProps
  extends Omit<
    ComponentProps<typeof ButtonGroupComponent>,
    'isDisabled' | 'isAttached' | 'isReversed' | 'ref'
  > {
  disabled?: boolean;
  loading?: boolean;
}

const ButtonGroup = forwardRef<View, ButtonGroupProps>(
  ({ children, disabled, loading, ...props }, ref) => {
    const value = useMemo(() => ({ disabled, loading }), [disabled, loading]);
    return (
      <ButtonGroupContext.Provider value={value}>
        <ButtonGroupComponent
          // @ts-expect-error - ref
          ref={ref}
          {...props}
        >
          {children}
        </ButtonGroupComponent>
      </ButtonGroupContext.Provider>
    );
  }
);

ButtonGroup.displayName = 'ButtonGroup';

export default ButtonGroup;
