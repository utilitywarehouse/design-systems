import * as React from 'react';

import clsx from 'clsx';

import {
  ChevronRightMediumIcon,
  CloseMediumIcon,
  InformationMediumContainedIcon,
  TickMediumContainedIcon,
  WarningMediumContainedIcon,
} from '@utilitywarehouse/react-icons';

import { AlertProps } from './Alert.props';
import { AlertLink } from './AlertLink';
import { AlertText } from './AlertText';
import { AlertTitle } from './AlertTitle';
import { withGlobalPrefix } from '../../helpers/with-global-prefix';
import { ElementRef } from 'react';
import { DATA_ATTRIBUTES } from '../../helpers/data-attributes';
import { Flex } from '../Flex/Flex';
import { IconButton } from '../IconButton/IconButton';

const componentName = 'Alert';
const componentClassName = withGlobalPrefix(componentName);

type AlertElement = ElementRef<'div'>;

/**
 * Provide feedback messages to users. Alerts are dynamic content that is
 * injected into the page when it changes and should be used sparingly.
 */
export const Alert = React.forwardRef<AlertElement, AlertProps>(
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
    const dataAttributeProps = {
      [DATA_ATTRIBUTES.colorscheme]: colorScheme,
      'data-direction': direction,
    };
    return (
      <Flex
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
          gap="100"
          style={{ flex: 1 }}
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
          <IconButton
            variant="ghost"
            colorScheme={colorScheme}
            asChild
            title="Alert action"
            label="Alert action"
          >
            <a href={linkHref}>
              <ChevronRightMediumIcon />
            </a>
          </IconButton>
        ) : null}
        {onClose ? (
          <IconButton
            variant="ghost"
            colorScheme={colorScheme}
            onClick={onClose}
            title="Close"
            label="Close alert"
          >
            <CloseMediumIcon />
          </IconButton>
        ) : null}
      </Flex>
    );
  }
);

Alert.displayName = componentName;
