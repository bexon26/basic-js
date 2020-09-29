const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  var repeatString = str;
  var separator = '+';
  var addition = '';
  var additionSeparator = ''
  var additionRepeatTimes = 1;

  if (options.addition !== undefined) {
    addition = options.addition;
  }
  if (options.separator) {
    separator = options.separator;
  }
  if (options.additionSeparator) {
    additionSeparator = options.additionSeparator;
  }
  if (options.additionRepeatTimes) {
    additionRepeatTimes = options.additionRepeatTimes;
  }
  var repeatedAddition = '';
  if (options.additionRepeatTimes) {
    for (var j = 0; j < options.additionRepeatTimes; j++) {
      if (j < options.additionRepeatTimes - 1) {
        repeatedAddition += addition + additionSeparator;
      } else { repeatedAddition += addition }
    };
  } else if (additionSeparator) {
    repeatedAddition = addition + additionSeparator;
  } else { repeatedAddition = addition }

  if (options.repeatTimes) {
    for (var i = 0; i < options.repeatTimes; i++) {
      if (i < options.repeatTimes - 1) {
        repeatString += repeatedAddition + separator + str;
      } else { repeatString += repeatedAddition; }
    }
  } else {
    repeatString += addition;
  }
  return repeatString;
};
