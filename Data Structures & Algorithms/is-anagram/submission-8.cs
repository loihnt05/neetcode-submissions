public class Solution {
    public bool IsAnagram(string s, string t) {
        int[] nums = new int[26];

        if (s.Length != t.Length){
            return false;
        } 

        for (int i = 0; i < s.Length; ++i) {
            nums[s[i] - 'a'] += 1;
            nums[t[i] - 'a'] -= 1;
        }
        return nums.All(x => x == 0);
    }
}
