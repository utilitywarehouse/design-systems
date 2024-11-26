import * as React from 'react';

import { ChevronUpSmallIcon } from '@utilitywarehouse/react-icons';

import { Button } from '../components';

export const BackToTop = () => {
  const [visible, setVisible] = React.useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <Button
      size="small"
      onClick={scrollToTop}
      variant="ghost"
      sx={{
        display: visible ? 'flex' : 'none',
        position: 'fixed',
        right: 20,
        bottom: 40,
        zIndex: 1,
      }}
    >
      <ChevronUpSmallIcon />
      Back to top
    </Button>
  );
};
