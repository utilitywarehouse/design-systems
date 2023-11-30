import * as React from 'react';
import { Item, type RadioGroupItemProps } from '@radix-ui/react-radio-group';
import { Label } from '../Label';
import { HelperText } from '../HelperText';
import { colors, colorsCommon } from '@utilitywarehouse/colour-system';
import { useIds } from '../hooks';
import { withGlobalPrefix, spacing } from '../utils';
import { PropsWithSx } from '../types';
import { StyledRadioIndicator } from '../Radio/Radio';
import { RadioGroupContext } from '../RadioGroup/RadioGroup.context';
import clsx from 'clsx';
import { RadioTileProps } from './RadioTile.props';
import { styled } from '../theme';
import { Flex } from '../Flex';

const componentName = 'Radio';
const componentClassName = withGlobalPrefix(componentName);

const StyledRadio = styled('div')({
  height: 24,
  width: 24,
  flexShrink: 0,
  backgroundColor: colorsCommon.brandWhite,
  borderRadius: '100%',
  border: '2px solid',
  borderColor: colors.grey500,
  ':where(:focus-visible)': {
    borderColor: colors.cyan500,
    boxShadow: `0 0 0 2px ${colors.cyan700}`,
  },
  ':where([data-state="checked"] &)': {
    borderColor: colors.cyan500,
  },
  [`:where([data-disabled] &)`]: {
    borderColor: colors.grey300,
  },
});

const StyledRadioItem = styled(Item)({
  all: 'unset',
  borderRadius: '8px',
  padding: spacing(2),
  display: 'flex',
  backgroundColor: colorsCommon.brandWhite,
  boxShadow: `inset 0 0 0 2px ${colors.grey400}`,
  ':where(:focus-visible)': {
    backgroundColor: colors.cyan100,
    boxShadow: `inset 0 0 0 2px ${colors.cyan500}`,
    outline: `4px solid ${colors.cyan700}`,
  },
  '@media (hover: hover)': {
    ':where(:hover:enabled)': {
      backgroundColor: colors.cyan75,
      boxShadow: `inset 0 0 0 2px ${colors.cyan500}`,
      [`& ${StyledRadio}`]: {
        borderColor: colors.cyan500,
      },
    },
  },
  ':where([data-disabled])': {
    boxShadow: `inset 0 0 0 2px ${colors.grey300}`,
  },
}) as React.FC<RadioGroupItemProps & React.RefAttributes<HTMLButtonElement>>;

/**
 * The `RadioTile` should be used within a `RadioGroup` component.
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
    const { hasGroupHelperText, 'aria-describedby': ariaDescribedby } =
      React.useContext(RadioGroupContext);
    const showHelperText = !hasGroupHelperText && !!helperText;
    const showLabel = !!label;

    return (
      <StyledRadioItem
        ref={ref}
        className={clsx(componentClassName, className)}
        {...props}
        id={id}
        disabled={disabled}
        aria-describedby={showHelperText ? helperTextId : ariaDescribedby}
        aria-labelledby={ariaLabelledby || !!label ? labelId : undefined}
      >
        <Flex component="label" gap={1}>
          <StyledRadio>
            <StyledRadioIndicator />
          </StyledRadio>
          {showLabel ? (
            <Flex direction="column" gap={0.5}>
              <Label component="span" id={labelId} htmlFor={id} nested>
                {label}
              </Label>
              {showHelperText ? <HelperText id={helperTextId}>{helperText}</HelperText> : null}
            </Flex>
          ) : null}
        </Flex>
      </StyledRadioItem>
    );
  }
);

RadioTile.displayName = componentName;
