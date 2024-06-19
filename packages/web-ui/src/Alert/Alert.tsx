import * as React from 'react';
import { PropsWithSx } from '../types';
import { AlertProps } from './Alert.props';
import {
  COLORSCHEME_SELECTORS,
  DATA_ATTRIBUTES,
  classSelector,
  px,
  withGlobalPrefix,
} from '../utils';
import clsx from 'clsx';
import { styled } from '../theme';
import { colors } from '@utilitywarehouse/colour-system';
import {
  WarningMediumContainedIcon,
  InformationMediumContainedIcon,
  TickMediumContainedIcon,
  CloseMediumIcon,
  CloseSmallIcon,
} from '@utilitywarehouse/react-icons';

const componentName = 'Alert';
const componentClassName = withGlobalPrefix(componentName);

const classNames = {
  direction: {
    row: withGlobalPrefix('direction-row'),
    column: withGlobalPrefix('direction-column'),
  },
  content: withGlobalPrefix('alert-content'),
  icon: withGlobalPrefix('alert-icon'),
};

const classSelectors = {
  direction: {
    row: classSelector(classNames.direction.row),
    column: classSelector(classNames.direction.column),
  },
  icon: classSelector(classNames.icon),
  content: classSelector(classNames.content),
};

const StyledElement = styled('div')({
  display: 'flex',
  gap: px(8),
  borderRadius: px(8),
  borderWidth: px(1),
  borderStyle: 'solid',
  borderColor: 'var(--alert-border-color)',
  flexDirection: 'row',
  padding: px(16),
  backgroundColor: 'var(--alert-background-color)',
  [`> ${classSelectors.content}`]: {
    display: 'flex',
    gap: px(8),
    flex: 1,
  },
  [classSelectors.direction.row]: {
    [`> ${classSelectors.content}`]: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  },
  [classSelectors.direction.column]: {
    [`> ${classSelectors.content}`]: {
      flexDirection: 'column',
    },
  },
  '> :where(svg, [data-icon])': {
    color: 'var(--alert-icon-color)',
  },
  '> :where(span)': {
    color: 'var(--alert-text-color)',
  },
  '> :where(a)': {
    color: 'var(--alert-link-color)',
  },
  '> :where(button)[data-dismiss]': {
    alignSelf: 'flex-start',
    color: 'var(--alert-icon-color)',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
  },
  [COLORSCHEME_SELECTORS.info]: {
    '--alert-background-color': colors.cyan50,
    '--alert-icon-color': colors.cyan700,
    '--alert-border-color': colors.cyan500,
    '--alert-text-color': colors.cyan900,
    '--alert-link-color': colors.cyan700,
  },
  [COLORSCHEME_SELECTORS.success]: {
    '--alert-background-color': colors.green50,
    '--alert-icon-color': colors.green700,
    '--alert-border-color': colors.green500,
    '--alert-text-color': colors.green900,
    '--alert-link-color': colors.green700,
  },
  [COLORSCHEME_SELECTORS.warning]: {
    '--alert-background-color': colors.gold50,
    '--alert-icon-color': colors.gold700,
    '--alert-border-color': colors.gold500,
    '--alert-text-color': colors.gold900,
    '--alert-link-color': colors.gold700,
  },
  [COLORSCHEME_SELECTORS.error]: {
    '--alert-background-color': colors.red50,
    '--alert-icon-color': colors.red700,
    '--alert-border-color': colors.red500,
    '--alert-text-color': colors.red900,
    '--alert-link-color': colors.red700,
  },
});

const AlertIcon = ({ colorScheme }) => {
  if (colorScheme === 'info') {
    return <InformationMediumContainedIcon />;
  }
  if (colorScheme === 'success') {
    return <TickMediumContainedIcon />;
  }
  return <WarningMediumContainedIcon />;
};

/**
 * An `Alert` is a component that provides feedback messages to users.
 *
 * > This component does not need to be wrapped in a `ThemeProvider` and can be used standalone with other component libraries.
 */
export const Alert = React.forwardRef<
  React.ElementRef<'div'>,
  React.PropsWithChildren<PropsWithSx<AlertProps>>
>(
  (
    {
      className,
      colorScheme = 'info',
      direction = 'column',
      children,
      dismissible,
      onDismiss,
      ...props
    },
    ref
  ) => {
    const dataAttributeProps = {
      [DATA_ATTRIBUTES.colorscheme]: colorScheme,
    };
    return (
      <StyledElement
        ref={ref}
        className={clsx(componentClassName, className, classNames.direction[direction])}
        {...dataAttributeProps}
        {...props}
      >
        <AlertIcon colorScheme={colorScheme} />
        <div className={classNames.content}>{children}</div>
        {dismissible && (
          <button data-dismiss onClick={onDismiss}>
            {direction === 'row' ? <CloseMediumIcon /> : <CloseSmallIcon />}
          </button>
        )}
      </StyledElement>
    );
  }
);

Alert.displayName = componentName;
