class Solution:
    def search(self, nums: List[int], target: int) -> int:
        l = 0
        r = len(nums) - 1
        mid = (l + r) // 2

        while l <= r:
            if target == nums[mid]:
                return mid
            if target == nums[l]:
                return l
            if target == nums[r]:
                return r
            if mid == l or mid == r:
                return -1
            elif target < nums[mid]:
                r = mid
                mid = (l + r) // 2
            else:
                l = mid
                mid = (l + r) // 2
        return -1
