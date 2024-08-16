export const getWidth = (size: 'xs' | 'sm' | 'md' | 'lg') => {
  switch (size) {
    case 'xs':
      return 14;
    case 'sm':
      return 20;
    case 'md':
      return 28;
    case 'lg':
      return 40;
    default:
      return 32;
  }
};

export const getStrokeWidth = (size: 'xs' | 'sm' | 'md' | 'lg') => {
  switch (size) {
    case 'xs':
      return 1.5;
    case 'sm':
      return 2;
    case 'md':
      return 2.5;
    case 'lg':
      return 3;
    default:
      return 2;
  }
};
