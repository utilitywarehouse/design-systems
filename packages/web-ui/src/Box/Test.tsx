import React from 'react';
import Box, { BoxProps } from './Box';

const Test: React.FC<BoxProps<'a'>> = ({ onClick, href, ...props }) => {
  const ref = React.useRef<HTMLButtonElement>(null);
  return <Box component="a" onClick={onClick} href={href} ref={ref} {...props} />;
};

export default Test;
