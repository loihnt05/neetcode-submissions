class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0;
        let r = nums.length - 1
        while (l <= r) {
            const m = l + Math.floor((r - l) / 2);
            console.log(m)
            if (target === nums[m]) {
                return m
            }
            if (target === nums[l]) {
                return l
            }
            if (target === nums[r]){
                return r
            }
            if (target > nums[m]) { 
                l = m + 1
            } else {
                r = m - 1
            }
        }
        return -1
    }
}
