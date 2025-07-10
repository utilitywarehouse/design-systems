import * as React from 'react';

import clsx from 'clsx';

import { Item } from '@radix-ui/react-radio-group';

import { colors, colorsCommon } from '@utilitywarehouse/colour-system';

import { RadioTileProps } from './RadioTile.props';

import { Flex } from '../Flex';
import { useFormFieldGroup } from '../FormFieldGroup';
import { HelperText } from '../HelperText';
import { Label } from '../Label';
import { StyledRadioIndicator } from '../Radio/Radio';

import { useIds } from '../../hooks';
import { styled } from '../../theme';
import { PropsWithSx } from '../../types';
import { px, spacing, withGlobalPrefix } from '../../utils';

const componentName = 'Radio';
const componentClassName = withGlobalPrefix(componentName);

const StyledRadio = styled('div')({
  height: 24,
  width: 24,
  flexShrink: 0,
  backgroundColor: colorsCommon.brandWhite,
  borderRadius: '100%',
  border: '2px solid',
  borderColor: 'var(--radio-border-color)',
  '--radio-border-color': colors.grey500,
  '--radio-border-color-focus': colors.cyan500,
  '--radio-border-color-checked': colors.cyan500,
  '--radio-border-color-disabled': colors.grey300,
  ':where(:focus-visible)': {
    '--radio-border-color': 'var(--radio-border-color-focus)',
    boxShadow: `0 0 0 2px ${colors.cyan700}`,
  },
  ':where([data-state="checked"] &)': {
    '--radio-border-color': 'var(--radio-border-color-checked)',
  },
  ':where([data-disabled] &)': {
    '--radio-border-color': 'var(--radio-border-color-disabled)',
  },
});

const StyledRadioItem = styled(Item)({
  all: 'unset',
  borderRadius: px(8),
  padding: spacing(2),
  display: 'flex',
  flex: 1,
  boxShadow: 'inset 0 0 0 2px var(--radio-item-box-shadow-color)',
  backgroundColor: 'var(--radio-item-background-color)',
  '--radio-item-background-color': colorsCommon.brandWhite,
  '--radio-item-background-color-focus': colors.cyan100,
  '--radio-item-background-color-hover': colors.cyan75,
  '--radio-item-box-shadow-color': colors.grey400,
  '--radio-item-box-shadow-color-focus': colors.cyan500,
  '--radio-item-box-shadow-color-hover': colors.cyan500,
  '--radio-item-box-shadow-color-disabled': colors.grey300,
  ':where(:focus-visible)': {
    '--radio-item-background-color': 'var(--radio-item-background-color-focus)',
    '--radio-item-box-shadow-color': 'var(--radio-item-box-shadow-color-focus)',
    outline: `4px solid ${colors.cyan700}`,
  },
  '@media (hover: hover)': {
    ':where(:hover:enabled)': {
      '--radio-item-background-color': 'var(--radio-item-background-color-hover)',
      '--radio-item-box-shadow-color': 'var(--radio-item-box-shadow-color-hover)',
      '& div:first-child': {
        borderColor: colors.cyan500,
      },
    },
  },
  ':where([data-disabled])': {
    '--radio-item-box-shadow-color': 'var(--radio-item-box-shadow-color-disabled)',
  },
  cursor: 'pointer',
  '*': { cursor: 'pointer' },
});

/**
 * `RadioTile` can be used to choose between a set of more than two options.
 *
 * `RadioTile` should always be used with a `RadioGroup` or `RadioGridGroup` to
 * handle the state control and layout.
 *
 * `RadioTile` is, by default, appropriately labelled when using
 * the `label` prop, if you do not provide a label, you must specify an
 * `aria-label` or `aria-labelledby` for accessibility.
 *
 * > This component does not need to be wrapped in a `ThemeProvider` and can be used standalone with other component libraries.
 */
export const RadioTile = React.forwardRef<HTMLButtonElement, PropsWithSx<RadioTileProps>>(
  (
    {
      id: providedId,
      label,
      helperText,
      disabled,
      'aria-labelledby': ariaLabelledby,
      className,
      ...props
    },
    ref
  ) => {
    const { id, labelId, helperTextId } = useIds({ providedId, componentPrefix: 'radiotile' });
    const { hasGroupHelperText, 'aria-describedby': ariaDescribedby } = useFormFieldGroup();
    const showHelperText = !hasGroupHelperText && !!helperText;
    const showLabel = !!label;

    return (
      /* @ts-expect-error - upgrade issue. TODO: Fix this */
      <StyledRadioItem
        ref={ref}
        className={clsx(componentClassName, className)}
        {...props}
        id={id}
        disabled={disabled}
        aria-describedby={showHelperText ? helperTextId : ariaDescribedby}
        aria-labelledby={ariaLabelledby || !!label ? labelId : undefined}
      >
        <Flex component="span" gap={1}>
          {/* @ts-expect-error - upgrade issue. TODO: Fix this */}
          <StyledRadio>
            <StyledRadioIndicator />
          </StyledRadio>
          {showLabel ? (
            <Flex direction="column" gap={0.5}>
              <Label component="span" id={labelId} htmlFor={id} nested disableUserSelect>
                {label}
              </Label>
              {showHelperText ? (
                <HelperText id={helperTextId} disableUserSelect>
                  {helperText}
                </HelperText>
              ) : null}
            </Flex>
          ) : null}
        </Flex>
      </StyledRadioItem>
    );
  }
);

RadioTile.displayName = componentName;
