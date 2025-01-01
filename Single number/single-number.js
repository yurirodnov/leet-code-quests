function singleNumber(nums) {
  if (nums.length === 1) {
    return nums[0];
  }
  var dict = {};
  for (var i = 0; i < nums.length; i += 1) {
    if (dict[nums[i]] !== undefined) {
      dict[nums[i]] += 1;
    } else {
      dict[nums[i]] = 1;
    }
  }
  return +Object.keys(dict).filter(function (key) {
    return +dict[key] < 2;
  })[0];
}
var answer = singleNumber([2, 2, 1]);
console.log(answer);
