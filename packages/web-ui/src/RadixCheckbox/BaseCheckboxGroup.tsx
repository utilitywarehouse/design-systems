import * as React from 'react';
import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { createCheckboxScope } from '@radix-ui/react-checkbox';
import { createContextScope } from '@radix-ui/react-context';
import type { Scope } from '@radix-ui/react-context';
import * as RovingFocusGroup from '@radix-ui/react-roving-focus';
import { createRovingFocusGroupScope } from '@radix-ui/react-roving-focus';
import { useControllableState } from '@radix-ui/react-use-controllable-state';
import { Fieldset } from '../Fieldset';
import { FieldsetLegend } from '../FieldsetLegend';
import { HelperText } from '../HelperText';
import { Box } from '../Box';
import { styled } from '../theme';
import { Flex } from '../Flex';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';
import { colors, colorsCommon } from '@utilitywarehouse/colour-system';
import { px } from '../utils';
import { CheckboxTileGroupContext } from './CheckboxTileGroup.context';

const checkboxGroupName = 'BaseCheckboxGroup';

type BaseCheckboxGroupContextValue = {
  name?: string;
  required: boolean;
  disabled: boolean;
  value?: Array<string>;
  onItemCheck(value: string): void;
  onItemUncheck(value: string): void;
  hasGroupHelperText: boolean;
};

// type ScopedProps<P> = P & { __scopeCheckboxGroup?: Scope };
// const [createBaseCheckboxGroupContext] = createContextScope(checkboxGroupName, [
//   createRovingFocusGroupScope,
//   createCheckboxScope,
// ]);
// const [createBaseCheckboxGroupContext, createBaseCheckboxGroupScope] =
//   createContextScope(checkboxGroupName);
const useRovingFocusGroupScope = createRovingFocusGroupScope();
// const useCheckboxScope = createCheckboxScope();
// const [BaseCheckboxGroupProvider, useBaseCheckboxGroupContext] =
//   createBaseCheckboxGroupContext<BaseCheckboxGroupContextValue>(checkboxGroupName);

type RovingFocusGroupProps = ComponentPropsWithoutRef<typeof RovingFocusGroup.Root>;

interface BaseCheckboxGroupProps extends ComponentPropsWithoutRef<'fieldset'> {
  name?: BaseCheckboxGroupContextValue['name'];
  required?: ComponentPropsWithoutRef<typeof RadixCheckbox.Root>['required'];
  disabled?: ComponentPropsWithoutRef<typeof RadixCheckbox.Root>['disabled'];
  dir?: RovingFocusGroupProps['dir'];
  orientation?: RovingFocusGroupProps['orientation'];
  loop?: RovingFocusGroupProps['loop'];
  defaultValue?: Array<string>;
  value?: BaseCheckboxGroupContextValue['value'];
  onValueChange?: (value: Array<string>) => void;
}

const StyledContentContainer = styled(Flex)({
  minWidth: 'fit-content',
  flexWrap: 'wrap',
  ':where([data-orientation="horizontal"] &)': {
    flexDirection: 'row',
  },
  ':where([data-orientation="vertical"] &)': {
    flexDirection: 'column',
  },
});

