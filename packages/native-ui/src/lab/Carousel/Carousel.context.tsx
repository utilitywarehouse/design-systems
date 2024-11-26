import { createContext, useContext } from 'react';
import { CarouselContextValue } from './Carousel.props';

const CarouselContext = createContext<CarouselContextValue>({} as CarouselContextValue);

export const useCarouselContext = () => useContext(CarouselContext);

export default CarouselContext;
