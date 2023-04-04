function isItNumeric(input) {
    if (typeof input === 'number') {
      return true;
    } else if (typeof input === 'string' && input.trim() !== '') {
      return !isNaN(Number(input));
    } else {
      return false;
    }
  }
  console.log(isItNumeric(12)); // Output: true
  console.log(isItNumeric('abcd')); // Output: false
  console.log(isItNumeric('12')); // Output: true
  console.log(isItNumeric(' ')); // Output: false
  console.log(isItNumeric(1.20)); // Output: true
  console.log(isItNumeric(-200)); // Output: true
    