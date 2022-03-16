import { Dimensions, Platform } from 'react-native';

const { width } = Dimensions.get('window');

export const FONT_REGULAR = {
  fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
};
export const FONT_BOLD = {
  fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
  fontWeight: 'bold',
};
export const FONT_H_REGULAR = {
  fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
};
export const FONT_H_BOLD = {
  fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
  fontWeight: 'bold',
};

const BASE_SIZE = 0.5;
export const FONT_SIZE_SMALL = `${BASE_SIZE}rem`;
export const FONT_SIZE_X_MEDIUM = `${BASE_SIZE * 1.15}rem`;
export const FONT_SIZE_MEDIUM = `${BASE_SIZE * 1.25}rem`;
export const FONT_SIZE_REGULAR = `${BASE_SIZE * 1.5}rem`;
export const FONT_SIZE_LARGE = `${BASE_SIZE * 1.75}rem`;
export const FONT_SIZE_EXTRA_LARGE = `${BASE_SIZE * 2}rem`;
export const FONT_SIZE_EXTRA_LARGE_2 = `${BASE_SIZE * 2.25}rem`;
export const FONT_SIZE_X_EXTRA_LARGE = `${BASE_SIZE * 3}rem`;
export const FONT_SIZE_XX_EXTRA_LARGE = `${BASE_SIZE * 3.5}rem`;

const W_DIMENSION = width;
const FULL_SIZE = 24;

const w2 = { width: W_DIMENSION / (FULL_SIZE / 2) };
export const RESPONSIVE_LAYOUT = {
  WIDTHs: {},
};

for (let i = 0; i < FULL_SIZE; i++) {
  RESPONSIVE_LAYOUT.WIDTHs[`w${i + 1}`] = {
    width: W_DIMENSION / (FULL_SIZE / ((24 + (i + 1)) % 24)),
  };
}
