// get the hexadecimal value for an opacity value, primarily for use with CSS colour hex values
// ie. to have the midnight colour with 10% opacity:
// backgroundColor: `${colors.midnight}${getHexOpacity(0.1)}`
export const getHexOpacity = (opacity: number): string => {
  if (opacity < 0 || opacity > 1) {
    throw new Error(
      `Value for opacity is out of bounds, opacity >= 0 and opacity <= 1; received ${opacity}`
    );
  }

  return Math.round(255 * opacity).toString(16);
};
