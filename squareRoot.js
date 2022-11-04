function squareRoot(initialValue) {
  let absValue = Math.abs(initialValue);
  let result = absValue ** 2;
  let roundedValue = Math.round(result);
  console.log(roundedValue);
}

squareRoot(20.55);