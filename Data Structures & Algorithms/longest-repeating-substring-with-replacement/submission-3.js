class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let res = 0
        let l = 0
        let maxf = 0
        let count = new Set(s)

        for(let r = 0; r < s.length; ++r)
        {
            if (count[s[r]]) {
                count[s[r]]++
            } else {
                count[s[r]] = 1
            }
            maxf = Math.max(maxf, count[s[r]])
            while ((r - l + 1) - maxf > k) {
                count[s[l]] -= 1
                l += 1
            }
            res = Math.max(res, r - l + 1)
        }
        return res
    
    }
}
