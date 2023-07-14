// TODO: These can be removed when the Background component is removed
export const neutralBackgroundColors = ['white', 'whiteOwl', 'lightTint'];
export type NeutralBackgroundColor = typeof neutralBackgroundColors[number];
export const inverseBackgroundColors = ['purple', 'midnight'];
export type InverseBackgroundColor = typeof inverseBackgroundColors[number];
export const backgroundColors = [...neutralBackgroundColors, ...inverseBackgroundColors];
export type BackgroundColor = NeutralBackgroundColor | InverseBackgroundColor;
