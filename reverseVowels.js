function reverseVowels(initialValue) {
  let vowelsArr = ['a', 'e', 'i', 'o', 'u'];
  console.log(vowelsArr);
  let valueArr = initialValue.toLowerCase().split("");
  console.log(valueArr);

  let stringVowels = [];

  let vowelIndex = [];

  let constantsArr = [];

  let final = [];

  // iterate vowels array
  for (let i = 0; i < vowelsArr.length; i++) {
    for (let j = 0; j < valueArr.length; j++) {
      if (valueArr[j] === vowelsArr[i]) {
        stringVowels.push(valueArr[j]);
        vowelIndex.push(j);
      }
    }
  }
  let reversedStringVowels = stringVowels.reverse();
  console.log(reversedStringVowels);
  console.log(vowelIndex);
  console.log(constantsArr);

}

reverseVowels("HEllo");