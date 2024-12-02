import * as React from 'react';

import clsx from 'clsx';
import type { ElementRef } from 'react';

import {
  Indicator as RadixRadioIndicator,
  Item as RadixRadioItem,
} from '@radix-ui/react-radio-group';

import { RadioTileProps } from './RadioTile.props';
import { withGlobalPrefix } from '../../helpers/with-global-prefix';
import { useIds } from '../../hooks/use-ids';
import { useFormFieldGroup } from '../FormFieldGroup/FormFieldGroup.context';
import { Flex } from '../Flex/Flex';
import { Label } from '../Label/Label';
import { HelperText } from '../HelperText/HelperText';

const componentName = 'RadioTile';
const componentClassName = withGlobalPrefix(componentName);

type RadioTileElement = ElementRef<'button'>;

/**
 * `RadioTile` can be used to choose between a set of more than two options.
 *
 * `RadioTile` should always be used with a `RadioGroup` or `RadioGridGroup` to
 * handle the state control and layout.
 *
 * `RadioTile` is, by default, appropriately labelled when using
 * the `label` prop, if you do not provide a label, you must specify an
 * `aria-label` or `aria-labelledby` for accessibility.
 */
export const RadioTile = React.forwardRef<RadioTileElement, RadioTileProps>(
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
      <RadixRadioItem
        ref={ref}
        className={clsx(componentClassName, className)}
        {...props}
        id={id}
        disabled={disabled}
        aria-describedby={showHelperText ? helperTextId : ariaDescribedby}
        aria-labelledby={ariaLabelledby || !!label ? labelId : undefined}
      >
        <Flex as="span" gap="8px">
          <div className="uwp-RadioTileRadio">
            <RadixRadioIndicator className="uwp-RadioIndicator" />
          </div>
          {showLabel ? (
            <Flex direction="column" gap="4px">
              <Label as="span" id={labelId} nested disableUserSelect>
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
      </RadixRadioItem>
    );
  }
);

RadioTile.displayName = componentName;
