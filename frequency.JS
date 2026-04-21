function frquencyCounter(nums) {
  let freq = {};

  for (let num of nums) {
    freq[num] = (freq[num] || 0) + 1;
  }
  return freq  
}


console.log(frquencyCounter([1,2,1,1,1,4]));
