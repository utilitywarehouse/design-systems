/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { ComponentPropsWithoutRef, ReactNode, forwardRef } from 'react';
import { Box, BoxProps } from '../Box';
import { Fieldset } from '../Fieldset';
import { FieldsetLegend } from '../FieldsetLegend';
import { HelperText } from '../HelperText';
import { PropsWithSx } from '../types';
import { useIds } from '../hooks';
import { styled } from '../theme';
import { Flex } from '../Flex';
import { createRovingFocusGroupScope } from '@radix-ui/react-roving-focus';
import { createCheckboxScope } from '@radix-ui/react-checkbox';
import { px, spacing, withGlobalPrefix } from '../utils';
import clsx from 'clsx';
import { TickMediumIcon } from '@utilitywarehouse/react-icons';
import { Label } from '../Label';
import { StyledIndicator, BaseCheckbox } from '../Checkbox/Checkbox';
import { colors } from '@utilitywarehouse/colour-system';
import type { Scope } from '@radix-ui/react-context';
import { createContextScope } from '@radix-ui/react-context';
import * as RovingFocusGroup from '@radix-ui/react-roving-focus';
import type { CheckboxProps as PrimitiveCheckboxProps } from '@radix-ui/react-checkbox';
import { useControllableState } from '@radix-ui/react-use-controllable-state';
import { useDirection } from '@radix-ui/react-direction';

const groupComponentName = 'CheckboxTileGroup';
const CHECKBOX_GROUP_NAME = 'CheckboxGroup';

type ScopedProps<P> = P & { __scopeCheckboxGroup?: Scope };
const [createCheckboxGroupContext, createCheckboxGroupScope] = createContextScope(
  CHECKBOX_GROUP_NAME,
  [createRovingFocusGroupScope, createCheckboxScope]
);
const useRovingFocusGroupScope = createRovingFocusGroupScope();
const useCheckboxScope = createCheckboxScope();
const useCheckboxGroupScope = createCheckboxGroupScope();

const [CheckboxGroupProvider, useCheckboxGroupContext] =
  createCheckboxGroupContext<CheckboxGroupContextValue>(CHECKBOX_GROUP_NAME);

type CheckboxGroupContextValue = {
  name?: string;
  required: boolean;
  disabled: boolean;
  value?: Array<string>;
  onItemCheck(value: string): void;
  onItemUncheck(value: string): void;
};

type RovingFocusGroupProps = ComponentPropsWithoutRef<typeof RovingFocusGroup.Root>;
export interface CheckboxCardProps extends PrimitiveCheckboxProps {
  /**
   * The label for the Checkbox. If not using please properly associate the
   * Radio with a label using the `aria-label` or `aria-labelledby` props.
   */
  label?: ReactNode;
  /** Helper text for the Checkbox. TODO: Will not display if the radio group has `helperText` set. */
  helperText?: ReactNode;
  dir?: RovingFocusGroupProps['dir'];
  orientation?: RovingFocusGroupProps['orientation'];
  loop?: RovingFocusGroupProps['loop'];
  value?: CheckboxGroupContextValue['value'];
}

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
  children: ReactNode;
  /** The direction of the radios, will also set the aria-orientation value. */
  direction?: 'column' | 'row';
  /**
   * Set the width of the RadioGroup children, separate to the width of the
   * entire RadioGroup.
   */
  contentWidth?: BoxProps['width'];
  /**
   * The label for the radio group. This should contain the question being
   * answered by the radio group.
   *
   * If you don't include a label you need to ensure you use the `aria-label`
   * or `aria-labelledby` prop to properly associate a label with the radio
   * group.
   */
  label?: ReactNode;
  /**
   * Helper text for the radio group. Provides a hint such as specific
   * requirements for what to choose. When displayed, child `Radio` or
   * `RadioTile` components will not display `helperText`.
   */
  helperText?: ReactNode;
  /**
   * Position of the helper text.
   * @default 'top'
   */
  helperTextPosition?: 'top' | 'bottom';
  /**
   * Set whether to display the helper text icon.
   */
  showHelperTextIcon?: boolean;
  /** Controls whether the error message is displayed. */
  error?: boolean;
  /** The error message to be displayed. */
  errorMessage?: ReactNode;
  /**
   * Set whether to display the error message icon.
   */
  showErrorMessageIcon?: boolean;
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

