class Solution:
    def isHappy(self, n: int) -> bool:
        visit = set()
        while n not in visit:
            visit.add(n)
            n = self.countLoop(n)
            
            if n == 1:
                return True

        return False
    def countLoop(self, n: int):
        out = 0
        while n:
            t = n%10
            out += t**2
            n = n//10
        return out