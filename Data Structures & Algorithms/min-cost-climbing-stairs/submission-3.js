class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        const cache = {}

        const dp = (i) => {
            if (cache[i]) {
                return cache[i]
            }
            if (i >= cost.length) {
                return 0
            }

            const result = cost[i] + Math.min(dp(i + 1), dp(i+2))

            cache[i] = result 
            return result
        }
        return Math.min(dp(1), dp(0))
    }

}
