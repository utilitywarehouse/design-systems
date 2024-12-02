import * as React from 'react';
import type { ElementRef } from 'react';

import clsx from 'clsx';

import { LabelProps } from './Label.props';
import { Slot } from '@radix-ui/react-slot';
import { withGlobalPrefix } from '../../helpers/with-global-prefix';

const componentName = 'Label';
const componentClassName = withGlobalPrefix(componentName);

type LabelElement = ElementRef<'label'>;

export const Label = React.forwardRef<LabelElement, LabelProps>(
  (
    {
      children,
      asChild,
      as: Tag = 'label',
      disabled,
      nested,
      disableUserSelect,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <Slot
        ref={ref}
        className={clsx(componentClassName, className)}
        data-disabled={disabled ? '' : undefined}
        data-nested={nested ? '' : undefined}
        data-disable-user-select={disableUserSelect ? '' : undefined}
        {...props}
      >
        {asChild ? children : <Tag>{children}</Tag>}
      </Slot>
    );
  }
);

Label.displayName = componentName;
