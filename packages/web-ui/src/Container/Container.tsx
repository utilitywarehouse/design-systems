import { Box, BoxProps } from '../Box';
import { mediaQueries } from '../utils';

export const Container = ({ sx, ...props }: BoxProps) => {
  return (
    <Box
      boxSizing="border-box"
      display="block"
      width="100%"
      margin="0 auto"
      paddingX={2}
      maxWidth="1096px"
      sx={{
        ...sx,

        // [mediaQueries.tablet]: {
        //   paddingX: 4,
        //   maxWidth: '744px',
        // },
        // [mediaQueries.desktop]: {
        //   maxWidth: '1096px',
        // },
      }}
      {...props}
    />
  );
};

export default Container;
