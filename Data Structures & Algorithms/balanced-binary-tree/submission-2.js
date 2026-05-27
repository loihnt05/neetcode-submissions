/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    height(root){
        if (!root) {
            return [true, 0]
        }
        const l = this.height(root.left), r = this.height(root.right)
        const balanced = l[0] && r[0] && Math.abs(r[1] - l[1]) <= 1
        return [balanced, 1 + Math.max(l[1], r[1])]
    }
    isBalanced(root) {
        return this.height(root)[0]
    }
}
