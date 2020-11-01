const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15; 
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
   let x = parseFloat(sampleActivity);
   if (typeof sampleActivity != 'string' || sampleActivity == '' || sampleActivity == undefined) {return false}
   if (isNaN(x) || x > MODERN_ACTIVITY || x <= 0) {return false};
   let y = 0.693 / HALF_LIFE_PERIOD;
   return Math.ceil(Math.log(MODERN_ACTIVITY / x) / y);
 };
