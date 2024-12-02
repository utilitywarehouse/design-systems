import * as React from 'react';

import clsx from 'clsx';
import { IconButtonProps } from './IconButton.props';
import { ButtonBase } from '../ButtonBase/ButtonBase';
import type { ButtonBaseElement } from '../ButtonBase/ButtonBase';
import { withBreakpoints } from '../../helpers/with-breakpoints';

const componentName = 'IconButton';
const componentClassName = 'uwp-' + componentName;

export const IconButton = React.forwardRef<ButtonBaseElement, IconButtonProps>(
  ({ className, label, size = 'medium', ...props }, forwardedRef) => {
    const sizeClassName = withBreakpoints(size, 'size');
    return (
      <ButtonBase
        ref={forwardedRef}
        className={clsx(componentClassName, sizeClassName, className)}
        aria-label={label}
        {...props}
      />
    );
  }
);

IconButton.displayName = componentName;
