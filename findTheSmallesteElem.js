// Find the smallest element in an array

function smallestElem(nums) {
  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let num of nums) {
    if (num < smallest) {
      secondSmallest = smallest;
      secondSmallest = num;
    }

    if (num < secondSmallest && num !== smallest) {
      secondSmallest = num;
    }
  }
  return {
    smallest:smallest,
    secondSmallest:secondSmallest
  };
}
console.log(smallestElem([5, 3, 8, 1, 4, 2]));     