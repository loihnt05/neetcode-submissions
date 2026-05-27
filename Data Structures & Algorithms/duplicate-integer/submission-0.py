class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        # do phuc tap O(nlogn) O(n)
        # set co 2 loai set: hashset voi treeset
        # treeset la cai binary search tree
        # hashset la set se dung hash => chen/xoa O(1) => do phuc tap la O(n) k phai la O(nlogn)
        return len(set(nums)) != len(nums)