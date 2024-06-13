import * as React from 'react';
import * as RadixCheckbox from '@radix-ui/react-checkbox';
import * as RovingFocusGroup from '@radix-ui/react-roving-focus';
import { createRovingFocusGroupScope } from '@radix-ui/react-roving-focus';
import { useControllableState } from '@radix-ui/react-use-controllable-state';
import { Fieldset } from '../Fieldset';
import { FieldsetLegend } from '../FieldsetLegend';
import { HelperText } from '../HelperText';
import { Box } from '../Box';
import { styled } from '../theme';
import { Flex } from '../Flex';
import type { ComponentPropsWithoutRef, ElementRef, ReactNode } from 'react';
import { colors, colorsCommon } from '@utilitywarehouse/colour-system';
import { px } from '../utils';
import { TickMediumIcon } from '@utilitywarehouse/react-icons';
import { BaseCheckboxGroupContext } from './BaseCheckboxGroup.context';

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

const useRovingFocusGroupScope = createRovingFocusGroupScope();

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

    const scope = { [checkboxGroupName]: [BaseCheckboxGroupContext] };
    const rovingFocusGroupScope = useRovingFocusGroupScope(scope);

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
      <BaseCheckboxGroupContext.Provider value={providerValue}>
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
      </BaseCheckboxGroupContext.Provider>
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
  /**
   * The label for the Checkbox. If not using please properly associate the
   * Radio with a label using the `aria-label` or `aria-labelledby` props.
   */
  label?: ReactNode;
  /** Helper text for the Checkbox. TODO: Will not display if the radio group has `helperText` set. */
  helperText?: ReactNode;
}

export const StyledIndicator = styled(RadixCheckbox.Indicator)({
  position: 'absolute',
});

const BaseCheckbox = React.forwardRef<ElementRef<typeof RadixCheckbox.Root>, BaseCheckboxProps>(
  (props: BaseCheckboxProps, ref) => {
    const { disabled, ...itemProps } = props;
    const context = React.useContext(BaseCheckboxGroupContext);
    const isDisabled = context.disabled || disabled;
    const scope = { [checkboxName]: [BaseCheckboxGroupContext] };
    const rovingFocusGroupScope = useRovingFocusGroupScope(scope);
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
          {...itemProps}
          ref={ref}
          onCheckedChange={checked => {
            if (checked) {
              context.onItemCheck(props.value);
            } else {
              context.onItemUncheck(props.value);
            }
          }}
        >
          <StyledIndicator>
            <TickMediumIcon />
          </StyledIndicator>
        </StyledCheckboxRoot>
      </RovingFocusGroup.Item>
    );
  }
);

BaseCheckbox.displayName = checkboxName;

// const checkboxIndicatorName = 'BaseCheckboxIndicator';

// const BaseCheckboxIndicator = () => {
//   return (
//     <StyledIndicator>
//       <TickMediumIcon />
//     </StyledIndicator>
//   );
// };
//
// BaseCheckboxIndicator.displayName = checkboxIndicatorName;
const CheckboxGroup = BaseCheckboxGroup;

export { BaseCheckboxGroup, BaseCheckbox, CheckboxGroup };
export type { BaseCheckboxGroupProps, BaseCheckboxProps };
