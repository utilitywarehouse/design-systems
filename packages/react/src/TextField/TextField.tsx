import React from 'react';
import FilledInput, { FilledInputProps } from '@mui/material/FilledInput';
import { colors } from '@utilitywarehouse/customer-ui-design-tokens';
import SuccessOutlined from '@utilitywarehouse/customer-ui-react-icons/24x24/SuccessOutlined';
import WarningOutlined from '@utilitywarehouse/customer-ui-react-icons/24x24/WarningOutlined';
import { styled } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Box from '../Box';
import { useBackground } from '../Background';
import { dataAttributes } from '../utils';
import type { ReactNode, AllHTMLAttributes } from 'react';

const PREFIX = `remove-TextField`;
export const textfieldClasses = {
  success: `${PREFIX}-success`,
  multiline: `${PREFIX}-multiline`,
};

const isSuccessStatus = (status?: string): boolean => status === 'success';
const isErrorStatus = (status?: string): boolean => status === 'error';

type FormElementProps = AllHTMLAttributes<HTMLFormElement>;
export interface TextFieldProps
  extends Omit<
    FilledInputProps,
    | 'ref'
    | 'hiddenLabel'
    | 'error'
    | 'color'
    | 'id'
    | 'components'
    | 'componentsProps'
    | 'disableUnderline'
    | 'inputComponent'
    | 'inputProps'
    | 'inputRef'
    | 'margin'
    | 'slots'
    | 'slotProps'
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

const SuccessIcon = styled(SuccessOutlined)({ fill: colors.jewel });
const WarningIcon = styled(WarningOutlined)({ fill: colors.maroonFlush });
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

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(function Textfield(
  { label, labelId, helperText, ...props },
  ref
) {
  const { status = 'neutral', disabled } = props;
  const hasErrorStatus = !disabled && isErrorStatus(status);
  const formControlProps = { error: hasErrorStatus, disabled };
  const { backgroundColor } = useBackground();

  // should only be used on white, light tint & cod grey backgrounds
  const validBackgroundColors = ['lightTint', 'whiteOwl', 'white'];
  if (!validBackgroundColors.includes(backgroundColor)) {
    console.warn(
      `Invalid background color for the TextField component. The TextField component should only be used on the following backdrop levels [${validBackgroundColors
        .map(l => `'${l}'`)
        .join(', ')}]`
    );
  }

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

export default TextField;
