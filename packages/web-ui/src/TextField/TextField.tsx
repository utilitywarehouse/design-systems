import * as React from 'react';
import FilledInput, { FilledInputProps } from '@mui/material/FilledInput';
import SuccessOutlined from '@utilitywarehouse/customer-ui-react-icons/24x24/SuccessOutlined';
import WarningOutlined from '@utilitywarehouse/customer-ui-react-icons/24x24/WarningOutlined';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import { Box } from '../Box';
import { dataAttributes, spacing } from '../utils';
import type { ReactNode, AllHTMLAttributes } from 'react';
import { styled } from '@mui/material';
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
  /**
   * The unique id used to properly label the `input` element.
   * @required
   */
  id: NonNullable<FormElementProps['id']>;
  'aria-label'?: NonNullable<FormElementProps['aria-label']>;
  'aria-labelledby'?: NonNullable<FormElementProps['aria-labelledby']>;
  /**
   * Sets the visual status of the Textfield.
   * @default 'neutral'
   */
  status?: 'neutral' | 'success' | 'error';
  /**
   * Sets the label for the TextField. If not used, please ensure you set
   * either `aria-label`, or `aria-labelledby` and `labelId`.
   */
  label?: ReactNode;
  /** The id passed to the label element. You should set this if using `aria-lebelledby`. */
  labelId?: string;
  /** Sets descriptive helper text. */
  helperText?: ReactNode;
  /** If true, a TextareaAutosize element is rendered. */
  multiline?: boolean;
}

const SuccessIcon = styled(SuccessOutlined)({ fill: colors.green600 });
const WarningIcon = styled(WarningOutlined)({ fill: colors.red600 });
const IconContainer = styled(Box)({ display: 'flex', marginLeft: spacing(0.5) });

const TextFieldInput = React.forwardRef<HTMLInputElement, TextFieldProps>(function TextfieldInput(
  {
    status = 'neutral',
    endAdornment,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    'aria-describedby': ariaDescribedBy,
    ...props
  },
  ref
) {
  const showIcon = !props.disabled;
  const inputProps = {
    'aria-labelledby': ariaLabelledBy,
    'aria-label': ariaLabel,
    'aria-describedby': ariaDescribedBy,
  };
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
      inputProps={inputProps}
      {...props}
      {...dataAttributeProps}
    />
  );
});

/**
 * TextField enables users to enter text into a UI. They typically appear in forms and dialogs.
 */
export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(function Textfield(
  { label, labelId, helperText, 'aria-label': ariaLabel, ...props },
  ref
) {
  const { status = 'neutral', disabled } = props;
  const hasErrorStatus = !disabled && isErrorStatus(status);
  const formControlProps = { error: hasErrorStatus, disabled };
  const ariaDescribedBy = !!helperText
    ? props['aria-describedby'] || `${props.id}-helper-text`
    : undefined;
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
        aria-label={ariaLabel}
      />

      {helperText ? <FormHelperText id={ariaDescribedBy}>{helperText}</FormHelperText> : null}
    </FormControl>
  );
});
