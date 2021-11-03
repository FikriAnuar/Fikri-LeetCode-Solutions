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
 * @return {number}
 */
var deepestLeavesSum = function(root) {
  var maxDepth = 0;
  var calcMaxDepth = function(root, depth) {
    if (root.left === null && root.right === null) {
      if (depth > maxDepth) {
        maxDepth = depth;
      }
    } else if (root.left !== null && root.right === null) {
      calcMaxDepth(root.left, depth + 1);
    } else if (root.left === null && root.right !== null) {
      calcMaxDepth(root.right, depth + 1);
    } else {
      calcMaxDepth(root.left, depth + 1);
      calcMaxDepth(root.right, depth + 1);
    }
  }
  calcMaxDepth(root, 0);
  var findDeepestLeaf = function(root, depth) {
    if (root.left === null && root.right === null) {
    if (depth === maxDepth) {
      return root.val;
    }
      return 0;
    } else if (root.left !== null && root.right === null) {
      return findDeepestLeaf(root.left, depth + 1);
    } else if (root.left === null && root.right !== null) {
      return findDeepestLeaf(root.right, depth + 1);
    } else {
      return findDeepestLeaf(root.left, depth + 1) + findDeepestLeaf(root.right, depth + 1);
    }
  }
  return findDeepestLeaf(root, 0);
};