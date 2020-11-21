import { PixelRatio } from 'react-native';

export const scaleFont = (size) => size * PixelRatio.getFontScale();
