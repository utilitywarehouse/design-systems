import type { SharedValue } from 'react-native-reanimated';

interface ActionsheetProps {
  visible: boolean;
  children: React.ReactNode;
  onClose?: () => void;
  showBackdrop?: boolean;
  closeOnBackdropPress?: boolean;
  showIndicator?: boolean;
  keyboardAvoiding?: boolean;
  minHeight?: number;
  maxHeight?: number;
  dragOnIndicatorOnly?: boolean;
  dragCloseThreshold?: number;
  includeContent?: boolean;
  includeDragIndicator?: boolean;
}

export interface ActionsheetContextValue extends Omit<ActionsheetProps, 'children'> {
  translateY: SharedValue<number>;
  backdropOpacity: SharedValue<number>;
  keyboardHeight: SharedValue<number>;
  dragCloseThreshold: number;
  maxHeight: number;
  minHeight: number;
  onClose: () => void;
}

export default ActionsheetProps;
