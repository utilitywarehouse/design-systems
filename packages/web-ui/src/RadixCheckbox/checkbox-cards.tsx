import * as React from 'react';
import classNames from 'classnames';

import * as CheckboxGroupPrimitive from './checkbox-group.primitive';
import { createCheckboxGroupScope } from './checkbox-group.primitive';
import { TickMediumIcon } from '@utilitywarehouse/react-icons';

import type { Scope } from '@radix-ui/react-context';

type ScopedProps<P> = P & { __scopeCheckboxCards?: Scope };
const useCheckboxGroupScope = createCheckboxGroupScope();

// Omits the specified props from the component props. Autocomplete will suggest props
// of the component, but won't restrict the omittable props to those that actually exist.
type ComponentPropsWithout<
  T extends React.ElementType,
  O extends
    | Omit<string, keyof React.ComponentPropsWithoutRef<T>>
    | keyof React.ComponentPropsWithoutRef<T>,
> = Omit<React.ComponentPropsWithoutRef<T>, O & string>;

type CheckboxCardsRootElement = React.ElementRef<typeof CheckboxGroupPrimitive.Root>;
interface CheckboxCardsRootProps
  extends ComponentPropsWithout<
    typeof CheckboxGroupPrimitive.Root,
    'asChild' | 'color' | 'defaultChecked'
  > {}

const CheckboxCardsRoot = React.forwardRef<CheckboxCardsRootElement, CheckboxCardsRootProps>(
  (props: ScopedProps<CheckboxCardsRootProps>, forwardedRef) => {
    const { __scopeCheckboxCards, className, ...rootProps } = props;
    const checkboxGroupScope = useCheckboxGroupScope(__scopeCheckboxCards);
    return (
      <CheckboxGroupPrimitive.Root
        {...checkboxGroupScope}
        {...rootProps}
        ref={forwardedRef}
        className={classNames('rt-CheckboxCardsRoot', className)}
      />
    );
  }
);
CheckboxCardsRoot.displayName = 'CheckboxCards.Root';

type CheckboxCardsItemElement = React.ElementRef<typeof CheckboxGroupPrimitive.Item>;
interface CheckboxCardsItemProps
  extends ComponentPropsWithout<typeof CheckboxGroupPrimitive.Item, ''> {}

const CheckboxCardsItem = React.forwardRef<
  CheckboxCardsItemElement,
  ScopedProps<CheckboxCardsItemProps>
>(({ __scopeCheckboxCards, children, className, style, ...props }, forwardedRef) => {
  // const context = useCheckboxCardsContext('CheckboxCardsItem', __scopeCheckboxCards);
  const checkboxGroupScope = useCheckboxGroupScope(__scopeCheckboxCards);
  return (
    <label className={classNames('rt-BaseCard', 'rt-CheckboxCardsItem', className)} style={style}>
      {children}
      <CheckboxGroupPrimitive.Item
        {...checkboxGroupScope}
        {...props}
        ref={forwardedRef}
        className={classNames('rt-reset', 'rt-BaseCheckboxRoot', 'rt-CheckboxCardCheckbox')}
      >
        <CheckboxGroupPrimitive.Indicator
          {...checkboxGroupScope}
          asChild
          className="rt-BaseCheckboxIndicator"
        >
          <TickMediumIcon />
        </CheckboxGroupPrimitive.Indicator>
      </CheckboxGroupPrimitive.Item>
    </label>
  );
});
CheckboxCardsItem.displayName = 'CheckboxCards.Item';

export { CheckboxCardsRoot as Root, CheckboxCardsItem as Item };
export type { CheckboxCardsRootProps as RootProps, CheckboxCardsItemProps as ItemProps };
