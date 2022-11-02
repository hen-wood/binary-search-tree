// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {

    constructor() {
        this.root = null
    }

    insert(val, currentNode = this.root) {
        const newNode = new TreeNode(val)
        if (!this.root) {
            this.root = newNode
            return
        }
        if (newNode.val < currentNode.val) {
            if (!currentNode.left) {
                currentNode.left = newNode
                return
            } else {
                this.insert(val, currentNode.left)
            }
        } else {
            if (!currentNode.right) {
                currentNode.right = newNode
                return
            } else {
                this.insert(val, currentNode.right)
            }
        }
    }

    search(val) {
        let currentNode = this.root
        while (currentNode) {
            if (val === currentNode.val) return true
            if (val < currentNode.val) {
                // if (currentNode.left) {
                currentNode = currentNode.left
                // } else {
                //   break
                // }
            } else {
                // if (currentNode.right) {
                currentNode = currentNode.right
                // } else {
                //   break
                // }
            }
        }
        return false
    }


    preOrderTraversal(currentNode = this.root) {
        if (currentNode) {
            console.log(currentNode.val)
            this.preOrderTraversal(currentNode.left)
            this.preOrderTraversal(currentNode.right)
        }
    }


    inOrderTraversal(currentNode = this.root) {
        if (currentNode) {
            this.inOrderTraversal(currentNode.left)
            console.log(currentNode.val)
            this.inOrderTraversal(currentNode.right)
        }
    }


    postOrderTraversal(currentNode = this.root) {
        if (currentNode) {
            this.postOrderTraversal(currentNode.left)
            this.postOrderTraversal(currentNode.right)
            console.log(currentNode.val)
        }
    }

    // Breadth First Traversal - Iterative
    breadthFirstTraversal() {
        // your code here
        const queue = [this.root]
        while (queue.length) {
            let node = queue.shift()

            console.log(node.val)
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        }
    }

    // Depth First Traversal - Iterative
    depthFirstTraversal() {
        const stack = [this.root]
        while (queue.length) {
            let node = stack.pop()

            console.log(node.val)
            if (node.left) {
                stack.push(node.left)
            }
            if (node.right) {
                stack.push(node.right)
            }
        }
    }
}

module.exports = { BinarySearchTree, TreeNode };
// Your code here
