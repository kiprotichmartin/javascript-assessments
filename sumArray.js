let arr = [1, 2, 4, 7, 6];

// method 1: for loop
function findSum(array) {
  let sum = 0;
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    sum = sum + element;
  }
  console.log(sum);
}

findSum(arr);

// method 2: for-of loop
function findSum2(array) {
  let sum = 0;
  for (let el of array) {
    sum = sum + el;
  }
  console.log(sum);
}

findSum2(arr);

// method 3: for-in loop
function findSum3(array) {
  let sum = 0;
  for (let el in array) {
    sum = sum + array[el];
  }
  console.log(sum);
}

findSum3(arr);
