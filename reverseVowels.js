function reverseVowels(initialValue) {
  let vowelsArr = ['a', 'e', 'i', 'o', 'u'];
  console.log(vowelsArr);
  let valueArr = initialValue.toLowerCase().split("");
  console.log(valueArr);

  let stringVowels = [];

  let vowelIndex = [];

  let final = [];

  // iterate vowels array
  for (let i = 0; i < vowelsArr.length; i++) {
    // iterate the input string array
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

  for (let i = 0; i < valueArr.length; i++) {
    if (valueArr.indexOf(reversedStringVowels[i]) === vowelIndex[i]) {
      
    }
  }

}

reverseVowels("HEllo");