function answer(height) {
  let str = "\n";

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < height - i - 1; j++) {
      str += " ";
    }
    for (let j = 0; j < i * 2 + 1; j++) {
      str += "*";
    }
    str += "\n";
  }

  return str;
}

console.log(answer(3));
console.log(answer(5));
console.log(answer(7));
