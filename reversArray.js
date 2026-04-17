// Reverse an array

function reverseArray(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];

    left++;
    right--;
  }
  return nums;
}
console.log(reverseArray([5, 3, 8, 1, 4, 2]));
