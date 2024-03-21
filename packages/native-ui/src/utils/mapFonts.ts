import { Platform } from 'react-native';
import mapFontWeight from './mapFontWeights';

function mapFonts(style: any) {
  if (Platform.OS !== 'web') {
    if (style.fontFamily.includes('Work Sans')) {
      style.fontFamily = 'WorkSans';
    }
    if (style.fontFamily.includes('Aeonik')) {
      style.fontFamily = 'Aeonik';
    }
    style.fontFamily =
      style.fontFamily +
      '-' +
      mapFontWeight(style.fontWeight) +
      (style.fontStyle === 'italic' ? 'Italic' : '');

    style.fontWeight = undefined;
    style.fontStyle = undefined;
  }
}

export default mapFonts;