const BaseCheckboxGroup = React.forwardRef<ElementRef<'fieldset'>, BaseCheckboxGroupProps>(
  (props: BaseCheckboxGroupProps, ref) => {
    const {
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

    const scope = { [checkboxGroupName]: [CheckboxTileGroupContext] };
    // const checkboxScope = useCheckboxScope(scope);
    const rovingFocusGroupScope = useRovingFocusGroupScope(scope);
    // const direction = useDirection(dir);

    // With useControllableState, you can pass an initial state (using
    // defaultValue) implying the component is uncontrolled, or you can pass a
    // controlled value (using value) implying the component is controlled.
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

    // <BaseCheckboxGroupProvider
    //   scope={__scopeCheckboxGroup}
    const providerValue = {
      hasGroupHelperText: true,
      name: name,
      required: required,
      disabled: disabled,
      value: value,
      onItemCheck: handleItemCheck,
      onItemUncheck: handleItemUncheck,
    };

    return (
      <CheckboxTileGroupContext.Provider value={providerValue}>
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

              <StyledContentContainer width={contentWidth} gap={2}>
                {children}
              </StyledContentContainer>
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
      </CheckboxTileGroupContext.Provider>
    );
  }
);

BaseCheckboxGroup.displayName = checkboxGroupName;

const StyledCheckboxRoot = styled(RadixCheckbox.Root)({
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'top',
  flexShrink: 0,
  padding: 0,
  height: 24,
  width: 24,
  border: 'none',
  borderRadius: '50%',
  '--checkbox-color': colors.cyan1000,
  '--checkbox-color-disabled': colors.grey400,
  '--checkbox-background-color-unchecked': colorsCommon.brandWhite,
  '--checkbox-background-color-checked': colors.cyan500,
  '--checkbox-background-color-unchecked-disabled': colorsCommon.brandWhite,
  '--checkbox-background-color-checked-disabled': colors.grey150,
  '--checkbox-border-width': px(2),
  '--checkbox-border-color-unchecked': colors.grey500,
  '--checkbox-border-color-checked': colors.cyan500,
  '--checkbox-border-color-hover': colors.cyan500,
  '--checkbox-border-color-focus': colors.cyan500,
  '--checkbox-border-color-unchecked-disabled': colors.grey300,
  '--checkbox-border-color-checked-disabled': colors.grey150,
  '--checkbox-outline-color': 'transparent',
  '--checkbox-outline-color-focus': colors.cyan700,
  color: 'var(--checkbox-color)',
  backgroundColor: 'var(--checkbox-background-color)',
  outline: 'none',
  '&::before': {
    content: '""',
    display: 'block',
    height: 24,
    width: 24,
    borderRadius: px(3),
    backgroundColor: 'inherit',
    boxShadow: 'inset 0 0 0 var(--checkbox-border-width) var(--checkbox-border-color)',
    outline: `2px solid var(--checkbox-outline-color)`,
  },
  ':where([data-state="unchecked"])': {
    '--checkbox-background-color': 'var(--checkbox-background-color-unchecked)',
    '--checkbox-border-color': 'var(--checkbox-border-color-unchecked)',
    '--checkbox-border-color-disabled': 'var(--checkbox-border-color-unchecked-disabled)',
    '--checkbox-background-color-disabled': 'var(--checkbox-background-color-unchecked-disabled)',
  },
  ':where([data-state="checked"])': {
    '--checkbox-background-color': 'var(--checkbox-background-color-checked)',
    '--checkbox-border-color': 'var(--checkbox-border-color-checked)',
    '--checkbox-border-color-disabled': 'var(--checkbox-border-color-checked-disabled)',
    '--checkbox-background-color-disabled': 'var(--checkbox-background-color-checked-disabled)',
  },
  '@media (hover: hover)': {
    ':where(:hover:enabled)': {
      boxShadow: `0 0 0 8px ${colors.cyan75}`,
      '--checkbox-border-color': 'var(--checkbox-border-color-hover)',
    },
  },
  ':where([data-disabled],[data-disabled] &)': {
    '--checkbox-color': 'var(--checkbox-color-disabled)',
    '--checkbox-border-color': 'var(--checkbox-border-color-disabled)',
    '--checkbox-background-color': 'var(--checkbox-background-color-disabled)',
  },
});

const checkboxName = 'BaseCheckbox';

interface BaseCheckboxProps
  extends Omit<
    ComponentPropsWithoutRef<typeof RadixCheckbox.Root>,
    'checked' | 'defaultChecked' | 'onCheckedChange' | 'name'
  > {
  value: string;
}

const BaseCheckbox = React.forwardRef<ElementRef<typeof RadixCheckbox.Root>, BaseCheckboxProps>(
  (props: BaseCheckboxProps, ref) => {
    const { disabled, ...itemProps } = props;
    const context = React.useContext(CheckboxTileGroupContext);
    // const context = useBaseCheckboxGroupContext(checkboxName, __scopeCheckboxGroup);
    const isDisabled = context.disabled || disabled;
    const scope = { [checkboxName]: [CheckboxTileGroupContext] };
    const rovingFocusGroupScope = useRovingFocusGroupScope(scope);
    // console.log({ rovingFocusGroupScope });
    // const checkboxScope = useCheckboxScope(__scopeCheckboxGroup);
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
        <StyledCheckboxRoot
          name={context.name}
          disabled={isDisabled}
          required={context.required}
          checked={checked}
          // {...checkboxScope}
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

BaseCheckbox.displayName = checkboxName;

const checkboxIndicatorName = 'BaseCheckboxIndicator';

type CheckboxGroupIndicatorElement = React.ElementRef<typeof RadixCheckbox.Indicator>;
type CheckboxIndicatorProps = ComponentPropsWithoutRef<typeof RadixCheckbox.Indicator>;
interface CheckboxGroupIndicatorProps extends CheckboxIndicatorProps {}

const BaseCheckboxIndicator = React.forwardRef<
  CheckboxGroupIndicatorElement,
  CheckboxGroupIndicatorProps
>((props: CheckboxGroupIndicatorProps, forwardedRef) => {
  const { ...indicatorProps } = props;
  // const checkboxScope = useCheckboxScope(__scopeCheckboxGroup);
  return <RadixCheckbox.Indicator {...indicatorProps} ref={forwardedRef} />;
});

BaseCheckboxIndicator.displayName = checkboxIndicatorName;

export {
  // createBaseCheckboxGroupScope,
  BaseCheckboxGroup,
  BaseCheckboxIndicator,
  BaseCheckbox,
  // useBaseCheckboxGroupContext,
};
export type { BaseCheckboxGroupProps, BaseCheckboxProps, CheckboxGroupIndicatorProps };
