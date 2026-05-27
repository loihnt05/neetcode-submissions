class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let res = 0
        for (let num in nums) {
            res ^= num
            res ^= nums[num]
        }
        return res ^ (nums.length)
    }
}
