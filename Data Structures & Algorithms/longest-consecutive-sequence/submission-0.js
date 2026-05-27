class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const store = new Set(nums);
        let res = 0

        for(let num of nums){
            if(!store.has(num-1)) {
                let length = 1
                while(store.has(num+length)) {
                    length++;
                }
                res = Math.max(res, length)
            }
        }
        return res
    }
}
