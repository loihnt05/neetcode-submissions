class Solution:
    def climbStairs(self, n: int) -> int:
        x = 1
        y = 1
        if n < 3:
            return n
        while n > 1:
            temp = x + y
            x = y
            y = temp
            n -= 1
        return temp