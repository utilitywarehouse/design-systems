import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { createCheckboxScope } from '@radix-ui/react-checkbox';
// import { useComposedRefs } from '@radix-ui/react-compose-refs';
import { createContextScope } from '@radix-ui/react-context';
import * as RovingFocusGroup from '@radix-ui/react-roving-focus';
import { createRovingFocusGroupScope } from '@radix-ui/react-roving-focus';
import { useControllableState } from '@radix-ui/react-use-controllable-state';
// import { useDirection } from '@radix-ui/react-direction';

import type * as Radix from '@radix-ui/react-primitive';
import type { Scope } from '@radix-ui/react-context';
import { Fieldset } from '../Fieldset';
import { FieldsetLegend } from '../FieldsetLegend';
import { HelperText } from '../HelperText';
import { Box } from '../Box';
import { styled } from '../theme';
import { Flex } from '../Flex';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

/* -------------------------------------------------------------------------------------------------
 * CheckboxGroup
 * -----------------------------------------------------------------------------------------------*/
const CHECKBOX_GROUP_NAME = 'CheckboxGroup';

type ScopedProps<P> = P & { __scopeCheckboxGroup?: Scope };
const [createCheckboxGroupContext, createCheckboxGroupScope] = createContextScope(
  CHECKBOX_GROUP_NAME,
  [createRovingFocusGroupScope, createCheckboxScope]
);
const useRovingFocusGroupScope = createRovingFocusGroupScope();
const useCheckboxScope = createCheckboxScope();

type CheckboxGroupContextValue = {
  name?: string;
  required: boolean;
  disabled: boolean;
  value?: Array<string>;
  onItemCheck(value: string): void;
  onItemUncheck(value: string): void;
};

const [CheckboxGroupProvider, useCheckboxGroupContext] =
  createCheckboxGroupContext<CheckboxGroupContextValue>(CHECKBOX_GROUP_NAME);

type CheckboxGroupElement = ElementRef<'fieldset'>;
type RovingFocusGroupProps = ComponentPropsWithoutRef<typeof RovingFocusGroup.Root>;

interface CheckboxGroupProps extends ComponentPropsWithoutRef<'fieldset'> {
  name?: CheckboxGroupContextValue['name'];
  required?: ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>['required'];
  disabled?: ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>['disabled'];
  dir?: RovingFocusGroupProps['dir'];
  orientation?: RovingFocusGroupProps['orientation'];
  loop?: RovingFocusGroupProps['loop'];
  defaultValue?: Array<string>;
  value?: CheckboxGroupContextValue['value'];
  onValueChange?: (value: Array<string>) => void;
}

const StyledElement = styled(Flex)({
  minWidth: 'fit-content',
  flexWrap: 'wrap',
  ':where([data-orientation="horizontal"] &)': {
    flexDirection: 'row',
  },
  ':where([data-orientation="vertical"] &)': {
    flexDirection: 'column',
  },
});

const CheckboxGroup = React.forwardRef<CheckboxGroupElement, CheckboxGroupProps>(
  (props: ScopedProps<CheckboxGroupProps>, ref) => {
    const {
      __scopeCheckboxGroup,
      name,
      defaultValue,
      value: valueProp,
      required = false,
      disabled = false,
      orientation,
      dir: direction,
      loop = true,
      onValueChange,
      children,
      ...groupProps
    } = props;
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeCheckboxGroup);
    // const direction = useDirection(dir);
    const [value = [], setValue] = useControllableState({
      prop: valueProp,
      defaultProp: defaultValue,
      onChange: onValueChange,
    });

    const handleItemCheck = React.useCallback(
      (itemValue: string) => setValue((prevValue = []) => [...prevValue, itemValue]),
      [setValue]
    );

    const handleItemUncheck = React.useCallback(
      (itemValue: string) =>
        setValue((prevValue = []) => prevValue.filter(value => value !== itemValue)),
      [setValue]
    );
    const label = 'Label';
    const helperText = 'helperText';
    const helperTextId = 'helperTextId';
    const id = 'id';
    const labelId = 'labelId';
    const showHelperTextIcon = true;
    const showErrorMessage = false;
    const contentWidth = 'fit-content';
    const errorMessage = 'error message';

    // <Primitive.div
    //   role="group"
    //   data-disabled={disabled ? '' : undefined}
    //   dir={direction}
    //   {...groupProps}
    //   ref={forwardedRef}
    // />

    return (
      <CheckboxGroupProvider
        scope={__scopeCheckboxGroup}
        name={name}
        required={required}
        disabled={disabled}
        value={value}
        onItemCheck={handleItemCheck}
        onItemUncheck={handleItemUncheck}
      >
        <RovingFocusGroup.Root
          asChild
          {...rovingFocusGroupScope}
          orientation={orientation}
          dir={direction}
          loop={loop}
        >
          <Fieldset
            ref={ref}
            {...groupProps}
            {...props}
            disabled={disabled}
            id={id}
            data-disabled={disabled ? '' : undefined}
            data-orientation="vertical"
            // data-orientation={direction === 'column' ? 'vertical' : 'horizontal'}
            // aria-errormessage={ariaErrorMessage || showErrorMessage ? errorMessageId : undefined}
            // aria-labelledby={ariaLabelledby || !!label ? labelId : undefined}
            // aria-invalid={showErrorMessage}
          >
            {label ? (
              <FieldsetLegend id={labelId} disabled={disabled}>
                {label}
              </FieldsetLegend>
            ) : null}
            <Box display="flex" gap={2} flexDirection={'column'}>
              {helperText ? (
                <HelperText id={helperTextId} disabled={disabled} showIcon={showHelperTextIcon}>
                  {helperText}
                </HelperText>
              ) : null}

              <StyledElement width={contentWidth} gap={2}>
                {children}
              </StyledElement>
            </Box>
            {showErrorMessage ? (
              <HelperText
                validationStatus="invalid"
                // showIcon={showErrorMessageIcon}
                // id={errorMessageId}
              >
                {errorMessage}
              </HelperText>
            ) : null}
          </Fieldset>
        </RovingFocusGroup.Root>
      </CheckboxGroupProvider>
    );
  }
);

