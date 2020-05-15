import { PixelRatio, Dimensions } from 'react-native';
import { hasProperty, notFlexProperty, isNumber, hasFontProperty } from './utils';

const { width, height } = Dimensions.get('window');

export const DEFAULT_GUIDE_LINE_BASE_WIDTH = 375;
export const DEFAULT_DIMENSIONS = width < height ? width : height;

export const scaleSize = (size, guideLineBaseWidth, dimensions) =>
  PixelRatio.roundToNearestPixel((dimensions / guideLineBaseWidth) * size);

export const scaleFont = (size) => size * PixelRatio.getFontScale();

export const scaleStyles = (styles, guideLineBaseWidth, dimensions) => {
  const scaledStyles = {};

  // eslint-disable-next-line no-restricted-syntax
  for (const key in styles) {
    if (hasProperty(styles, key)) {
      const style = styles[key];
      scaledStyles[key] = style;

      // eslint-disable-next-line no-restricted-syntax
      for (const prop in style) {
        if (hasProperty(style, prop)) {
          const value = style[prop];

          if (isNumber(value) && notFlexProperty(prop)) {
            scaledStyles[key][prop] = !hasFontProperty(prop)
              ? scaleSize(value, guideLineBaseWidth, dimensions)
              : scaleFont(value);
          }
        }
      }
    }
  }

  return scaledStyles;
};
