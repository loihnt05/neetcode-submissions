class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buy = 0;
        let sell = 1;
        let res = 0
        for (; sell < prices.length; sell ++){
            if (prices[sell] < prices[buy]){
                buy = sell
                continue;
            }
            const profit = prices[sell] - prices[buy];
            if (res < profit) {
                res = profit 
            }
        }
        return res;
    }
}
