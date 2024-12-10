import React, {
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
import { AccessibilityActionEvent, FlatList, ViewToken, ViewStyle } from 'react-native';

import { Box } from '../Box';
import CarouselContext from './Carousel.context';
import { CarouselItemProps, CarouselItemsProps, CarouselRef } from './Carousel.props';

const clampToRange = (number: number, min: number, max: number) =>
  Math.min(Math.max(number, min), max);

export const CarouselItems = forwardRef(function CarouselItems(
  {
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
  const { activeIndex = 0, setActiveIndex, setNumItems } = useContext(CarouselContext);

  // Ensure children is always converted to an array
  const items: Array<ReactElement<CarouselItemProps>> = useMemo(() => Children.map(children, child => child) || [], [children]);

  const innerMargin: number = (width - (itemWidth || width));
  const containerStyles: ViewStyle = {
    width,
  };
  const carouselStyles: ViewStyle = {
    marginHorizontal: innerMargin / 2,
    overflow: showOverflow ? 'visible' : 'hidden',
  };

  useEffect(() => {
    setNumItems((items || []).length);
  }, [items, setNumItems]);

  const handleViewableItemsChanged = useCallback(({ viewableItems }: { viewableItems: Array<ViewToken> }) => {
    if (!viewableItems.length) {
      return;
    }

    const index = viewableItems[viewableItems.length - 1].index || 0;

    setActiveIndex?.(index);
    onSnapToItem?.(index);
  }, [onSnapToItem, setActiveIndex]);

  const handleAccessibilityAction = ({ nativeEvent }: AccessibilityActionEvent) => {
    const value = nativeEvent.actionName === 'increment' ? 1 : -1;
    const index = clampToRange(activeIndex + value, 0, items && items.length ? items.length - 1 : 0);

    if (ref && typeof ref !== 'function' && ref?.current) {
      ref.current.scrollToIndex({ index });
    }
  };

  return (
    <Box style={[containerStyles, style]}>
      <FlatList<ReactElement<CarouselItemProps>>
        accessibilityActions={[{ name: 'increment' }, { name: 'decrement' }]}
        accessibilityLabel="Carousel"
        accessibilityRole="adjustable"
        accessible={true}
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
        onAccessibilityAction={handleAccessibilityAction}
        onViewableItemsChanged={handleViewableItemsChanged}
        overScrollMode="never" // Prevents stretching of first and last items when reaching each end of the carousel (Android only)
        ref={ref}
        removeClippedSubviews={!showOverflow}
        renderItem={({ index, item }) => cloneElement((item), {
          active: index === activeIndex,
          inactiveOpacity: inactiveItemOpacity,
          key: item?.key || item.props?.id || index,
          width: itemWidth || width,
        })}
        scrollEnabled={enabled}
        showsHorizontalScrollIndicator={false}
        snapToInterval={itemWidth || width}
        snapToAlignment="center"
        style={carouselStyles}
        viewabilityConfig={{ itemVisiblePercentThreshold: 51 }}
        {...props}
      />
    </Box>
  );
});

export default CarouselItems;
