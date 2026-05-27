class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        l = 0
        r = 1
        max_profit = 0
        while r < len(prices):
            if prices[r] < prices[l]:
                l = r
            else:
                new_profit = prices[r] - prices[l]
                max_profit = new_profit if new_profit > max_profit else max_profit
            r += 1
        return max_profit