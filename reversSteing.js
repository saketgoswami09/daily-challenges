function reverseString(s) {
  let arr = s.split("");
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];

    left++;
    right--;
  }
  return arr
}

console.log(reverseString("saket"));
