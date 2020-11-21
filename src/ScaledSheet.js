import { StyleSheet } from 'react-native';

import { BASE_WIDTH, DIMENSIONS } from './constants';
import { scaleStyles } from './utils/scaleStyles';

export default class ScaledSheet {
  static instanceStyleSheet = StyleSheet;

  static guideLineBaseWidth = BASE_WIDTH;

  static dimensions = DIMENSIONS;

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
