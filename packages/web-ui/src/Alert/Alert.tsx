import * as React from 'react';
import { COLOR_SCHEME, PropsWithSx } from '../types';
import { AlertProps } from './Alert.props';
import { COLORSCHEME_SELECTORS, DATA_ATTRIBUTES, px, withGlobalPrefix } from '../utils';
import clsx from 'clsx';
import { styled } from '../theme';
import { colors } from '@utilitywarehouse/colour-system';
import {
  WarningMediumContainedIcon,
  InformationMediumContainedIcon,
  TickMediumContainedIcon,
  CloseMediumIcon,
  CloseSmallIcon,
  ChevronRightMediumIcon,
} from '@utilitywarehouse/react-icons';
import { AlertTitle } from './AlertTitle';
import { AlertText } from './AlertText';
import { AlertLink } from './AlertLink';
import { Flex } from '../Flex';
import { AlertButton } from './AlertButton';

const componentName = 'Alert';
const componentClassName = withGlobalPrefix(componentName);

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
  color: 'var(--alert-text-color)',
  [`:where([${DATA_ATTRIBUTES.orientation}="vertical"])`]: {
    '> button[data-dismiss]': {
      alignSelf: 'flex-start',
    },
  },
  '> :where(svg, [data-icon])': {
    color: 'var(--alert-icon-color)',
  },
  [COLORSCHEME_SELECTORS.cyan]: {
    '--alert-text-color': colors.cyan900,
    '--alert-background-color': colors.cyan50,
    '--alert-icon-color': colors.cyan700,
    '--alert-border-color': colors.cyan500,
  },
  [COLORSCHEME_SELECTORS.green]: {
    '--alert-text-color': colors.green900,
    '--alert-background-color': colors.green50,
    '--alert-icon-color': colors.green700,
    '--alert-border-color': colors.green500,
  },
  [COLORSCHEME_SELECTORS.gold]: {
    '--alert-text-color': colors.gold900,
    '--alert-background-color': colors.gold50,
    '--alert-icon-color': colors.gold700,
    '--alert-border-color': colors.gold500,
  },
  [COLORSCHEME_SELECTORS.red]: {
    '--alert-text-color': colors.red900,
    '--alert-background-color': colors.red50,
    '--alert-icon-color': colors.red700,
    '--alert-border-color': colors.red500,
  },
});

const AlertIcon = ({ colorScheme }: { colorScheme: AlertProps['colorScheme'] }) => {
  if (colorScheme === COLOR_SCHEME.cyan) {
    return <InformationMediumContainedIcon />;
  }
  if (colorScheme === COLOR_SCHEME.green) {
    return <TickMediumContainedIcon />;
  }
  return <WarningMediumContainedIcon />;
};

/**
 * An `Alert` is a component that provides feedback messages to users. Alerts
 * are dynamic content that is injected into the page when it changes and
 * should be used sparingly.
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
      colorScheme = COLOR_SCHEME.cyan,
      direction = 'column',
      children,
      onDismiss,
      title,
      text,
      linkText,
      linkHref,
      ...props
    },
    ref
  ) => {
    const dataAttributeProps = {
      [DATA_ATTRIBUTES.colorscheme]: colorScheme,
      [DATA_ATTRIBUTES.orientation]: direction === 'column' ? 'vertical' : 'horizontal',
    };
    return (
      <StyledElement
        ref={ref}
        className={clsx(componentClassName, className)}
        role="alert" // Adding role for dynamic alerts
        aria-live="assertive" // Making it announced immediately
        aria-atomic="true" // Ensuring the entire alert is read as a whole
        {...dataAttributeProps}
        {...props}
      >
        <AlertIcon colorScheme={colorScheme} />
        <Flex direction={direction} gap={1} flex={1}>
          {children ?? (
            <>
              {title ? <AlertTitle>{title}</AlertTitle> : null}
              {text ? <AlertText>{text}</AlertText> : null}
              {linkText && linkHref ? <AlertLink href={linkHref}>{linkText}</AlertLink> : null}
            </>
          )}
        </Flex>
        {linkHref && !linkText ? (
          <AlertButton asChild title="Alert action" aria-label="Alert action">
            <a href={linkHref}>
              <ChevronRightMediumIcon />
            </a>
          </AlertButton>
        ) : null}
        {onDismiss ? (
          <AlertButton data-dismiss onClick={onDismiss} title="Dismiss" aria-label="Dismiss alert">
            {direction === 'row' ? <CloseMediumIcon /> : <CloseSmallIcon />}
          </AlertButton>
        ) : null}
      </StyledElement>
    );
  }
);

Alert.displayName = componentName;
