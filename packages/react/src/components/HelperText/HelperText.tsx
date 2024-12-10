import * as React from 'react';
import type { ElementRef } from 'react';

import clsx from 'clsx';

import { HelperTextProps } from './HelperText.props';
import {
  InformationMediumContainedIcon,
  TickMediumContainedIcon,
  WarningMediumContainedIcon,
} from '@utilitywarehouse/react-icons';

const componentName = 'HelperText';
const componentClassName = 'uw-' + componentName;

type HelperTextElement = ElementRef<'span'>;

export const HelperText = React.forwardRef<HelperTextElement, HelperTextProps>(
  (
    { children, disabled, disableUserSelect, validationStatus, showIcon, className, ...props },
    ref
  ) => {
    const icons: { [key: string]: typeof TickMediumContainedIcon } = {
      valid: TickMediumContainedIcon,
      invalid: WarningMediumContainedIcon,
    };
    const Icon = validationStatus
      ? (icons[validationStatus] as JSX.ElementType)
      : (InformationMediumContainedIcon as JSX.ElementType);
    return (
      <span
        ref={ref}
        className={clsx(componentClassName, className)}
        data-disabled={disabled ? '' : undefined}
        data-disable-user-select={disableUserSelect ? '' : undefined}
        data-validation={validationStatus ? validationStatus : undefined}
        {...props}
      >
        {showIcon ? <Icon /> : null}
        {children}
      </span>
    );
  }
);

HelperText.displayName = componentName;
