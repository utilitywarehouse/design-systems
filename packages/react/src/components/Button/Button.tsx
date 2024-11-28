import * as React from 'react';

import clsx from 'clsx';
import { ButtonProps } from './Button.props';
import { ButtonBase } from '../ButtonBase/ButtonBase';
import type { ButtonBaseElement } from '../ButtonBase/ButtonBase';
import { withBreakpoints } from '../../helpers/with-breakpoints';

const componentName = 'Button';
const componentClassName = 'uwp-' + componentName;

export const Button = React.forwardRef<ButtonBaseElement, ButtonProps>(
  ({ className, size = 'medium', ...props }, forwardedRef) => {
    const sizeClassName = withBreakpoints(size, 'size');
    return (
      <ButtonBase
        ref={forwardedRef}
        className={clsx(componentClassName, sizeClassName, className)}
        {...props}
      />
    );
  }
);

Button.displayName = componentName;
