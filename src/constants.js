import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const BASE_WIDTH = 375;
export const DIMENSIONS = width < height ? width : height;
