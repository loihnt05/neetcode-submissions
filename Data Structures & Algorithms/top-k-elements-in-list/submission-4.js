class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        //bucket sort
        const freq = Array.from({ length: nums.length + 1 }, () => []);
        let count = {}
        for(let num of nums) {
            count[num] = (count[num] || 0) + 1
        }

        for(const n in count) {
            freq[count[n]].push(parseInt(n))
        }
        let fin = []
        for(let i = freq.length - 1; i > -1; --i) {
            for(let n of freq[i]) {
                fin.push(n)
                if(fin.length === k) {
                    return fin
                }
            }
        }
        return 
    }
}
