import * as React from 'react';

import * as RadixCheckbox from '@radix-ui/react-checkbox';

import { TickMediumIcon } from '@utilitywarehouse/react-icons';

import type { CheckboxBaseProps } from './CheckboxBase.props';
import { withGlobalPrefix } from '../../helpers/with-global-prefix';
import clsx from 'clsx';
import type { ElementRef } from 'react';

const componentName = 'CheckboxBase';
const componentClassName = withGlobalPrefix(componentName);

export type CheckboxBaseElement = ElementRef<'button'>;

export const CheckboxBase = React.forwardRef<CheckboxBaseElement, CheckboxBaseProps>(
  ({ onCheckedChange, value = 'on', className, ...props }, ref) => {
    // const context = useCheckboxGroupBase();
    // const checked = context?.value?.includes(value);

    return (
      <RadixCheckbox.Root
        ref={ref}
        className={clsx(componentClassName, className)}
        // name={context?.name}
        // checked={checked}
        value={value}
        {...props}
        // onCheckedChange={(checked: boolean) => {
        //   if (context) {
        //     if (checked) {
        //       context?.onItemCheck(value);
        //     } else {
        //       context?.onItemUncheck(value);
        //     }
        //   }
        //   if (onCheckedChange) {
        //     onCheckedChange(checked);
        //   }
        // }}
      >
        <RadixCheckbox.Indicator asChild className="uw-CheckboxBaseIndicator">
          <TickMediumIcon />
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
    );
  }
);

CheckboxBase.displayName = componentName;
