import type { ViewProps } from 'react-native';

interface BadgeProps extends ViewProps {
  colorScheme?: 'cyan' | 'green' | 'red' | 'gold' | 'grey';
  size?: 'small' | 'large';
  strong?: boolean;
  borderless?: boolean;
}

export default BadgeProps;
