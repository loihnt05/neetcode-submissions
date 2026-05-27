class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        rem = 1 if digits[-1] + 1 > 9 else 0
        digits[-1] = (digits[-1] + 1) % 10 
        for i in range(len(digits) - 2, -1, -1):
            t = digits[i] + rem
            print(i)
            digits[i] = t if t < 10 else t % 10
            print(digits)
            if t > 9:
                rem = 1
            else: 
                return digits
        if rem == 1:
            digits.insert(0, 1)
        return digits