import { Box, styled } from '@gluestack-ui/themed';
import React, { PropsWithChildren } from 'react';

import { AnimatePresence, AnimatedView } from '@gluestack-style/animation-resolver';

const AnimatedCircle = styled(AnimatedView, {
  position: 'absolute',
  top: -8,
  left: -8,
  borderRadius: 20,
  zIndex: -1,
  width: 40,
  height: 40,
  transformOrigin: 'center',
  bg: '$cyan50',
  _dark: {
    bg: '$darkCyan300',
  },
  ':initial': {
    opacity: 0.4,
    scale: 0.1,
  },
  ':animate': {
    opacity: 1,
    scale: 1,
  },
  ':exit': {
    opacity: 0,
    scale: 0.1,
  },
});

interface Props {
  show: boolean;
}

const AnimatedOutline: React.FC<PropsWithChildren<Props>> = ({ children, show }) => (
  <Box position="relative">
    {children}
    <AnimatePresence>{show ? <AnimatedCircle /> : null}</AnimatePresence>
  </Box>
);

export default AnimatedOutline;
