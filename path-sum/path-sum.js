/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  var foundSum = false;
  if (root === null) {
    return false;
  }
  var findLeaf = function(root, sum) {
    if (root.left === null && root.right === null) {
      if (sum + root.val === targetSum) {
        foundSum = true;
      }
    } else if (root.left === null) {
      findLeaf(root.right, sum + root.val);
    } else if (root.right === null) {
      findLeaf(root.left, sum + root.val);
    } else {
      findLeaf(root.right, sum + root.val);
      findLeaf(root.left, sum + root.val);
    }
  }
  findLeaf(root, 0);
  return foundSum;
};