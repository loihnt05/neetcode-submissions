class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        let maxHeap = new MaxPriorityQueue();

        for(let stone of stones) {
            maxHeap.enqueue(stone)
        }

        while(maxHeap.size() > 1) {
            const stone1 = maxHeap.dequeue()
            const stone2 = maxHeap.dequeue()

            if (stone1 !== stone2) {
                maxHeap.enqueue(Math.abs(stone1 - stone2))
            }
        }
        
        return maxHeap.front() ?? 0
    }
}
