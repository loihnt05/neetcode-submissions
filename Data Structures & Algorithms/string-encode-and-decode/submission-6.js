class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        for(let s in strs) {
            strs[s] = strs[s].length + "#" + strs[s]
        }
        return strs.join('')
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = []

        for (let i = 0; i < str.length; ++i) {
            let j = i;
            while (str[j] !== '#') j++;

            const len = parseInt(str.substring(i, j));
            res.push(str.substring(j + 1, j + 1 + len))
            console.log(i, j, len)
            i = j + len
        }
        return res
    }
}
