import { colors } from '@utilitywarehouse/colour-system';
import { styled } from '../theme';

/**
 * RadioInput is an internal component used in the RadioItem & RadioTile
 * components. It is not intended for public use.
 *
 * The RadioInput renders the HTML `input` element, but visually hiding it.
 * https://moderncss.dev/pure-css-custom-styled-radio-buttons/
 *
 * It then renders the internal filled circle shown when the radio is checked,
 * as well as the larger containing circle to support hover & focus styles.
 */
export const RadioInput = styled('input')(() => {
  return {
    // visually hidden styles
    appearance: 'none',
    backgroundColor: 'transparent',
    margin: 0,
    // radio styles
    cursor: 'pointer',
    outline: 'none',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: colors.cyan400,
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
      cursor: 'auto',
      color: colors.grey300,
    },
  };
});
