class ArrayWrapper {
  constructor(nums) {
    this.nums = nums;
  }

  valueOf() {
    let value = 0;
    if (this.nums.length === 0) {
      return 0;
    } else {
      for (let num of this.nums) {
        value += num;
      }
      return value;
    }
  }

  toString() {
    return `[${this.nums.toString()}]`;
  }
}

const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);

console.log(obj2 + obj1);
