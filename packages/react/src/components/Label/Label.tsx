import * as React from 'react';
import type { ElementRef } from 'react';

import clsx from 'clsx';

import { LabelProps } from './Label.props';
import { Slot } from '@radix-ui/react-slot';

const componentName = 'Label';
const componentClassName = 'uw-' + componentName;

const classNames = {
  nested: 'uw-nested',
};

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
        className={clsx(componentClassName, { [classNames.nested]: nested }, className)}
        data-disabled={disabled ? '' : undefined}
        data-disable-user-select={disableUserSelect ? '' : undefined}
        {...props}
      >
        {asChild ? children : <Tag>{children}</Tag>}
      </Slot>
    );
  }
);

Label.displayName = componentName;
