const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  var newMass = [];
  if (Array.isArray(members)) {
    for (var i = 0; i < members.length; i++) {
      if (typeof members[i] === 'string') {
        var j = 0;
        while (members[i].charAt(j) === ' ') {
          j++;
        }
        newMass[i] = members[i].charAt(j).toUpperCase();
      }
    }
    newMass.sort();
    newMass = newMass.join('');
  } else { newMass = false }
  return newMass
};
