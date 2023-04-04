function rand(min = null, max = null) {
  if (min === null && max === null) {
    return 0;
  } else if (max === null) {
    max = min;
    min = 0;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(rand(20, 1)); // Output: 4
console.log(rand(1, 10)); // Output: 1
console.log(rand(6)); // Output: 2
console.log(rand()); // Output: 0
