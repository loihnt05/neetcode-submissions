class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if (n < 2) {
            return 1
        }
        let first = 1, second = 1
        for(let i = 2; i <= n; ++i) {
            let res = second + first
            first = second
            second = res
        }
        return second
    }
}
