const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (Object.prototype.toString.call(date) === '[object Date]') {
    switch (true) {
      case date.getMonth() >= 11 || date.getMonth() <= 1: return 'winter';
      case date.getMonth() >= 2 && date.getMonth() <= 4: return 'spring';
      case date.getMonth() >= 5 && date.getMonth() <= 7: return 'summer';
      case date.getMonth() >= 8 && date.getMonth() <= 10: return 'autumn';
    }
  } else {
    throw new Error('THROWN')
  }





};
