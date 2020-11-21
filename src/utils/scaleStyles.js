import { scaleSize, scaleFont, hasProperty, notFlexProperty, isNumber, hasFontProperty } from './index';

export const scaleStyles = (styles, baseWidth, dimensions) => {
  const scaledStyles = {};

  for (const key in styles) {
    if (hasProperty(styles, key)) {
      const style = styles[key];
      scaledStyles[key] = style;

      for (const prop in style) {
        if (hasProperty(style, prop)) {
          const value = style[prop];

          if (isNumber(value) && notFlexProperty(prop)) {
            scaledStyles[key][prop] = !hasFontProperty(prop)
              ? scaleSize(value, baseWidth, dimensions)
              : scaleFont(value);
          }
        }
      }
    }
  }

  return scaledStyles;
};
