class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        array = {}
        for i in nums:
            if i in array:
                array[i] += 1
            else:
                array[i] = 1
        heap = []
        for num in array.keys():
            heapq.heappush(heap, (array[num], num))
        while len(heap) > k:
            heapq.heappop(heap)
        res = []
        for i in range(k):
            res.append(heapq.heappop(heap)[1])
        return res
