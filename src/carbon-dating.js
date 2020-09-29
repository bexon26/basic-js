const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if ((typeof sampleActivity === 'string') && (isNaN(parseInt(sampleActivity)) !== true) && parseFloat(sampleActivity, 10) <= 15 && parseFloat(sampleActivity, 10) > 0) {
    var age = Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity, 10)) / (0.693 / HALF_LIFE_PERIOD));
    return age;
  } else { return false }
};
