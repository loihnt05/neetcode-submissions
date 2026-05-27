class Solution:

    def encode(self, strs: List[str]) -> str:
        res = ''
        for s in strs:
            res += str(len(s)) + '#' + s
        return res
        
    def decode(self, s: str) -> List[str]:
        res, k = [], 0
        while k < len(s):
            j = k 
            while s[j] != '#':
                j += 1
            lenght = int(s[k:j])
            res.append(s[j + 1: j + lenght + 1])
            k = j + lenght + 1
        return res
