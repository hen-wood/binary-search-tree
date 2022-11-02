const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) {
  let curr = rootNode;

  while (curr.left) {
    curr = curr.left;
  }

  return curr.val;
}

function findMaxBST (rootNode) {
  let curr = rootNode;

  while (curr.right) {
    curr = curr.right;
  }

  return curr.val;
}

function findMinBT (rootNode) {
  // const queue = [rootNode];
  // let min = Infinity;

  // while (queue.length) {
  //   let node = queue.shift();

  //   if (node.val < min) {
  //     min = node.val;
  //   }

  //   if (node.left) {
  //     queue.push(node.left);
  //   }

  //   if (node.right) {
  //     queue.push(node.right);
  //   }
  // }

  // return min;

  if (!rootNode) return;

  let min = rootNode.val;
  let left = findMinBT(rootNode.left);
  let right = findMinBT(rootNode.right);

  if (left < min) min = left;
  if (right < min) min = right;

  return min;
}

function findMaxBT (rootNode) {

  if (!rootNode) return;

  let max = rootNode.val;
  let left = findMaxBT(rootNode.left);
  let right = findMaxBT(rootNode.right);

  if (left > max) max = left;
  if (right > max) max = right;

  return max;
}

function getHeight (rootNode) {
  if (!rootNode) return -1;

  // initialize let left = rootNode.left
  // same for right = rootNode.right
  // while either exist, continue reassigning their values
  // break out of loop when reach end
  // keep counter to tell height
  while (rootNode.left || rootNode.right) {
    if (rootNode.left) {
      //
    }
  }
}

function balancedTree (rootNode) {
  // Your code here
}

function countNodes (rootNode) {
  // Your code here
}

function getParentNode (rootNode, target) {
  // Your code here
}

function inOrderPredecessor (rootNode, target) {
  // Your code here
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   Set the parent that points to it to null

  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side,
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.

  // Case 3: One child:
  //   Make the parent point to the child

}

module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}
