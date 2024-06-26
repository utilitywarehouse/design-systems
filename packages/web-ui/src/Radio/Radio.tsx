import * as React from 'react';
import {
  type RadioGroupItemProps,
  Item,
  Indicator,
  RadioGroupIndicatorProps,
} from '@radix-ui/react-radio-group';
import { colors, colorsCommon } from '@utilitywarehouse/colour-system';
import { Label } from '../Label';
import { HelperText } from '../HelperText';
import { useIds } from '../hooks';
import { PropsWithSx } from '../types';
import { RadioProps } from './Radio.props';
import { styled } from '../theme';
import { withGlobalPrefix } from '../utils';
import clsx from 'clsx';
import { Flex } from '../Flex';
import { useBaseRadioGroup } from '../BaseRadioGroup';

const componentName = 'Radio';
const componentClassName = withGlobalPrefix(componentName);

const StyledFlex = styled(Flex)({
  cursor: 'pointer',
  '*': { cursor: 'pointer' },
});

const StyledRadioItem = styled(Item)({
  all: 'unset',
  height: 20,
  width: 20,
  backgroundColor: colorsCommon.brandWhite,
  borderRadius: '100%',
  border: '2px solid',
  borderColor: 'var(--radio-border-color)',
  '--radio-border-color-default': colors.grey500,
  '--radio-border-color-hover': colors.cyan500,
  '--radio-border-color-focus': colors.cyan500,
  '--radio-border-color-checked': colors.cyan500,
  '--radio-border-color-disabled': colors.grey300,
  '--radio-border-color': 'var(--radio-border-color-default)',
  ':where(:focus-visible)': {
    '--radio-border-color': 'var(--radio-border-color-focus)',
    outline: `2px solid ${colors.cyan700}`,
  },
  ':where([data-state="checked"])': {
    '--radio-border-color': 'var(--radio-border-color-checked)',
  },
  '@media (hover: hover)': {
    ':where(:hover:enabled)': {
      '--radio-border-color': 'var(--radio-border-color-hover)',
      boxShadow: `0 0 0 8px ${colors.cyan75}`,
    },
  },
  ':where([data-disabled])': {
    '--radio-border-color': 'var(--radio-border-color-disabled)',
  },
}) as React.FC<RadioGroupItemProps & React.RefAttributes<HTMLButtonElement>>;

export const StyledRadioIndicator = styled(Indicator)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  position: 'relative',
  '&::after': {
    content: '""',
    display: 'block',
    width: 14,
    height: 14,
    borderRadius: '50%',
    backgroundColor: colors.cyan500,
  },
  ':where([data-disabled])': {
    '&::after': {
      backgroundColor: colors.grey300,
    },
  },
}) as React.FC<RadioGroupIndicatorProps & React.RefAttributes<HTMLButtonElement>>;

const StyledRadioContainer = styled('div')({
  width: 40,
  height: 40,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: -8,
});

// we do this so that the gap between the checkbox & label is clickable
const StyledLabel = styled(Label)({
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    height: '100%',
    width: '100%',
    left: -8,
  },
});

/**
 * Radios can be used to choose between a set of more than two options.
 *
 * Radios should always be used with a `RadioGroup` or `RadioGridGroup` to
 * handle the state control and layout.
 *
 * > This component does not need to be wrapped in a `ThemeProvider` and can be used standalone with other component libraries.
 */
export const Radio = React.forwardRef<HTMLButtonElement, PropsWithSx<RadioProps>>(
  (
    {
      sx,
      id: providedId,
      label,
      helperText,
      disabled,
      className,
      'aria-labelledby': ariaLabelledby,
      ...props
    },
    ref
  ) => {
    const { id, labelId, helperTextId } = useIds({ providedId, componentPrefix: 'radio' });
    const { hasGroupHelperText, 'aria-describedby': ariaDescribedby } = useBaseRadioGroup();
    const showHelperText = !hasGroupHelperText && !!helperText;
    const showLabel = !!label;

    return (
      <StyledFlex
        gap={1}
        className={clsx(componentClassName, className)}
        sx={sx}
        data-disabled={disabled ? '' : undefined}
      >
        <StyledRadioContainer>
          <StyledRadioItem
            ref={ref}
            {...props}
            id={id}
            disabled={disabled}
            aria-describedby={showHelperText ? helperTextId : ariaDescribedby}
            aria-labelledby={ariaLabelledby || !!label ? labelId : undefined}
          >
            <StyledRadioIndicator />
          </StyledRadioItem>
        </StyledRadioContainer>
        {showLabel ? (
          <Flex direction="column" gap={0.5}>
            <StyledLabel id={labelId} htmlFor={id} nested disableUserSelect>
              {label}
            </StyledLabel>
            {showHelperText ? (
              <HelperText id={helperTextId} disableUserSelect>
                {helperText}
              </HelperText>
            ) : null}
          </Flex>
        ) : null}
      </StyledFlex>
    );
  }
);

Radio.displayName = componentName;
