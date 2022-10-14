import { SystemProps as MuiSystemProps } from '@mui/system';
import { Theme } from '../theme';

export type SystemProps = keyof MuiSystemProps<Theme>;

export const neutralBackgroundColors = ['white', 'whiteOwl', 'lightTint'] as const;
export type NeutralBackgroundColor = typeof neutralBackgroundColors[number];
export const brandBackgroundColors = ['purple', 'midnight'] as const;
export type BrandBackgroundColor = typeof brandBackgroundColors[number];
export const backgroundColors = [...neutralBackgroundColors, ...brandBackgroundColors];
export type BackgroundColor = NeutralBackgroundColor | BrandBackgroundColor;
