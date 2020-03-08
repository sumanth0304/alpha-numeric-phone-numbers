const alphaNnumericphoneNumbers = function(digits) {
  if (digits.length === 0) return [];
  const keyPad = {
    "2": ["A", "B", "C"],
    "3": ["D", "E", "F"],
    "4": ["G", "H", "I"],
    "5": ["J", "K", "L"],
    "6": ["M", "N", "O"],
    "7": ["P", "Q", "R", "S"],
    "8": ["T", "U", "V"],
    "9": ["W", "X", "Y", "Z"],
    "0": ["0"],
    "1": ["1"]
  };
  let numbersCombinations = [""];

  for (var i = 0; i < digits.length; i++) {
    var letters = keyPad[digits[i]];
    var tempArray = [];

    if (letters === undefined) continue;

    letters.forEach(letter => {
      const letterToAdd = letter;
      numbersCombinations.forEach(number => {
        tempArray.push(number + letterToAdd);
      });
    });
    numbersCombinations = tempArray;
  }
  numbersCombinations = numbersCombinations.map((number, index) => {
    return {
      id: ++index,
      number: `${number.substring(0, 3)} ${number.substring(
        3,
        6
      )} ${number.substring(6, 10)}`
    };
  });
  return numbersCombinations;
};

module.exports = {
  alphaNnumericphoneNumbers
};
