class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const parentheses = { ')': '(', ']': '[', '}': '{'}
        const open = ['(', '[', '{']
        // const close = [')', ']', '}']
        const res = []
        for(let i = 0; i < s.length; ++i) {
            if(open.includes(s[i])){
                res.push(s[i])
            }
            else {
                if (parentheses[s[i]] !== res.pop()) {
                    return false;
                }
            }
        }
        return res.length === 0;
    }
}
