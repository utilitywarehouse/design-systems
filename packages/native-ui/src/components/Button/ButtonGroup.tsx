import React, { ComponentProps, FC, useMemo } from 'react';
import { ButtonGroupComponent } from './Button';
import { ButtonGroupContext } from './ButtonGroup.context';

const ButtonGroup: FC<
  Omit<ComponentProps<typeof ButtonGroupComponent>, 'isDisabled' | 'isAttached' | 'isReversed'> & {
    disabled?: boolean;
    loading?: boolean;
  }
> = ({ children, disabled, loading, ...props }) => {
  const value = useMemo(() => ({ disabled, loading }), [disabled, loading]);
  return (
    <ButtonGroupContext.Provider value={value}>
      <ButtonGroupComponent {...props}>{children}</ButtonGroupComponent>
    </ButtonGroupContext.Provider>
  );
};

ButtonGroup.displayName = 'ButtonGroup';

export default ButtonGroup;
