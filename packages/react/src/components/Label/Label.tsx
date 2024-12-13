import * as React from 'react';
import type { ElementRef } from 'react';

import clsx from 'clsx';

import { LabelProps } from './Label.props';
import { Slot } from '@radix-ui/react-slot';
import { withGlobalPrefix } from '../../helpers/with-global-prefix';
import { DATA_ATTRIBUTES } from '../../helpers/data-attributes';

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
    const dataAttributeProps = {
      [DATA_ATTRIBUTES.disableUserSelect]: disableUserSelect ? '' : undefined,
      'data-disabled': disabled ? '' : undefined,
      'data-nested': nested ? '' : undefined,
    };
    return (
      <Slot
        ref={ref}
        className={clsx(componentClassName, className)}
        {...dataAttributeProps}
        {...props}
      >
        {asChild ? children : <Tag>{children}</Tag>}
      </Slot>
    );
  }
);

Label.displayName = componentName;
