export const isNotFlex = (prop) => !prop.includes('flex');

export const isNumber = (value) => typeof value === 'number';

export const hasFontProperty = (prop) => prop.includes('font');

export const hasProperty = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
