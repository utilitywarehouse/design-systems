import React, {
  RefAttributes,
  ForwardedRef,
  forwardRef,
  ReactNode,
  Ref,
  useCallback,
  useState,
} from 'react';
import { AccessibilityActionEvent, FlatList, ListRenderItemInfo, ViewStyle } from 'react-native';
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
function carouselForwardRef<R, P = {}>(
  render: (props: P, ref: Ref<R>) => ReactNode
): (props: P & RefAttributes<R>) => ReactNode {
  return forwardRef(render) as any;
}

const clampToRange = (number: number, min: number, max: number) =>
  Math.max(min, Math.min(number, max));

export const Carousel = carouselForwardRef(function Carousel<P>(
  {
    children,
    data,
    inactiveItemOpacity = 1,
    itemStyle,
    itemWidth,
    onSnapToItem,
    removeClippedSubviews = false,
    renderItem,
    scrollEnabled = true,
    showOverflow = false,
    style,
    width,
    ...props
  }: CarouselProps<P>,
  ref?: ForwardedRef<CarouselRef> | null
) {
  const { styles } = useStyles(stylesheet);
  const [activeIndex, setActiveIndex] = useState(0);

  const hasData: boolean = (data || []).length > 1;
  const innerMargin: number = (width - (itemWidth || width)) / 2;
  const carouselStyles: ViewStyle = {
    marginHorizontal: innerMargin,
    overflow: showOverflow ? 'visible' : 'hidden',
    width,
  };

  const handleViewableItemsChanged = useCallback(({ viewableItems }: { viewableItems: ListRenderItemInfo<P>[] }) => {
    if (!viewableItems.length) {
      return;
    }

    const index = viewableItems[viewableItems.length - 1].index;

    setActiveIndex?.(index);
    onSnapToItem?.(index);
  }, []);

  const handleAccessibilityAction = ({ nativeEvent }: AccessibilityActionEvent) => {
    const value = nativeEvent.actionName === 'increment' ? 1 : -1;
    const index = clampToRange(activeIndex + value, 0, data && data.length ? data.length - 1 : 0);

    if (ref && typeof ref !== 'function' && ref?.current) {
      ref.current.scrollToIndex({ index });
    }
  };

  return (
    <CarouselProvider activeIndex={activeIndex} numItems={data?.length || 0}>
      <Box style={styles.root}>
        <FlatList
          accessibilityActions={[{ name: 'increment' }, { name: 'decrement' }]}
          accessibilityLabel="Carousel"
          accessibilityRole="adjustable"
          accessible={true}
          bounces={false} // Prevents bouncing at the start and end of carousel scrolling (iOS only)
          data={data}
          decelerationRate="fast"
          getItemLayout={(_, index) => ({
            length: itemWidth || width,
            offset: (itemWidth || width) * index,
            index,
          })}
          horizontal
          pagingEnabled
          onAccessibilityAction={handleAccessibilityAction}
          onViewableItemsChanged={handleViewableItemsChanged}
          overScrollMode="never" // Prevents stretching of first and last items when reaching each end of the carousel (Android only)
          ref={ref}
          removeClippedSubviews={removeClippedSubviews}
          renderItem={({ index, ...more }) => (
            <CarouselItem<P>
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
