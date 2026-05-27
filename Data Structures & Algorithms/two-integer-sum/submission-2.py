class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        m = {}
        for i, value in enumerate(nums):
            if value in m:
                return [m[value], i] 
            else: 
                m[target - value] = i
        return []