function remove(nums) {
  let seen = new Map();
  let result = [];

  for (let num of nums) {
    if (!seen.has(num)) {
      result.push(num);
      seen.set(num, true);
    }
  }
  return result;
}

console.log(remove([1, 1, 1, 1, 2, 31, 1, 5, 5, 3]));
