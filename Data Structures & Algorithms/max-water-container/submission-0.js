class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let res = 0
        const n = heights.length
        let left = 0;
        let right = n - 1
        while (left < right) {
            res = Math.max((right - left) * Math.min(heights[left], heights[right]), res)
            if (heights[left] > heights[right]) {
                right -= 1
            } else {
                left += 1
            }

        }
        return res
    }
}
