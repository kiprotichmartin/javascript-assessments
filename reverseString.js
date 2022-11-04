let str = "She sells sea shells by the sea shore";

// method 1: for loop
function reverseString() {
  let splitStr = str.split("");

  let newArr = [];

  for (let i = 0; i < splitStr.length; i += 4) {
    let sliceReverse = splitStr
      .slice(i, i + 4)
      .reverse()
      .join("");
    newArr.push(sliceReverse);
  }

  let finalStr = newArr.join("");

  console.log(finalStr);
}

reverseString(str);

// method 2: for-of loop
function reverseString2(str) {
  let num = 0;

  let splitStr = str.split("");

  let newArr = [];

  for (let i of splitStr) {
    let reversedStr = splitStr
      // .split("")
      .slice((i = num), i + 4)
      .reverse()
      .join("");
    newArr.push(reversedStr);
    num += 4;
  }

  let finalStr = newArr.join("");

  console.log(finalStr);
}

reverseString2(str);
