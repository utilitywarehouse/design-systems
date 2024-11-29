import {
  FlatList,
  FlatListProps,
  ListRenderItem,
  ListRenderItemInfo,
  StyleProp,
  ViewProps,
  ViewStyle,
} from 'react-native';

export interface CarouselRef extends FlatList {}

export interface CarouselContextValue {
  activeIndex: number;
  numItems: number;
}

export interface CarouselProps<T> extends Omit<
  FlatListProps<T>, 
  'accessibilityActions' |
  'accessibilityLabel' |
  'accessibilityRole' |
  'accessible' |
  'bounces' |
  'decelerationRate' |
  'getItemLayout' |
  'horizontal' |
  'pagingEnabled' |
  'onAccessibilityAction' |
  'onViewableItemsChanged' |
  'overScrollMode' |
  'showsHorizontalScrollIndicator' |
  'snapToInterval' |
  'snapToAlignment' |
  'viewabilityConfig'
> {
  inactiveItemOpacity?: number;
  itemStyle?: StyleProp<ViewStyle>;
  itemWidth?: number;
  onSnapToItem?: (index: number) => void;
  showOverflow?: boolean;
  width: number;
}

export interface CarouselItemProps<T> extends ListRenderItemInfo<T>, ViewProps {
  active: boolean;
  inactiveItemOpacity: number;
  index: number;
  item: T;
  renderItem?: ListRenderItem<T> | null;
  width: number;
}

export interface CarouselPaginationProps extends ViewProps {}

export interface CarouselPaginationItemProps extends ViewProps {
  active: boolean;
  index: number;
}
