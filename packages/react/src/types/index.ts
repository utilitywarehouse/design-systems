import { SystemProps as MuiSystemProps } from '@mui/system';
import { Theme } from '../theme';

export type SystemProps = keyof MuiSystemProps<Theme>;

export const neutralBackgroundColors = ['white', 'whiteOwl', 'lightTint'] as const;
export type NeutralBackgroundColor = typeof neutralBackgroundColors[number];
export const inverseBackgroundColors = ['purple', 'midnight'] as const;
export type InverseBackgroundColor = typeof inverseBackgroundColors[number];
export const backgroundColors = [...neutralBackgroundColors, ...inverseBackgroundColors];
export type BackgroundColor = NeutralBackgroundColor | InverseBackgroundColor;
