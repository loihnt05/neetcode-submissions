class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const res = []
        const subset = []
        this.dfs(nums, 0, subset, res)
        return res
    }

    dfs(nums, i, subset, res) {
        if (i >= nums.length) {
            return res.push([...subset])
        }

        subset.push(nums[i])
        this.dfs(nums, i + 1, subset, res)
        subset.pop()
        this.dfs(nums, i + 1, subset, res)
    }
}
