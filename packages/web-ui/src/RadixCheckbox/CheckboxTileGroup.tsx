import * as React from 'react';
import {
  BaseCheckboxIndicator,
  BaseCheckbox,
  BaseCheckboxGroup,
  createBaseCheckboxGroupScope,
  useBaseCheckboxGroupContext,
} from './BaseCheckboxGroup';
import type { BaseCheckboxGroupProps } from './BaseCheckboxGroup';
import { TickMediumIcon } from '@utilitywarehouse/react-icons';
import styled from '../theme/styled';
import { px, spacing } from '../utils';
import { colors } from '@utilitywarehouse/colour-system';
import { Flex } from '../Flex';
import { Label } from '../Label';
import { HelperText } from '../HelperText';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';
import type { Scope } from '@radix-ui/react-context';
import { CheckboxTileGroupContext } from './CheckboxTileGroup.context';

type ScopedProps<P> = P & { __scopeCheckboxCards?: Scope };
// const useCheckboxGroupScope = createBaseCheckboxGroupScope();

type CheckboxCardsRootElement = ElementRef<typeof BaseCheckboxGroup>;

interface CheckboxCardsRootProps
  extends Omit<BaseCheckboxGroupProps, 'asChild' | 'color' | 'defaultChecked'> {}

const CheckboxCardsRoot = React.forwardRef<CheckboxCardsRootElement, CheckboxCardsRootProps>(
  (props: ScopedProps<CheckboxCardsRootProps>, ref) => {
    const { __scopeCheckboxCards, ...rootProps } = props;
    // const checkboxGroupScope = useCheckboxGroupScope(__scopeCheckboxCards);
    return <BaseCheckboxGroup {...rootProps} ref={ref} />;
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
  ':where(:has(:focus-visible))': {
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

export const StyledIndicator = styled(BaseCheckboxIndicator)({
  position: 'absolute',
});

type CheckboxCardsItemElement = React.ElementRef<typeof BaseCheckbox>;
type CheckboxCardsItemProps = ComponentPropsWithoutRef<typeof BaseCheckbox>;

const CheckboxCardsItem = React.forwardRef<
  CheckboxCardsItemElement,
  ScopedProps<CheckboxCardsItemProps>
>(({ __scopeCheckboxCards, children, ...props }, forwardedRef) => {
  // const context = useCheckboxCardsContext('CheckboxCardsItem', __scopeCheckboxCards);
  // const checkboxGroupScope = useCheckboxGroupScope(__scopeCheckboxCards);
  // const context = useBaseCheckboxGroupContext('CheckboxCardsItem', undefined);
  const context = React.useContext(CheckboxTileGroupContext);
  console.log({ context });
  // console.log(__scopeCheckboxCards);
  const showLabel = true;
  const showHelperText = true;
  const labelId = 'labelId';
  const id = 'id';
  const label = children;
  const helperTextId = 'helperTextId';
  const helperText = 'Helper text';

  return (
    <StyledTile>
      <BaseCheckbox {...props} ref={forwardedRef}>
        <StyledIndicator>
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
