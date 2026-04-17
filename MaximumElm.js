// find maximum element

// max and secondMax  = - Infinity

function maxElem(nums) {
  let max = -Infinity;
  let secondMax = -Infinity;

  for (let num of nums) {
    if (num > max) {
      secondMax = max;
      max = num;
    }
    if (num < max && num > secondMax) {
        secondMax = num
    }
  }

  return {
    max:max,
    secondMax:secondMax
  }
}

console.log(maxElem([3, 1, 4, 1, 5, 9, 2, 6]));
