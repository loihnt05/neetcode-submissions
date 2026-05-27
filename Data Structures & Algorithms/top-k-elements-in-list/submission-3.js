class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        
        let count = {}

        for(const num of nums) {
            count[num] = (count[num] || 0) + 1
        }
        
        const maxHeap = new MaxPriorityQueue((n) => n[1])

        for(const [num, cnt] of Object.entries(count)) {
            maxHeap.enqueue([num, cnt])
        }
        let res = []
        for(let i = 0; i < k; ++i) {
            const [num, cnt] = maxHeap.dequeue()
            res.push(num)
        }
        return res
    }
}
