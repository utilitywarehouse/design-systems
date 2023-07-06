import * as RadioGroup from '@radix-ui/react-radio-group';
import { Box } from '../Box';
import styled from '@emotion/styled';
import { colors, colorsCommon } from '@utilitywarehouse/colour-system';
import { keyframes } from '@mui/material';
import { Label } from '../Label';
import { FormHelperText } from '../FormHelperText';

const RadioItem = styled(RadioGroup.Item)({
  all: 'unset',
  cursor: 'pointer',
  height: 20,
  width: 20,
  backgroundColor: colorsCommon.brandWhite,
  borderRadius: '100%',
  border: '2px solid',
  borderColor: colors.grey500,
  '&:focus, &[data-state="checked"]': {
    borderColor: colors.cyan500,
  },
  '&:hover:enabled': {
    borderColor: colors.cyan500,
    boxShadow: `0 0 0 8px ${colors.cyan75}`,
  },
  '&[data-disabled]': {
    cursor: 'auto',
    borderColor: colors.grey300,
  },
});

const appear = keyframes({ from: { opacity: 0 }, to: { opacity: 1 } });
const disappear = keyframes({ from: { opacity: 1 }, to: { opacity: 0 } });

const RadioIndicator = styled(RadioGroup.Indicator)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  position: 'relative',
  animation: `${disappear.toString()} 120ms ease-in`,
  '&[data-state="checked"]': {
    animation: `${appear.toString()} 120ms ease-out`,
  },
  '&::after': {
    content: '""',
    display: 'block',
    width: 14,
    height: 14,
    borderRadius: '50%',
    backgroundColor: colors.cyan500,
  },
  '&[data-disabled]': {
    '&::after': {
      backgroundColor: colors.grey300,
    },
  },
});

/**
 * The `Radio` should be used within a `RadioGroup` component.
 */
export const Radix = () => {
  const isDisabled = false;
  const showHelperText = false;
  const l1 = 'One';
  const id1 = `uw-web-ui-${l1.toLowerCase()}`;
  const htid1 = `uw-web-ui-${l1.toLowerCase()}-helper-text`;
  const l2 = 'Two';
  const id2 = `uw-web-ui-${l2.toLowerCase()}`;
  const htid2 = `uw-web-ui-${l2.toLowerCase()}-helper-text`;
  const l3 = 'Three';
  const id3 = `uw-web-ui-${l3.toLowerCase()}`;
  const htid3 = `uw-web-ui-${l3.toLowerCase()}-helper-text`;
  return (
    <RadioGroup.Root defaultValue="1" aria-label="View density">
      <Box display="flex" alignItems="flex-start">
        <Box
          width={40}
          height={40}
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="relative"
          top={-8}
        >
          <RadioItem value="1" id={id1} disabled={isDisabled} aria-describedby={htid1}>
            <RadioIndicator />
          </RadioItem>
        </Box>
        <Box display="flex" flexDirection="column">
          <Box height={24} display="flex" alignItems="center">
            <Label htmlFor={id1} nested disabled={isDisabled}>
              {l1}
            </Label>
          </Box>
          {showHelperText ? (
            <FormHelperText id={htid1} disabled={isDisabled}>
              helper text
            </FormHelperText>
          ) : null}
        </Box>
      </Box>
      <Box display="flex" alignItems="flex-start">
        <Box
          width={40}
          height={40}
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="relative"
          top={-8}
        >
          <RadioItem value="2" id={id2} disabled={isDisabled} aria-describedby={htid2}>
            <RadioIndicator />
          </RadioItem>
        </Box>
        <Box display="flex" flexDirection="column">
          <Box height={24} display="flex" alignItems="center">
            <Label htmlFor={id2} nested disabled={isDisabled}>
              {l2}
            </Label>
          </Box>
          {showHelperText ? (
            <FormHelperText id={htid2} disabled={isDisabled}>
              helper text
            </FormHelperText>
          ) : null}
        </Box>
      </Box>
      <Box display="flex" alignItems="flex-start">
        <Box
          width={40}
          height={40}
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="relative"
          top={-8}
        >
          <RadioItem value="3" id={id3} disabled={isDisabled} aria-describedby={htid3}>
            <RadioIndicator />
          </RadioItem>
        </Box>
        <Box display="flex" flexDirection="column">
          <Box height={24} display="flex" alignItems="center">
            <Label htmlFor={id3} nested disabled={isDisabled}>
              {l3}
            </Label>
          </Box>
          {showHelperText ? (
            <FormHelperText id={htid3} disabled={isDisabled}>
              helper text
            </FormHelperText>
          ) : null}
        </Box>
      </Box>
    </RadioGroup.Root>
  );
};

Radix.displayName = 'Radix';
