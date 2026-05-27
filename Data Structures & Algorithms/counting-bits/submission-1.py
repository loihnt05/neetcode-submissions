class Solution:
    def countBits(self, n: int) -> List[int]:
        arr = []
        for i in range(n + 1):
            arr.append(self.counting(i))
        return arr
    def counting(self, x: int):
        count = 0
        while x:
            x = x & (x-1)
            count += 1
        return count