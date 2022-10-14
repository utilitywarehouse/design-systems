import { type BackgroundColor, brandBackgroundColors } from '../types';

export const globalClassPrefix = 'uw-web-ui';

export const isBrandBackgroundColor = (backgroundColor: BackgroundColor): boolean => {
  return (brandBackgroundColors as ReadonlyArray<string>).includes(backgroundColor);
};
