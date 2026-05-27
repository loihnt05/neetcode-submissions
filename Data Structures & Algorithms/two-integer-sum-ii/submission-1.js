class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const n = numbers.length
        let l = 0
        let r = n - 1
        while (l < r) {
            if (numbers[l] + numbers[r] < target) {
                l += 1
                console.log(l)
            } else if (numbers[l] + numbers[r] > target) {
                r -= 1
                console.log(r)
            } else {
                return [l + 1, r + 1]
            }
        }
        return []
    }
}
