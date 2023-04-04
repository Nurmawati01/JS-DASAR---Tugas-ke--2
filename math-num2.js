function chooseDecimals(n, d) {
    if (typeof n !== 'number' || typeof d !== 'number') {
      return 'Error: Input harus berupa angka';
    }
    
    const numberString = n.toString();
    const decimalIndex = numberString.indexOf('.');
    
    if (decimalIndex === -1) {
      return `${numberString}.${'0'.repeat(d)}`;
    }
    
    const integerPart = numberString.substring(0, decimalIndex);
    const decimalPart = numberString.substring(decimalIndex + 1, decimalIndex + 1 + d);
    
    if (decimalPart.length < d) {
      return `${integerPart}.${decimalPart}${'0'.repeat(d - decimalPart.length)}`;
    }
    
    return `${integerPart}.${decimalPart}`;
  }
  console.log(chooseDecimals(2.100212, 2)); // Output: 2.10
  console.log(chooseDecimals(2.100212, 3)); // Output: 2.100
  console.log(chooseDecimals(2100, 2)); // Output: 2100.00
    