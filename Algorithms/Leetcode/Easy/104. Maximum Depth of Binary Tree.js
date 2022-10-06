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

const maxDepth = function (root) {
  if (!root) return 0;

  const queue = [root];
  let depth = 0;

  while (queue.length > 0) {
    depth++;
    const curLevelLength = queue.length;

    for (let i = 0; i < curLevelLength; i++) {
      const currentNode = queue.shift();
      if (currentNode.left !== null) queue.push(currentNode.left);
      if (currentNode.right !== null) queue.push(currentNode.right);
    }
  }

  return depth;
};

console.log(maxDepth([3, 9, 20, null, null, 15, 7])); // 3
console.log(maxDepth([1, null, 2])); // 2