CheckboxGroup.displayName = CHECKBOX_GROUP_NAME;

/* -------------------------------------------------------------------------------------------------
 * CheckboxGroupItem
 * -----------------------------------------------------------------------------------------------*/

const ITEM_NAME = 'CheckboxGroupItem';

type CheckboxGroupItemElement = ElementRef<typeof CheckboxPrimitive.Root>;
type CheckboxProps = ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>;

interface CheckboxGroupItemProps
  extends Omit<CheckboxProps, 'checked' | 'defaultChecked' | 'onCheckedChange' | 'name'> {
  value: string;
}

const CheckboxGroupItem = React.forwardRef<CheckboxGroupItemElement, CheckboxGroupItemProps>(
  (props: ScopedProps<CheckboxGroupItemProps>, ref) => {
    const { __scopeCheckboxGroup, disabled, ...itemProps } = props;
    const context = useCheckboxGroupContext(ITEM_NAME, __scopeCheckboxGroup);
    const isDisabled = context.disabled || disabled;
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeCheckboxGroup);
    const checkboxScope = useCheckboxScope(__scopeCheckboxGroup);
    // const ref = React.useRef<React.ElementRef<typeof CheckboxPrimitive.Root>>(null);
    // const composedRefs = useComposedRefs(forwardedRef, ref);
    const checked = context.value?.includes(itemProps.value);

    return (
      <RovingFocusGroup.Item
        asChild
        {...rovingFocusGroupScope}
        focusable={!isDisabled}
        active={checked}
      >
        <CheckboxPrimitive.Root
          name={context.name}
          disabled={isDisabled}
          required={context.required}
          checked={checked}
          {...checkboxScope}
          {...itemProps}
          ref={ref}
          onCheckedChange={checked => {
            if (checked) {
              context.onItemCheck(props.value);
            } else {
              context.onItemUncheck(props.value);
            }
          }}
        />
      </RovingFocusGroup.Item>
    );
  }
);

CheckboxGroupItem.displayName = ITEM_NAME;

/* -------------------------------------------------------------------------------------------------
 * CheckboxGroupIndicator
 * -----------------------------------------------------------------------------------------------*/

const INDICATOR_NAME = 'CheckboxGroupIndicator';

type CheckboxGroupIndicatorElement = React.ElementRef<typeof CheckboxPrimitive.Indicator>;
type CheckboxIndicatorProps = Radix.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Indicator>;
interface CheckboxGroupIndicatorProps extends CheckboxIndicatorProps {}

const CheckboxGroupIndicator = React.forwardRef<
  CheckboxGroupIndicatorElement,
  CheckboxGroupIndicatorProps
>((props: ScopedProps<CheckboxGroupIndicatorProps>, forwardedRef) => {
  const { __scopeCheckboxGroup, ...indicatorProps } = props;
  const checkboxScope = useCheckboxScope(__scopeCheckboxGroup);
  return <CheckboxPrimitive.Indicator {...checkboxScope} {...indicatorProps} ref={forwardedRef} />;
});

CheckboxGroupIndicator.displayName = INDICATOR_NAME;

/* ---------------------------------------------------------------------------------------------- */

const Root = CheckboxGroup;
const Item = CheckboxGroupItem;
const Indicator = CheckboxGroupIndicator;

export {
  createCheckboxGroupScope,
  //
  CheckboxGroup,
  CheckboxGroupItem,
  CheckboxGroupIndicator,
  //
  Root,
  Item,
  Indicator,
};
export type { CheckboxGroupProps, CheckboxGroupItemProps, CheckboxGroupIndicatorProps };
