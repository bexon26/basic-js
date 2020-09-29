const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(reverse = true) {
    this.reverse = reverse;
  }


  encrypt(string, key) {
    const arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let stringKeyWords = '';

    let coutLetter = 0;

    for (let i = 0; i < string.length; i++) {

      if (arr_en.indexOf(string[i].toLowerCase()) == '-1') {
        stringKeyWords += string[i];
        coutLetter--;
      } else {
        if (arr_en.indexOf(string[i].toLowerCase()) + arr_en.indexOf(key[coutLetter].toLowerCase()) < arr_en.length) {
          stringKeyWords += arr_en[arr_en.indexOf(string[i].toLowerCase()) + arr_en.indexOf(key[coutLetter].toLowerCase())];
        } else {
          stringKeyWords += arr_en[arr_en.indexOf(string[i].toLowerCase()) + arr_en.indexOf(key[coutLetter].toLowerCase()) - (arr_en.length)];
        }
      }



      if (coutLetter < key.length - 1) {
        coutLetter++;
      } else {
        coutLetter = 0;
      }
    }

    if (this.reverse) {
      return stringKeyWords.toUpperCase()
    } else { return stringKeyWords.toUpperCase().split('').reverse().join('') }

  }
  decrypt(string, key) {
    const arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let stringKeyWords = '';

    let coutLetter = 0;


    for (let i = 0; i < string.length; i++) {

      if (arr_en.indexOf(string[i].toLowerCase()) == '-1') {
        stringKeyWords += string[i];

        coutLetter--;

      } else {
        if (arr_en.indexOf(string[i].toLowerCase()) - arr_en.indexOf(key[coutLetter].toLowerCase()) >= 0) {
          stringKeyWords += arr_en[arr_en.indexOf(string[i].toLowerCase()) - arr_en.indexOf(key[coutLetter].toLowerCase())];
        } else {
          stringKeyWords += arr_en[arr_en.indexOf(string[i].toLowerCase()) - arr_en.indexOf(key[coutLetter].toLowerCase()) + (arr_en.length)];
        }
      }



      if (coutLetter < key.length - 1) {
        coutLetter++;
      } else {
        coutLetter = 0;
      }
    }

    if (this.reverse) {
      return stringKeyWords.toUpperCase()
    } else { return stringKeyWords.toUpperCase().split('').reverse().join('') }
  }
}

module.exports = VigenereCipheringMachine;
