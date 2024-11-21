import { Meta } from '@storybook/react';
import { Carousel } from '@utilitywarehouse/native-ui/lab';

import CarouselBasic from './Carousel';
import CarouselVariants from './Variants';

const CarouselMeta: Meta<typeof Carousel> = {
  title: 'Native UI / Components / Lab / Carousel',
  component: Carousel,
};

export default CarouselMeta;

export { CarouselBasic, CarouselVariants };
