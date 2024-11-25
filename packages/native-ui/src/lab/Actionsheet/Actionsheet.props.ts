import { DimensionValue } from 'react-native';
import type { SharedValue } from 'react-native-reanimated';

interface ActionsheetProps {
  isOpen: boolean;
  children: React.ReactNode;
  onClose?: () => void;
  onOpen?: () => void;
  showBackdrop?: boolean;
  closeOnBackdropPress?: boolean;
  showIndicator?: boolean;
  keyboardAvoiding?: boolean;
  minHeight?: DimensionValue;
  maxHeight?: DimensionValue;
  dragOnIndicatorOnly?: boolean;
  dragCloseThreshold?: number;
  includeContent?: boolean;
  includeDragIndicator?: boolean;
  contentSafeArea?: boolean;
}

export interface ActionsheetContextValue extends Omit<ActionsheetProps, 'children'> {
  translateY: SharedValue<number>;
  backdropOpacity: SharedValue<number>;
  keyboardHeight: SharedValue<number>;
  dragging: SharedValue<boolean>;
  dragCloseThreshold: number;
  maxHeight: DimensionValue;
  minHeight: DimensionValue;
  onClose: () => void;
}

export default ActionsheetProps;
