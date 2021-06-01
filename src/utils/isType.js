function isType(type) {
  return (obj) => Object.toString.call(obj) === `[object ${type}]`;
}
export const isString = isType('String');
export const isNumber = isType('Number');

export const isObject = isType('Object');
export const isArray = Array.isArray || isType('Array');
export const isFunction = isType('Function');
export const isDate = isType('Date');

export const isUndefined = isType('Undefined');
export const isNull = isType('Null');
