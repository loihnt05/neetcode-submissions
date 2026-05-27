class Solution:
    def climbStairs(self, n: int) -> int:
        x, y = 1, 1
        for i in range(n):
            s = x + y
            x = y
            y = s
        return x 