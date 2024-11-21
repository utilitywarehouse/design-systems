import { StoryFn } from '@storybook/react';
import { createStyleSheet, ScrollView, Text, useStyles, VStack } from '@utilitywarehouse/native-ui';
import { Carousel, CarouselPagination } from '@utilitywarehouse/native-ui/lab';
import { useRef, useState } from 'react';
import { LayoutChangeEvent } from 'react-native';

import { VariantTitle } from '../../../docs/components';
import CarouselItemCard from './CarouselItemCard';
import { data } from './Carousel.constants';
import { CarouselItem } from './Carousel.props';

const stylesheet = createStyleSheet(({ space }) => ({
  carouselPaginataion: {
    marginTop: space[2],
  },
  scrollview: {
    overflow: 'visible',
  },
}));

export const CarouselVariants: StoryFn<{
  data: CarouselItem[]
}> = ({ data }) => {
  const [active, setActive] = useState(0);
  const [width, setWidth] = useState(0);
  const ref = useRef(null);
  const { styles } = useStyles(stylesheet);

  const handleLayout = ({ nativeEvent }: LayoutChangeEvent) => {
    setWidth(nativeEvent.layout.width);
  };
  
  return (
    <ScrollView style={styles.scrollview}>
      <VStack space="lg" onLayout={handleLayout}>
        <VariantTitle title="Default">
          <Carousel
            data={data}
            ref={ref}
            renderItem={({ item }) => <CarouselItemCard {...item} />}
            width={width}
          />
        </VariantTitle>
        <VariantTitle title="With pagination">
          <Carousel
            data={data}
            ref={ref}
            renderItem={({ item }) => <CarouselItemCard {...item} />}
            width={width}
          >
            <CarouselPagination style={styles.carouselPaginataion} />
          </Carousel>
        </VariantTitle>
        <VariantTitle title="With overflow">
          <Carousel
            data={data}
            ref={ref}
            renderItem={({ item }) => <CarouselItemCard {...item} />}
            showOverflow
            width={width}
          />
        </VariantTitle>
        <VariantTitle title="With inactive opacity">
          <Carousel
            data={data}
            inactiveItemOpacity={0.75}
            ref={ref}
            renderItem={({ item }) => <CarouselItemCard {...item} />}
            showOverflow
            style={{ alignSelf: 'center' }}
            width={width}
          />
        </VariantTitle>
        <VariantTitle title="With set item width">
          <Carousel
            data={data}
            ref={ref}
            renderItem={({ item }) => <CarouselItemCard {...item} />}
            showOverflow
            style={{ alignSelf: 'center' }}
            itemWidth={width - 100}
            width={width}
          />
        </VariantTitle>
        <VariantTitle title="With callback">
          <Carousel
            data={data}
            onSnapToItem={setActive}
            ref={ref}
            renderItem={({ item }) => <CarouselItemCard {...item} />}
            showOverflow
            style={{ alignSelf: 'center' }}
            width={width}
          />
          <Text>Active index: {active}</Text>
        </VariantTitle>
      </VStack>
    </ScrollView>
  );
};

CarouselVariants.args = {
  data,
};

export default CarouselVariants;
