import * as React from 'react';
import * as CheckboxGroupPrimitive from './checkbox-group.primitive';
import { createCheckboxGroupScope } from './checkbox-group.primitive';
import { TickMediumIcon } from '@utilitywarehouse/react-icons';
import type { Scope } from '@radix-ui/react-context';
import styled from '../theme/styled';
import { px, spacing } from '../utils';
import { colors, colorsCommon } from '@utilitywarehouse/colour-system';
import { Flex } from '../Flex';
import { Label } from '../Label';
import { HelperText } from '../HelperText';
import { ComponentPropsWithoutRef, ElementRef } from 'react';

type ScopedProps<P> = P & { __scopeCheckboxCards?: Scope };
const useCheckboxGroupScope = createCheckboxGroupScope();

type CheckboxCardsRootElement = ElementRef<typeof CheckboxGroupPrimitive.Root>;

interface CheckboxCardsRootProps
  extends Omit<typeof CheckboxGroupPrimitive.Root, 'asChild' | 'color' | 'defaultChecked'> {}

const CheckboxCardsRoot = React.forwardRef<CheckboxCardsRootElement, CheckboxCardsRootProps>(
  (props: ScopedProps<CheckboxCardsRootProps>, ref) => {
    const { __scopeCheckboxCards, ...rootProps } = props;
    const checkboxGroupScope = useCheckboxGroupScope(__scopeCheckboxCards);
    return <CheckboxGroupPrimitive.Root {...checkboxGroupScope} {...rootProps} ref={ref} />;
  }
);

CheckboxCardsRoot.displayName = 'CheckboxCards.Root';

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
  ':has(:focus-visible)': {
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

export const BaseCheckbox = styled(CheckboxGroupPrimitive.Item)({
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

export const StyledIndicator = styled(CheckboxGroupPrimitive.Indicator)({
  position: 'absolute',
});

type CheckboxCardsItemElement = React.ElementRef<typeof CheckboxGroupPrimitive.Item>;
type CheckboxCardsItemProps = ComponentPropsWithoutRef<typeof CheckboxGroupPrimitive.Item>;

const CheckboxCardsItem = React.forwardRef<
  CheckboxCardsItemElement,
  ScopedProps<CheckboxCardsItemProps>
>(({ __scopeCheckboxCards, children, ...props }, forwardedRef) => {
  // const context = useCheckboxCardsContext('CheckboxCardsItem', __scopeCheckboxCards);
  const checkboxGroupScope = useCheckboxGroupScope(__scopeCheckboxCards);
  const showLabel = true;
  const showHelperText = true;
  const labelId = 'labelId';
  const id = 'id';
  const label = children;
  const helperTextId = 'helperTextId';
  const helperText = 'Helper text';

  return (
    <StyledTile>
      <BaseCheckbox {...checkboxGroupScope} {...props} ref={forwardedRef}>
        <StyledIndicator {...checkboxGroupScope}>
          <TickMediumIcon />
        </StyledIndicator>
      </BaseCheckbox>
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
});
CheckboxCardsItem.displayName = 'CheckboxCards.Item';

export { CheckboxCardsRoot as Root, CheckboxCardsItem as Item };
export type { CheckboxCardsRootProps as RootProps, CheckboxCardsItemProps as ItemProps };
