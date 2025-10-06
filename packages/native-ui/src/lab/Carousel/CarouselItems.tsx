import {
  Children,
  cloneElement,
  ForwardedRef,
  forwardRef,
  ReactElement,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from 'react';
import { FlatList, ViewStyle, ViewToken } from 'react-native';

import CarouselContext from './Carousel.context';
import { CarouselItemProps, CarouselItemsProps, CarouselRef } from './Carousel.props';

export const CarouselItems = forwardRef(function CarouselItems(
  {
    centered = false,
    children,
    enabled = true,
    inactiveItemOpacity = 1,
    itemWidth,
    onSnapToItem,
    showOverflow = false,
    style,
    width,
    ...props
  }: CarouselItemsProps,
  ref?: ForwardedRef<CarouselRef> | null
) {
  const {
    activeIndex = 0,
    setActiveIndex,
    setNumItems,
  } = useContext(CarouselContext);

  // Ensure children is always converted to an array
  const items: Array<ReactElement<CarouselItemProps>> = useMemo(
    () => Children.map(children, child => child) || [],
    [children]
  );
  
  const innerMargin: number = width - (itemWidth || width);
  const styles: ViewStyle = {
    marginHorizontal: centered ? innerMargin / 2 : 0,
    overflow: showOverflow ? 'visible' : 'hidden',
  };

  useEffect(() => {
    setNumItems((items || []).length);
  }, [items, setNumItems]);

  const handleViewableItemsChanged = useCallback(
    ({ viewableItems }: { viewableItems: Array<ViewToken> }) => {
      if (!viewableItems.length) {
        return;
      }

      const index = viewableItems[viewableItems.length - 1].index || 0;

      setActiveIndex?.(index);
      onSnapToItem?.(index);
    },
    [onSnapToItem, setActiveIndex]
  );

  return (
    <FlatList<ReactElement<CarouselItemProps>>
      bounces={false} // Prevents bouncing at the start and end of carousel scrolling (iOS only)
      data={items}
      decelerationRate="fast"
      getItemLayout={(_, index) => ({
        length: itemWidth || width,
        offset: (itemWidth || width) * index,
        index,
      })}
      horizontal
      initialScrollIndex={activeIndex}
      pagingEnabled
      onViewableItemsChanged={handleViewableItemsChanged}
      overScrollMode="never" // Prevents stretching of first and last items when reaching each end of the carousel (Android only)
      ref={ref}
      removeClippedSubviews={!showOverflow}
      renderItem={({ index, item }) =>
        cloneElement(item, {
          active: index === activeIndex,
          inactiveOpacity: inactiveItemOpacity,
          key: item?.key || item.props?.id || index,
          width: itemWidth || width,
        })
      }
      scrollEnabled={enabled}
      showsHorizontalScrollIndicator={false}
      snapToInterval={itemWidth || width}
      snapToAlignment="center"
      style={[styles, style]}
      viewabilityConfig={{ itemVisiblePercentThreshold: 51 }}
      {...props}
    />
  );
});

export default CarouselItems;
