class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        maxHeap = stones
        heapq.heapify_max(maxHeap)

        while len(maxHeap) > 1:
            x = heapq.heappop_max(maxHeap)
            y = heapq.heappop_max(maxHeap)
            if x == y:
                continue
            heapq.heappush_max(maxHeap, x-y)

        return 0 if len(maxHeap) == 0 else maxHeap[0]