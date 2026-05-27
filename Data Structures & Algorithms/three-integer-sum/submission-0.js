class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let n = nums.length
        nums.sort((a,b) => a - b)
        let res = []

        for (let i = 0; i < n - 1; ++i) {
            if (nums[i] > 0) break;
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            let l = i + 1
            let r = n - 1
            while (l < r) {
                if (nums[i] + nums[l] + nums[r] > 0) {
                    r -= 1
                } else if (nums[i] + nums[l] + nums[r] < 0) {
                    l += 1
                } else {
                    res.push([nums[i], nums[l], nums[r]])
                    l++;
                    r--;
                    while(l < r && nums[l] === nums[l-1]) l++;
                }
            }
        }
        return res
    }
}
