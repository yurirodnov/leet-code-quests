function removeElement(nums, val) {
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
}
var answer = removeElement([3, 2, 2, 3], 3);
console.log(answer);
