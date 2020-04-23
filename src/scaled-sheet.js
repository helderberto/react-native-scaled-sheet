import { Dimensions, StyleSheet, PixelRatio } from 'react-native';
import { isNumber, isNotFlex, hasFontProperty, hasProperty } from './utils';

const { width, height } = Dimensions.get('window');
const dimensions = width < height ? width : height;
const guideLineBaseWidth = 375;

export const scaleSize = (size) => PixelRatio.roundToNearestPixel((dimensions / guideLineBaseWidth) * size);

export const scaleFont = (size) => size * PixelRatio.getFontScale();

class ScaledSheet {
  static instanceStyleSheet = StyleSheet;

  static applyStyles(newStyles) {
    return this.instanceStyleSheet.create(newStyles);
  }

  static buildScaledStyles(styles) {
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

            if (isNumber(value) && isNotFlex(prop)) {
              scaledStyles[key][prop] = !hasFontProperty(prop) ? scaleSize(value) : scaleFont(value);
            }
          }
        }
      }
    }

    return scaledStyles;
  }

  static create(styles) {
    const scaledStyles = this.buildScaledStyles(styles);
    return this.applyStyles(scaledStyles);
  }
}

export default ScaledSheet;
