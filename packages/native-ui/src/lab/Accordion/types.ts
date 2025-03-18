import { ReactNode } from 'react';
import { ViewProps, TextProps, PressableProps } from 'react-native';

export interface AccordionRootProps extends ViewProps {
  children?: ReactNode;
}

export interface AccordionItemProps extends ViewProps {
  children?: ReactNode;
  value: string;
}

export interface AccordionTriggerProps extends PressableProps {
  children: (props: { isExpanded: boolean }) => ReactNode;
}

export interface AccordionHeaderProps extends ViewProps {
  children?: ReactNode;
}

export interface AccordionTitleTextProps extends TextProps {
  children?: ReactNode;
}

export interface AccordionIconProps {
  as?: any;
  [key: string]: any;
}

export interface AccordionContentProps extends ViewProps {
  children?: ReactNode;
}

export interface AccordionContentTextProps extends TextProps {
  children?: ReactNode;
}

export interface AccordionContextType {
  expandedItems: string[];
  toggleItem: (value: string) => void;
  isItemExpanded: (value: string) => boolean;
}
