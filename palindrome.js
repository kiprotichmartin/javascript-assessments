function checkPalindrome(initialValue) {
  // first change the datatype to astring if it is not
  let stringValue = initialValue.toString();
  // get the split string
  let splitStr = stringValue.split("");
  // reverse the array of strings and join them
  let reverse = splitStr.reverse().join("");
  // check if the initial value is a palindrome
  if (stringValue === reverse) {
    console.log(true);
  } else {
    console.log(false);
  }
}

checkPalindrome(121);