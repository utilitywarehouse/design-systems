import { Ref, useContext, useCallback, useEffect } from 'react';
import { AccessibilityActionEvent } from 'react-native';

import CarouselContext from './Carousel.context';
import { CarouselRef } from './Carousel.props';

export interface UseCarouselAccessibilityProps {
  ref: Ref<CarouselRef> | null;
}

const clampToRange = (number: number, min: number, max: number) =>
  Math.min(Math.max(number, min), max);

export const useCarouselAccessibilityProps = ({ ref }: UseCarouselAccessibilityProps) => {
  const context = useContext(CarouselContext);
  const { activeIndex = 0, numItems = 0 } = context;

  useEffect(() => {
    if (!Object.keys(context).length) {
      console.warn(
        'useCarouselAccessibilityProps must used inside of a Carousel component. Accessibility props will not be applied.'
      );
    }
  }, [context]);

  const handleAccessibilityAction = useCallback(
    ({ nativeEvent }: AccessibilityActionEvent) => {
      const value = nativeEvent.actionName === 'increment' ? 1 : -1;
      const index = clampToRange(
        activeIndex + value,
        0,
        numItems ? numItems - 1 : 0
      );

      if (ref && typeof ref !== 'function' && ref?.current) {
        ref.current.scrollToIndex({ index });
      }
    },
    [activeIndex, numItems, ref]
  );

  if (!Object.keys(context).length) {
    return {};
  }

  return {
    accessibilityActions: [{ name: 'increment' }, { name: 'decrement' }],
    accessibilityLabel: 'Carousel',
    accessibilityRole: 'adjustable',
    accessible: true,
    onAccessibilityAction: handleAccessibilityAction,
  };
};

export default useCarouselAccessibilityProps;
