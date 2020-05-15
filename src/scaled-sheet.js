import { StyleSheet } from 'react-native';
import { DEFAULT_GUIDE_LINE_BASE_WIDTH, DEFAULT_DIMENSIONS, scaleStyles } from './scale-utils';

class ScaledSheet {
  static instanceStyleSheet = StyleSheet;

  static guideLineBaseWidth = DEFAULT_GUIDE_LINE_BASE_WIDTH;

  static dimensions = DEFAULT_DIMENSIONS;

  static setLineBaseWidth = (newLineBaseWidth) => {
    if (newLineBaseWidth !== this.guideLineBaseWidth) {
      this.guideLineBaseWidth = newLineBaseWidth;
    }
  };

  static getLineBaseWidth = () => this.guideLineBaseWidth;

  static create(styles) {
    const scaledStyles = scaleStyles(styles, this.guideLineBaseWidth, this.dimensions);
    return this.instanceStyleSheet.create(scaledStyles);
  }
}

export default ScaledSheet;
