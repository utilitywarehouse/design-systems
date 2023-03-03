import { forwardRef, useContext } from 'react';
import type { RefObject } from 'react';
import { colors } from '@utilitywarehouse/design-tokens';
import { styled } from '../theme';
import { Box } from '../Box';
import { useRadio } from 'react-aria';
import type { AriaRadioProps } from 'react-aria';
import { RadioContext } from './RadioGroup';

// type InputElementProps = AllHTMLAttributes<HTMLInputElement>;
// export interface RadioProps {
//   onChange: NonNullable<InputElementProps['onChange']>;
//   value?: InputElementProps['value'];
//   name?: InputElementProps['name'];
//   'aria-describedby'?: InputElementProps['aria-describedby'];
//   'aria-labelledby'?: InputElementProps['aria-labelledby'];
//   'aria-label'?: InputElementProps['aria-label'];
//   disabled?: InputElementProps['disabled'];
//   checked: NonNullable<InputElementProps['checked']>;
// }

const StyledRadio = styled('input')(() => {
  return {
    appearance: 'none',
    backgroundColor: 'transparent',
    margin: 0,
    padding: 1,
    cursor: 'pointer',
    outline: 'none',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    display: 'grid',
    placeContent: 'center',
    color: colors.cyan40,
    '&:before': {
      content: '""',
      width: 14,
      height: 14,
      borderRadius: '50%',
      transform: 'scale(0)',
      transition: 'transform 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
      boxShadow: `inset 1em 1em currentColor`,
    },
    '&:checked:before': {
      transform: 'scale(1)',
    },
    '&:disabled': {
      cursor: 'default',
      color: colors.codGray10,
    },
  };
});

export const RadioButton = forwardRef<HTMLInputElement, AriaRadioProps>(function Radio(props, ref) {
  let state = useContext(RadioContext);
  let { inputProps } = useRadio(props, state, ref as RefObject<HTMLInputElement>);
  const { checked, disabled } = inputProps;
  return (
    <Box
      component="span"
      sx={{
        position: 'relative',
        cursor: 'pointer',
        width: 40,
        height: 40,
        borderRadius: '50%',
        color: disabled ? colors.codGray10 : checked ? colors.cyan40 : colors.codGray20,
        '&:hover': {
          backgroundColor: disabled ? 'transparent' : colors.cyan10,
          color: disabled ? colors.codGray10 : colors.cyan30,
        },
        '&:focus-within': {
          backgroundColor: colors.cyan20,
          color: colors.cyan40,
          '&:hover': {
            backgroundColor: colors.cyan10,
            color: colors.cyan30,
          },
        },
      }}
    >
      <StyledRadio type="radio" name="radio" ref={ref} {...inputProps} />
      <Box
        component="span"
        sx={{
          position: 'absolute',
          top: 8,
          left: 8,
          backgroundColor: colors.white,
          height: 24,
          width: 24,
          border: '2px solid',
          borderColor: 'currentColor',
          borderRadius: '50%',
        }}
      />
    </Box>
  );
});
