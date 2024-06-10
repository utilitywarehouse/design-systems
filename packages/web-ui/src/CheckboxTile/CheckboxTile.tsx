import * as React from 'react';
import { px, spacing, withGlobalPrefix } from '../utils';
import clsx from 'clsx';
import { CheckboxTileProps } from './CheckboxTile.props';
import { TickMediumIcon } from '@utilitywarehouse/react-icons';
import { styled } from '../theme';
import { PropsWithSx } from '../types';
import { useIds } from '../hooks';
import { Flex } from '../Flex';
import { Label } from '../Label';
import { HelperText } from '../HelperText';
import { StyledIndicator, BaseCheckbox } from '../Checkbox/Checkbox';
import { colors } from '@utilitywarehouse/colour-system';

const componentName = 'CheckboxTile';
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
  width: 'fit-content', //TODO: just for now
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

/**
 * CheckboxTile
 */
export const CheckboxTile = React.forwardRef<HTMLButtonElement, PropsWithSx<CheckboxTileProps>>(
  ({ id: providedId, label, helperText, className, disabled, ...props }, ref) => {
    const { id, labelId, helperTextId } = useIds({ providedId, componentPrefix: 'checkbox' });
    const showHelperText = !!helperText;
    const showLabel = !!label;
    return (
      <StyledTile data-disabled={disabled ? '' : undefined}>
        <BaseCheckbox
          ref={ref}
          {...props}
          id={id}
          className={clsx(componentClassName, className)}
          disabled={disabled}
        >
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
  }
);

CheckboxTile.displayName = componentName;
