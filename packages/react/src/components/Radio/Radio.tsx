import * as React from 'react';

import clsx from 'clsx';

import {
  Indicator as RadixRadioIndicator,
  Item as RadixRadioItem,
} from '@radix-ui/react-radio-group';

import type { RadioProps } from './Radio.props';

import { withGlobalPrefix } from '../../helpers/with-global-prefix';
import { Flex } from '../Flex/Flex';
import { Label } from '../Label/Label';
import { useIds } from '../../hooks/use-ids';
import { HelperText } from '../HelperText/HelperText';
import type { ElementRef } from 'react';
import { useFormFieldGroup } from '../FormFieldGroup/FormFieldGroup.context';

const componentName = 'Radio';
const componentClassName = withGlobalPrefix(componentName);

type RadioElement = ElementRef<'button'>;

/**
 * `Radio` can be used to choose between a set of more than two options.
 *
 * `Radio` should always be used with a `RadioGroup` or `RadioGridGroup` to
 * handle the state control and layout.
 *
 * `Radio` is, by default, appropriately labelled when using
 * the `label` prop, if you do not provide a label, you must specify an
 * `aria-label` or `aria-labelledby` for accessibility.
 *
 * > This component does not need to be wrapped in a `ThemeProvider` and can be used standalone with other component libraries.
 */
export const Radio = React.forwardRef<RadioElement, RadioProps>(
  (
    {
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
    const { hasGroupHelperText, 'aria-describedby': ariaDescribedby } = useFormFieldGroup();
    const showHelperText = !hasGroupHelperText && !!helperText;
    const showLabel = !!label;

    return (
      <Flex
        gap="8px"
        className={clsx(componentClassName, className)}
        data-disabled={disabled ? '' : undefined}
      >
        <Flex align="center" justify="center" className="uw-RadioContainer">
          <RadixRadioItem
            ref={ref}
            {...props}
            id={id}
            disabled={disabled}
            aria-describedby={showHelperText ? helperTextId : ariaDescribedby}
            aria-labelledby={ariaLabelledby || !!label ? labelId : undefined}
            className="uw-RadioItem"
          >
            <RadixRadioIndicator className="uw-RadioIndicator" />
          </RadixRadioItem>
        </Flex>
        {showLabel ? (
          <Flex direction="column" gap="4px">
            <Label id={labelId} htmlFor={id} nested disableUserSelect className="uw-RadioLabel">
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
    );
  }
);

Radio.displayName = componentName;
