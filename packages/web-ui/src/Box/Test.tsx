import React from 'react';
import Box, { BoxProps } from './Bax';

const Test: React.FC<BoxProps<'a'>> = ({ onClick, href, ...props }) => {
  const ref = React.useRef<HTMLAnchorElement>(null);

  return <Box component="a" href={href} ref={ref} {...props} />;
};

export default Test;
