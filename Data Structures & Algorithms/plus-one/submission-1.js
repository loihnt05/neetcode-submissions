class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        let rem = 1
        const len = digits.length
        for(let i = len - 1; i > -1; --i ) {
            const cal = digits[i] + rem

            digits[i] = cal%10
            rem  = Math.floor(cal / 10)

            if (rem === 0) {
                break
            }
        }
        return rem === 0 ? digits : [1, ...digits];
    }
}
