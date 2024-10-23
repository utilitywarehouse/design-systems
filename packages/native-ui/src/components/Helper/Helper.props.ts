import type { ComponentType } from 'react';
import { ViewProps } from 'react-native';

export interface HelperBaseProps extends ViewProps {
  validationStatus?: 'valid' | 'invalid' | 'initial';
  showIcon?: boolean;
  disabled?: boolean;
}

interface HelperWithChildrenProps extends HelperBaseProps {
  children: React.ReactNode;
  icon?: never;
  text?: never;
}

interface HelperWithoutChildrenProps extends HelperBaseProps {
  children?: never;
  icon?: ComponentType;
  text?: string;
}

type HelperProps = HelperWithChildrenProps | HelperWithoutChildrenProps;

export default HelperProps;
