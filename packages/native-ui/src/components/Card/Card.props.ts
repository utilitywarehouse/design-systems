import { ViewProps } from 'react-native';

interface CardProps extends ViewProps {
  variant?: 'dashed' | 'elevated' | 'outline' | 'filled';
  padding?: 'large' | 'medium' | 'small' | 'none';
  colorScheme?: 'base' | 'grey' | 'purple';
  surface?: 'base' | 'purple';
  nested?: boolean;
}

export default CardProps;
