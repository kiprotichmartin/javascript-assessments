function squareRoot(initialValue) {
  let absValue = Math.abs(initialValue);
  let result = Math.sqrt(absValue);
  let roundedValue = Math.round(result);
  console.log(roundedValue);
}

squareRoot(400.3025);