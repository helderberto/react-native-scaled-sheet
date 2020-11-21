import { PixelRatio } from 'react-native';

export const scaleSize = (size, baseWidth, dimensions) =>
  PixelRatio.roundToNearestPixel((dimensions / baseWidth) * size);
