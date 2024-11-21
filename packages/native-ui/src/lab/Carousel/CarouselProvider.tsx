import React, { FC, PropsWithChildren } from 'react';

import CarouselContext from './CarouselContext';
import { CarouselContextValue } from './Carousel.props';

export const CarouselProvider: FC<PropsWithChildren<CarouselContextValue>> = ({
  children,
  activeIndex,
  numItems,
}) => (
  <CarouselContext.Provider
    value={{
      activeIndex,
      numItems,
    }}>
    {children}
  </CarouselContext.Provider>
);

export default CarouselProvider;
