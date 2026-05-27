"""
Definition of Interval:
class Interval(object):
    def __init__(self, start, end):
        self.start = start
        self.end = end
"""

class Solution:
    def canAttendMeetings(self, intervals: List[Interval]) -> bool: 
        rs = sorted(intervals, key=lambda x: x.start)
        for key in range(len(rs) - 1):
            print(rs[key].start, rs[key].end)
            if rs[key + 1].start < rs[key].end:
                return False
        return True