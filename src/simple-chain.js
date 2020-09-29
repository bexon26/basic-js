const CustomError = require("../extensions/custom-error");

const chainMaker = {
  step: [],
  getLength() {
    this.step.length;
    return this;
  },
  addLink(value) {
    value === undefined ? value = "( )" : value = "( " + value + " )";
    this.step.push(value);
    return this;
  },
  removeLink(position) {
    if (position < 1 || position > this.step.length || typeof (position) !== 'number' || position !== parseInt(position)) {
      this.step = [];
      throw new Error("resolving wrong link");
    }
    this.step.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.step.reverse();
    return this;
  },
  finishChain() {
    let strChain = this.step.join("~~");
    this.step = [];
    return strChain;
  }
};

module.exports = chainMaker;
