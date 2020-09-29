const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  let results = [];

  if (Array.isArray(arr)) {
    if (arr.length === 0) {
      return arr
    }

    for (let i = 0; i < arr.length; i++) {
      switch (arr[i]) {

        case ("--discard-prev"):
          if ((i !== 0) && (arr[i - 2] !== "--discard-next")) {
            results.pop();
          };
          break;

        case ("--discard-next"):
          break;

        case ("--double-prev"):
          if (i !== 0 && (arr[i - 2] !== "--discard-next")) {
            results.push(arr[i - 1]); //правильно
          };
          break;

        case ("--double-next"):
          if (i !== (arr.length - 1)) {
            results.push(arr[i + 1])
          }
          break;

        default:
          if (arr[i - 1] !== "--discard-next") {
            results.push(arr[i])
          }
      }
    }
  } else {
    throw new Error("resolving wrong link");
  }

  return results

};