export const CheckboxCardGroup = forwardRef<
  HTMLFieldSetElement,
  ScopedProps<PropsWithSx<CheckboxGroupProps>>
>(
  (
    {
      __scopeCheckboxGroup,
      id: providedId,
      children,
      label,
      helperText,
      // helperTextPosition = 'top',
      showHelperTextIcon,
      error,
      errorMessage,
      showErrorMessageIcon,
      disabled,
      contentWidth = 'fit-content',
      // direction = 'column',
      dir,
      'aria-labelledby': ariaLabelledby,
      'aria-errormessage': ariaErrorMessage,
      name,
      defaultValue,
      value: valueProp,
      onValueChange,
      required,
      loop,
      ...props
    },
    ref
  ) => {
    const { id, labelId, helperTextId, errorMessageId } = useIds({
      providedId,
      componentPrefix: 'checkboxgroup',
    });
    const showErrorMessage = Boolean(error && errorMessage);
    // const dir = helperTextPosition === 'top' ? 'column' : 'column-reverse';

    const checkboxGroupScope = useCheckboxGroupScope(__scopeCheckboxGroup);
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeCheckboxGroup);
    const direction = useDirection(dir);
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

    return (
      <CheckboxGroupProvider
        scope={__scopeCheckboxGroup}
        name={name}
        required={required || false}
        disabled={disabled || false}
        value={value}
        onItemCheck={handleItemCheck}
        onItemUncheck={handleItemUncheck}
        {...checkboxGroupScope}
      >
        <RovingFocusGroup.Root
          asChild
          {...rovingFocusGroupScope}
          orientation={'vertical'}
          dir={direction}
          loop={loop}
        >
          <Fieldset
            ref={ref}
            {...props}
            disabled={disabled}
            id={id}
            data-disabled={disabled ? '' : undefined}
            // data-orientation={direction === 'column' ? 'vertical' : 'horizontal'}
            aria-errormessage={ariaErrorMessage || showErrorMessage ? errorMessageId : undefined}
            aria-labelledby={ariaLabelledby || !!label ? labelId : undefined}
            aria-invalid={showErrorMessage}
          >
            {label ? (
              <FieldsetLegend id={labelId} disabled={disabled}>
                {label}
              </FieldsetLegend>
            ) : null}
            <Box display="flex" gap={2} flexDirection="column">
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
                showIcon={showErrorMessageIcon}
                id={errorMessageId}
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

CheckboxCardGroup.displayName = groupComponentName;

const componentName = 'CheckboxCard';
const componentClassName = withGlobalPrefix(componentName);

const StyledTile = styled('label')({
  display: 'flex',
  gap: spacing(1),
  padding: spacing(2),
  borderRadius: px(8),
  '--checkbox-tile-border-width': px(2),
  '--checkbox-tile-box-shadow-color': colors.grey400,
  '--checkbox-tile-box-shadow-color-hover': colors.cyan500,
  '--checkbox-tile-box-shadow-color-focus': colors.cyan500,
  '--checkbox-tile-box-shadow-color-disabled': colors.grey300,
  boxShadow: 'inset 0 0 0 var(--checkbox-tile-border-width) var(--checkbox-tile-box-shadow-color)',
  ':where(:focus-visible)': {
    backgroundColor: colors.cyan75,
    outline: `4px solid ${colors.cyan700}`,
    '--checkbox-tile-box-shadow-color': 'var(--checkbox-tile-box-shadow-color-focus)',
    '& button::before': {
      boxShadow:
        'inset 0 0 0 var(--checkbox-tile-border-width) var(--checkbox-tile-box-shadow-color-focus)',
    },
  },
  '@media (hover: hover)': {
    ':where(:hover:enabled)': {
      backgroundColor: colors.cyan75,
      '--checkbox-tile-box-shadow-color': 'var(--checkbox-tile-box-shadow-color-hover)',
    },
  },
  ':where([data-disabled])': {
    '--checkbox-tile-box-shadow-color': 'var(--checkbox-tile-box-shadow-color-disabled)',
  },
});

const ITEM_NAME = 'CheckboxGroupItem';

type CheckboxProps = ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>;
interface CheckboxGroupItemProps
  extends Omit<CheckboxProps, 'checked' | 'defaultChecked' | 'onCheckedChange' | 'name'> {
  value: string;
  children: ReactNode;
  disabled?: boolean;
  /** The direction of the radios, will also set the aria-orientation value. */
  direction?: 'column' | 'row';
  /**
   * Set the width of the RadioGroup children, separate to the width of the
   * entire RadioGroup.
   */
  contentWidth?: BoxProps['width'];
  /**
   * The label for the radio group. This should contain the question being
   * answered by the radio group.
   *
   * If you don't include a label you need to ensure you use the `aria-label`
   * or `aria-labelledby` prop to properly associate a label with the radio
   * group.
   */
  label?: ReactNode;
  /**
   * Helper text for the radio group. Provides a hint such as specific
   * requirements for what to choose. When displayed, child `Radio` or
   * `RadioTile` components will not display `helperText`.
   */
  helperText?: ReactNode;
  /**
   * Position of the helper text.
   * @default 'top'
   */
  helperTextPosition?: 'top' | 'bottom';
  /**
   * Set whether to display the helper text icon.
   */
  showHelperTextIcon?: boolean;
  /** Controls whether the error message is displayed. */
  error?: boolean;
  /** The error message to be displayed. */
  errorMessage?: ReactNode;
  /**
   * Set whether to display the error message icon.
   */
  showErrorMessageIcon?: boolean;
}

/**
 * CheckboxTile
 */
export const CheckboxCard = React.forwardRef<
  HTMLButtonElement,
  ScopedProps<PropsWithSx<CheckboxGroupItemProps>>
>(
  (
    {
      __scopeCheckboxGroup,
      id: providedId,
      label,
      helperText,
      className,
      disabled,
      // children,
      ...props
    },
    ref
  ) => {
    const context = useCheckboxGroupContext(ITEM_NAME, __scopeCheckboxGroup);
    const isDisabled = context.disabled || disabled;
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeCheckboxGroup);
    const checkboxScope = useCheckboxScope(__scopeCheckboxGroup);
    const checked = context.value?.includes(props.value);
    const checkboxGroupScope = useCheckboxGroupScope(__scopeCheckboxGroup);

    const { id, labelId, helperTextId } = useIds({ providedId, componentPrefix: 'checkbox' });
    const showHelperText = !!helperText;
    const showLabel = !!label;
    return (
      <StyledTile data-disabled={disabled ? '' : undefined}>
        <RovingFocusGroup.Item
          asChild
          {...rovingFocusGroupScope}
          focusable={!isDisabled}
          active={checked}
        >
          <BaseCheckbox
            ref={ref}
            {...props}
            id={id}
            className={clsx(componentClassName, className)}
            // disabled={disabled}
            name={context.name}
            disabled={isDisabled}
            required={context.required}
            checked={checked}
            {...checkboxScope}
            {...checkboxGroupScope}
            onCheckedChange={checked => {
              if (checked) {
                context.onItemCheck(props.value);
              } else {
                context.onItemUncheck(props.value);
              }
            }}
          >
            <StyledIndicator {...checkboxScope}>
              <TickMediumIcon />
            </StyledIndicator>
          </BaseCheckbox>
        </RovingFocusGroup.Item>
        {showLabel ? (
          <Flex direction="column" gap={0.5}>
            <Label component="span" id={labelId} htmlFor={id} nested>
              {label}
            </Label>
            {showHelperText ? <HelperText id={helperTextId}>{helperText}</HelperText> : null}
          </Flex>
        ) : null}
      </StyledTile>
    );
  }
);

CheckboxCard.displayName = componentName;
