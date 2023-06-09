import { useMediaQuery } from '@mui/material';
import { useTheme } from '../theme';

export const useDeviceSize = (): {
  deviceSize: 'mobile' | 'tablet' | 'desktop' | 'wide';
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isWide: boolean;
} => {
  const theme = useTheme();
  const isWide = useMediaQuery(theme.breakpoints.up('wide'));
  const isDesktop = useMediaQuery(theme.breakpoints.between('desktop', 'wide'));
  const isTablet = useMediaQuery(theme.breakpoints.between('tablet', 'desktop'));
  const isMobile = useMediaQuery(theme.breakpoints.down('tablet'));

  const deviceSize = isWide ? 'wide' : isDesktop ? 'desktop' : isTablet ? 'tablet' : 'mobile';

  return { deviceSize, isMobile, isTablet, isDesktop, isWide };
};
