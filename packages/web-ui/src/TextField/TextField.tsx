import * as React from 'react';
import FilledInput, { FilledInputProps } from '@mui/material/FilledInput';
import { TickMediumContainedIcon, WarningMediumContainedIcon } from '@utilitywarehouse/react-icons';
import FormControl from '@mui/material/FormControl';
import { Box } from '../Box';
import { Label } from '../Label';
import { HelperText } from '../HelperText';
import { colors, colorsCommon } from '@utilitywarehouse/colour-system';
import { fonts, fontWeights, transitions } from '../tokens';
import { classSelector, pxToRem, spacing, withGlobalPrefix } from '../utils';
import clsx from 'clsx';
import { styled } from '../theme';

const classNames: { [key: string]: string } = {
  success: withGlobalPrefix('status-success'),
  multiline: withGlobalPrefix('multiline'),
};

const classSelectors = {
  success: classSelector(classNames.success as string),
  multiline: classSelector(classNames.multiline as string),
};

function isSuccessStatus(status?: string): boolean {
  return status === 'success';
}
function isErrorStatus(status?: string): boolean {
  return status === 'error';
}

const StyledInput = styled(FilledInput)({
  fontFamily: fonts.secondary,
  fontSize: pxToRem(18),
  fontWeight: fontWeights.secondary.regular,
  height: 58,
  borderRadius: 0,
  borderTopLeftRadius: 16,
  borderTopRightRadius: 16,
  borderStyle: 'solid',
  paddingLeft: spacing(2),
  paddingRight: spacing(2),
  borderBottom: 0,
  color: colorsCommon.brandMidnight,
  backgroundColor: colorsCommon.brandWhite,
  borderColor: colors.grey100,
  borderBottomColor: colorsCommon.brandPrimaryPurple,
  borderWidth: 2,
  transition: `border ${transitions.duration}ms ${transitions.easingFunction}`,
  ':hover': {
    backgroundColor: colorsCommon.brandWhite,
    borderBottomColor: colors.cyan600,
    '&:not(.Mui-disabled):not(.Mui-error),': {
      '&:before': {
        borderWidth: 2,
        transition: `border ${transitions.duration}ms ${transitions.easingFunction}`,
        borderBottomColor: colors.cyan600,
      },
    },
  },
  '&:before': {
    borderColor: colorsCommon.brandPrimaryPurple,
    borderWidth: 2,
    transition: `border ${transitions.duration}ms ${transitions.easingFunction}`,
  },
  '&:after': {
    borderColor: colors.cyan600,
    borderWidth: 2,
    transition: `border ${transitions.duration}ms ${transitions.easingFunction}`,
  },
  '&.Mui-focused': {
    backgroundColor: colorsCommon.brandWhite,
    borderColor: colors.cyan600,
  },
  '&.Mui-disabled': {
    color: colorsCommon.brandMidnight,
    backgroundColor: colors.grey50,
    borderColor: colors.grey100,
    borderBottomColor: colors.grey600,
    transition: `all ${transitions.duration}ms ${transitions.easingFunction}`,
    '&:before': {
      borderColor: colors.grey600,
      borderBottomStyle: 'solid',
    },
    '&:after': {
      borderColor: colors.grey600,
    },
  },
  '&.Mui-error': {
    ':before': {
      borderBottomColor: colors.red600,
    },
    '&.Mui-focused': {
      borderColor: colors.red600,
    },
    '&:not(.Mui-disabled)': {
      '&:after': {
        borderColor: colors.red600,
      },
    },
  },
  [classSelectors.success]: {
    ':before': {
      borderBottomColor: colors.green600,
    },
    '&:after': {
      borderBottomColor: colors.green600,
    },
    ':hover': {
      '&:not(.Mui-disabled)': {
        '&:before': {
          borderColor: colors.green600,
        },
      },
    },
    '&.Mui-focused': {
      borderColor: colors.green600,
    },
    '&:not(.Mui-disabled)': {
      borderBottomColor: colors.green600,
    },
  },
  [classSelectors.multiline]: {
    // padding values differ slightly from non-multiline since a `textarea` is rendered rather than an `input`.
    paddingTop: 15,
    paddingBottom: 14,
    // height is overridden to allow the input to expand with any number of lines
    height: 'auto',
    minHeight: 58,
  },
  input: {
    padding: 0,
  },
});

type FormElementProps = React.AllHTMLAttributes<HTMLFormElement>;

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
  label?: React.ReactNode;
  /** The id passed to the label element. You should set this if using `aria-lebelledby`. */
  labelId?: string;
  /** Sets descriptive helper text. */
  helperText?: React.ReactNode;
  /** If true, a TextareaAutosize element is rendered. */
  multiline?: boolean;
}

const IconContainer = styled(Box)({ display: 'flex', marginLeft: spacing(0.5) });

const Input = React.forwardRef<HTMLInputElement, TextFieldProps>(function TextfieldInput(
  {
    status = 'neutral',
    endAdornment,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    'aria-describedby': ariaDescribedBy,
    className,
    ...props
  },
  ref
) {
  const showIcon = !props.disabled;
  const inputProps = {
    ...props.inputProps,
    'aria-labelledby': ariaLabelledBy,
    'aria-label': ariaLabel,
    'aria-describedby': ariaDescribedBy,
  };

  return (
    <StyledInput
      inputRef={ref}
      hiddenLabel
      endAdornment={
        <>
          {showIcon ? (
            <IconContainer>
              {isErrorStatus(status) ? (
                <WarningMediumContainedIcon color={colors.red600} />
              ) : isSuccessStatus(status) ? (
                <TickMediumContainedIcon color={colors.green600} />
              ) : null}
            </IconContainer>
          ) : null}
          {endAdornment ? <IconContainer>{endAdornment}</IconContainer> : null}
        </>
      }
      inputProps={inputProps}
      className={clsx(
        {
          [classNames.success as string]: !props.disabled && isSuccessStatus(status),
          [classNames.multiline as string]: !!props.multiline,
        },
        className
      )}
      {...props}
    />
  );
});

/**
 * TextField enables users to enter text into a UI. They typically appear in forms and dialogs.
 *
 * @deprecated
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
    <Box display="flex" flexDirection="column" gap={1}>
      {!!label ? (
        <Label id={labelId} htmlFor={props.id} disabled={disabled}>
          {label}
        </Label>
      ) : null}

      <FormControl fullWidth={true} {...formControlProps}>
        <Input
          ref={ref}
          {...props}
          aria-describedby={ariaDescribedBy}
          aria-labelledby={ariaLabelledBy}
          aria-label={ariaLabel}
        />
      </FormControl>

      <HelperText
        id={ariaDescribedBy}
        disabled={disabled}
        validationStatus={isErrorStatus(status) ? 'invalid' : undefined}
      >
        {helperText || '\u00A0'}
      </HelperText>
    </Box>
  );
});
