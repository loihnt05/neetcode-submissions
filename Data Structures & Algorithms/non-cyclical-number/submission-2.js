class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {

        const calc = (n) => {
            let res = 0
            while(n) {
                res += (n%10)**2
                n = Math.floor(n/10)
            }
            return res
        }
        let visit = new Set();
        while (!visit.has(n)){
            const cal = calc(n)
            if (cal === 1) {
                return true
            }
            visit.add(n)
            n = cal
        }
        return false
    }

    
}
