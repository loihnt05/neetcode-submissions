class Solution:
    def islandPerimeter(self, grid: List[List[int]]) -> int:
        rs = 0
        for i, l in enumerate(grid):
            for j, value in enumerate(l):
                if value == 1:
                    tmp = 4
                    if 0 <= i + 1 < len(grid):
                        if grid[i + 1][j] == 1:
                            tmp -= 1
                    if 0 <= i - 1 < len(grid):
                        if grid[i - 1][j] == 1:
                            tmp -= 1
                    if 0 <= j + 1 < len(l):
                        if grid[i][j + 1] == 1:
                            tmp -= 1
                    if 0 <= j - 1 < len(l):
                        if grid[i][j - 1] == 1:
                            tmp -= 1
                    rs += tmp
        return rs