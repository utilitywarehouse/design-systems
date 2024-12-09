import React, { FC, PropsWithChildren, useState } from 'react';

import CarouselContext from './Carousel.context';
import { CarouselProviderProps } from './Carousel.props';

export const CarouselProvider: FC<PropsWithChildren<CarouselProviderProps>> = ({
  initialActiveIndex = 0,
  children,
}) => {
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);
  const [numItems, setNumItems] = useState(0);
  
  return (
    <CarouselContext.Provider
      value={{
        activeIndex,
        numItems,
        setActiveIndex,
        setNumItems,
      }}>
      {children}
    </CarouselContext.Provider>
  );
};

export default CarouselProvider;
