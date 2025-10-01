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

import { Box } from '../../';
import CarouselContext from './Carousel.context';
import { CarouselItemProps, CarouselItemsProps, CarouselRef } from './Carousel.props';

export const CarouselItems = forwardRef(function CarouselItems(
  {
    alignItems = 'flex-start',
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
  const containerStyles: ViewStyle = {
    paddingHorizontal: alignItems === 'center' ? innerMargin / 2 : 0,
  };
  const carouselStyles: ViewStyle = {
    overflow: showOverflow ? 'visible' : 'hidden',
  };
  const itemStyles: ViewStyle = {
    alignItems,
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
    <Box style={containerStyles}>
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
        contentContainerStyle={[itemStyles, style]}
        style={carouselStyles}
        viewabilityConfig={{ itemVisiblePercentThreshold: 51 }}
        {...props}
      />
    </Box>
  );
});

export default CarouselItems;
