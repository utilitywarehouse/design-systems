import * as React from 'react';

import clsx from 'clsx';

import { colors } from '@utilitywarehouse/colour-system';
import {
  ChevronRightMediumIcon,
  CloseMediumIcon,
  CloseSmallIcon,
  InformationMediumContainedIcon,
  TickMediumContainedIcon,
  WarningMediumContainedIcon,
} from '@utilitywarehouse/react-icons';

import { AlertProps } from './Alert.props';
import { AlertButton } from './AlertButton';
import { AlertLink } from './AlertLink';
import { AlertText } from './AlertText';
import { AlertTitle } from './AlertTitle';

import { Flex } from '../Flex';

import { COLORSCHEME_SELECTORS, DATA_ATTRIBUTES } from '../../helpers';
import { styled } from '../../theme';
import { PropsWithSx } from '../../types';
import { px, withGlobalPrefix } from '../../utils';

const componentName = 'Alert';
const componentClassName = withGlobalPrefix(componentName);

const StyledElement = styled(Flex)({
  borderRadius: px(8),
  borderWidth: px(1),
  borderStyle: 'solid',
  borderColor: 'var(--alert-border-color)',
  backgroundColor: 'var(--alert-background-color)',
  color: 'var(--alert-text-color)',
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

/**
 * Provide feedback messages to users. Alerts are dynamic content that is
 * injected into the page when it changes and should be used sparingly.
 */
export const Alert = React.forwardRef<
  React.ElementRef<'div'>,
  React.PropsWithChildren<PropsWithSx<AlertProps>>
>(
  (
    {
      className,
      colorScheme = 'cyan',
      direction = 'column',
      children,
      onClose,
      title,
      text,
      linkText,
      linkHref,
      ...props
    },
    ref
  ) => {
    const icons = {
      cyan: InformationMediumContainedIcon,
      green: TickMediumContainedIcon,
      gold: WarningMediumContainedIcon,
      red: WarningMediumContainedIcon,
    };
    const AlertIcon = icons[colorScheme];
    const dataAttributeProps = { [DATA_ATTRIBUTES.colorscheme]: colorScheme };
    return (
      <StyledElement
        gap={1}
        direction="row"
        padding={2}
        align={direction === 'row' ? 'center' : 'start'}
        ref={ref}
        className={clsx(componentClassName, className)}
        role="alert" // Adding role for dynamic alerts
        aria-live="assertive" // Making it announced immediately
        aria-atomic="true" // Ensuring the entire alert is read as a whole
        {...dataAttributeProps}
        {...props}
      >
        <AlertIcon />

        <Flex
          direction={direction}
          gap={1}
          flex={1}
          align={direction === 'row' ? 'center' : 'start'}
        >
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
        {onClose ? (
          <AlertButton onClick={onClose} title="Close" aria-label="Close alert">
            {direction === 'row' ? <CloseMediumIcon /> : <CloseSmallIcon />}
          </AlertButton>
        ) : null}
      </StyledElement>
    );
  }
);

Alert.displayName = componentName;
