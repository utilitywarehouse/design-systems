import React, {
  RefAttributes,
  ForwardedRef,
  forwardRef,
  ReactNode,
  Ref,
  useCallback,
  useState,
} from 'react';
import {
  FlatList,
  ListRenderItem,
  ViewStyle,
} from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { Box } from '../Box';
import { CarouselItem } from './CarouselItem';
import { CarouselProps, CarouselRef } from './Carousel.props';
import CarouselProvider from './CarouselProvider';

const stylesheet = createStyleSheet(() => ({
  root: {
    flexDirection: 'row',
  },
}));

// Provides corrects typings for renderItem prop items
function carouselForwardRef<T, P = {}>(
  render: (props: P, ref: Ref<T>) => ReactNode
): (props: P & RefAttributes<T>) => ReactNode {
  return forwardRef(render) as any;
}

export const Carousel = carouselForwardRef(function Carousel<T>(
  // The following props are set as the desired default carousel behaviour, but can be overwritten
  {
    bounces = false, // Prevents bouncing at the start and end of carousel scrolling (iOS only)
    children,
    data,
    decelerationRate = 'fast', // Sets the speed at which the carousel snaps an item into place
    inactiveItemOpacity = 1,
    itemStyle,
    itemWidth,
    onSnapToItem,
    overScrollMode = 'never', // Prevents stretching of first and last items when reaching each end of the carousel (Android only)
    removeClippedSubviews = false, // Prevents items outside of the carousl being removed from the tree
    renderItem,
    scrollEnabled = true, // Allows the carousel to be disabled
    showOverflow, // Enables items outside of the carousl to be visible
    style,
    width,
    ...props
  }: CarouselProps<T>,
  ref: ForwardedRef<CarouselRef>
) {
  const { styles } = useStyles(stylesheet);
  const [activeIndex, setActiveIndex] = useState(0);

  const hasData = (data || []).length > 1;
  const innerMargin = (width - (itemWidth || width)) / 2;
  const carouselStyles: ViewStyle = {
    marginHorizontal: innerMargin,
    overflow: showOverflow ? 'visible' : 'hidden',
    width,
  };

  const handleViewableItemsChanged = useCallback(({ viewableItems }: { viewableItems: any }) => {
    if (!viewableItems.length) {
      return;
    }

    const active = viewableItems[viewableItems.length - 1].index;

    setActiveIndex?.(active);
    onSnapToItem?.(active);
  }, []);

  return (
    <CarouselProvider activeIndex={activeIndex} numItems={data?.length || 0}>
      <Box style={styles.root}>
        <FlatList
          bounces={bounces}
          data={data}
          decelerationRate={decelerationRate}
          getItemLayout={(_, index) => ({
            length: itemWidth || width,
            offset: (itemWidth || width) * index,
            index,
          })}
          horizontal
          pagingEnabled
          onViewableItemsChanged={handleViewableItemsChanged}
          overScrollMode={overScrollMode}
          ref={ref}
          removeClippedSubviews={removeClippedSubviews}
          renderItem={({ index, ...more }) => (
            <CarouselItem<T>
              active={index === activeIndex}
              inactiveItemOpacity={inactiveItemOpacity}
              index={index}
              renderItem={renderItem}
              style={itemStyle}
              width={itemWidth || width}
              {...more}
            />
          )}
          scrollEnabled={scrollEnabled && hasData}
          showsHorizontalScrollIndicator={false}
          snapToInterval={itemWidth || width}
          snapToAlignment="center"
          style={[carouselStyles, style]}
          viewabilityConfig={{ itemVisiblePercentThreshold: 51 }}
          {...props}
        />
      </Box>
      <Box>{children}</Box>
    </CarouselProvider>
  );
});

export default Carousel;
