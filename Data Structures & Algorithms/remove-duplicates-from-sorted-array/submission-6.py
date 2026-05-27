class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        l = []
        l.append(nums[0])
        for i in range(1, len(nums)):
            if nums[i] != nums[i-1]:
                l.append(nums[i])
        for i in range(len(l)):
            nums[i] = l[i]
        return len(l)