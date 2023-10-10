import { breakpoints } from '../tokens';

const unit = 'px';
const mq = (breakpoint: number) => `@media (min-width:${breakpoint}${unit})`;
export const mediaQueries = {
  mobile: mq(breakpoints.mobile),
  tablet: mq(breakpoints.tablet),
  desktop: mq(breakpoints.desktop),
  wide: mq(breakpoints.wide),
};
