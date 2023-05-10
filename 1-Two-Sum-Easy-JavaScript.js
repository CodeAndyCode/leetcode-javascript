/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target, map = new Map()) {
  for (let i = 0; i < nums.length; i++) {
    const lookingFor = target - nums[i];

    if (map.has(lookingFor)) {
      return [i, map.get(lookingFor)];
    }
    map.set(nums[i], i);
  }

  return [-1, -1];
};
