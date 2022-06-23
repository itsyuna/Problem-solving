const isLongPressedName = function (name, typed) {
  let namePointer = 0;
  let typedPointer = 0;

  while (typedPointer < typed.length) {
    if (name[namePointer] === typed[typedPointer]) {
      namePointer++;
      typedPointer++;
    } else if (typed[typedPointer] === typed[typedPointer - 1]) typedPointer++;
    else return false;
  }

  return namePointer === name.length;
};

console.log(isLongPressedName('alex', 'aaleex')); // true
console.log(isLongPressedName('saeed', 'ssaaedd')); // false
