Object.defineProperty(exports,"__esModule",{value:true});exports.hasProperty=exports.hasFontProperty=exports.isNumber=exports.notFlexProperty=void 0;var notFlexProperty=function notFlexProperty(prop){return!prop.includes('flex');};exports.notFlexProperty=notFlexProperty;var isNumber=function isNumber(value){return typeof value==='number';};exports.isNumber=isNumber;var hasFontProperty=function hasFontProperty(prop){return prop.includes('font');};exports.hasFontProperty=hasFontProperty;var hasProperty=function hasProperty(obj,prop){return Object.prototype.hasOwnProperty.call(obj,prop);};exports.hasProperty=hasProperty;