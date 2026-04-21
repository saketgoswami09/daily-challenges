// Find the smallest element in an array

function smallestElem(nums) {
  let smallest = Infinity;
  let secSmallest = Infinity;

  for (let num of nums) {
    if (num < smallest) {
      secSmallest =smallest
      smallest = num
    }
    if (num < secSmallest && num!== smallest) {
      secSmallest = num
    }
  }

  return {
    secSmallest:secSmallest,
    smallest: smallest
  }
}
console.log(smallestElem([11,2,3,1,-1,-44]));
