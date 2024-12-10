import { ReactElement } from 'react';
import { FlatList, FlatListProps, ViewProps } from 'react-native';

export interface CarouselRef extends FlatList {}

export interface CarouselContextValue {
  activeIndex: number;
  numItems: number;
  setActiveIndex: (index: number) => void;
  setNumItems: (count: number) => void;
}

export interface CarouselItemProps extends ViewProps {
  active?: boolean;
  key?: string | number;
  inactiveOpacity?: number;
  width?: number;
}

export interface CarouselItemsProps extends Omit<
  FlatListProps<ReactElement<CarouselItemProps>>, 
  'accessibilityActions' |
  'accessibilityLabel' |
  'accessibilityRole' |
  'accessible' |
  'bounces' |
  'children' |
  'data' |
  'decelerationRate' |
  'getItemLayout' |
  'horizontal' |
  'pagingEnabled' |
  'onAccessibilityAction' |
  'onViewableItemsChanged' |
  'overScrollMode' |
  'renderItem' |
  'showsHorizontalScrollIndicator' |
  'snapToInterval' |
  'snapToAlignment' |
  'viewabilityConfig'
> {
  children?: ReactElement<CarouselItemProps> | Array<ReactElement<CarouselItemProps>>,
  enabled?: boolean;
  inactiveItemOpacity?: number;
  itemWidth?: number;
  onSnapToItem?: (index: number) => void;
  showOverflow?: boolean;
  width: number;
}

export interface CarouselProps extends ViewProps {
  activeIndex?: number;
}

export interface CarouselProviderProps {
  initialActiveIndex?: number;
}

export interface CarouselPaginationProps extends ViewProps {}

export interface CarouselPaginationItemProps extends ViewProps {
  active: boolean;
  index: number;
}
