class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        let res = []
        
        for(let i = 0; i <= n; ++i) {
            let count = 0
            let n = i
            while(n !== 0) {
                n &= n -1
                count++;
            }
            res.push(count)
        }
        return res
    }
}
