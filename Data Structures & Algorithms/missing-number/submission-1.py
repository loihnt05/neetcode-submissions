class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        x = 0
        res = 0
        for i in range(len(nums)):
            res = res ^ x ^ nums[i]
            x += 1
        return res ^ x