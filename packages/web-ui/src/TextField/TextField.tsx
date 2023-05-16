import * as React from 'react';
import FilledInput, { FilledInputProps } from '@mui/material/FilledInput';
import SuccessOutlined from '@utilitywarehouse/customer-ui-react-icons/24x24/SuccessOutlined';
import WarningOutlined from '@utilitywarehouse/customer-ui-react-icons/24x24/WarningOutlined';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import { Box } from '../Box';
import { dataAttributes } from '../utils';
import type { ReactNode, AllHTMLAttributes } from 'react';
import { styled } from '../theme';
import { colors } from '@utilitywarehouse/colour-system';

const isSuccessStatus = (status?: string): boolean => status === 'success';
const isErrorStatus = (status?: string): boolean => status === 'error';

type FormElementProps = AllHTMLAttributes<HTMLFormElement>;

export interface TextFieldProps
  extends Omit<
    FilledInputProps,
    | 'color'
    | 'components'
    | 'componentsProps'
    | 'disableUnderline'
    | 'error'
    | 'fullWidth'
    | 'hiddenLabel'
    | 'id'
    | 'inputComponent'
    | 'inputProps'
    | 'inputRef'
    | 'margin'
    | 'ref'
    | 'slotProps'
    | 'slots'
  > {
  id: NonNullable<FormElementProps['id']>;
  // TODO: add guidelines regarding labels to docs - https://github.com/seek-oss/braid-design-system/pull/979
  // https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby
  'aria-label'?: NonNullable<FormElementProps['aria-label']>;
  'aria-labelledby'?: NonNullable<FormElementProps['aria-labelledby']>;
  status?: 'neutral' | 'success' | 'error';
  label?: ReactNode;
  labelId?: string;
  helperText?: ReactNode;
  multiline?: boolean;
}

const SuccessIcon = styled(SuccessOutlined)({ fill: colors.green600 });
const WarningIcon = styled(WarningOutlined)({ fill: colors.red600 });
const IconContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  marginLeft: theme.spacing(0.5),
}));

const TextFieldInput = React.forwardRef<HTMLInputElement, TextFieldProps>(function TextfieldInput(
  { status = 'neutral', endAdornment, ...props },
  ref
) {
  const showIcon = !props.disabled;
  const dataAttributeProps = {
    [`data-${dataAttributes.success}`]: !props.disabled && isSuccessStatus(status),
    [`data-${dataAttributes.multiline}`]: !!props.multiline,
  };

  return (
    <FilledInput
      inputRef={ref}
      endAdornment={
        <>
          {showIcon && isErrorStatus(status) ? (
            <IconContainer>
              <WarningIcon />
            </IconContainer>
          ) : isSuccessStatus(status) ? (
            <IconContainer>
              <SuccessIcon />
            </IconContainer>
          ) : null}
          {endAdornment ? <IconContainer>{endAdornment}</IconContainer> : null}
        </>
      }
      {...props}
      {...dataAttributeProps}
    />
  );
});

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(function Textfield(
  { label, labelId, helperText, ...props },
  ref
) {
  const { status = 'neutral', disabled } = props;
  const hasErrorStatus = !disabled && isErrorStatus(status);
  const formControlProps = { error: hasErrorStatus, disabled };
  const ariaDescribedBy = props['aria-describedby'] || `${props.id}-helper-text`;
  const ariaLabelledBy = !!label ? labelId : props['aria-labelledby'];

  return (
    <FormControl fullWidth={true} {...formControlProps}>
      {!!label ? (
        <InputLabel shrink id={labelId} htmlFor={props.id}>
          {label}
        </InputLabel>
      ) : null}

      <TextFieldInput
        ref={ref}
        {...props}
        aria-describedby={ariaDescribedBy}
        aria-labelledby={ariaLabelledBy}
        aria-label={props['aria-label']}
      />

      {helperText ? <FormHelperText id={ariaDescribedBy}>{helperText}</FormHelperText> : null}
    </FormControl>
  );
});
