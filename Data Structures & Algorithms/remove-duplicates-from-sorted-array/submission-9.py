class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        begin = 0
        prev_value = -1000000
        for i, num in enumerate(nums):
            if num != prev_value:
                nums[begin] = num
                begin += 1
                prev_value = num
        return begin