'use strict';
class BinaryTree {
    constructor(root = null) {
        this.root = root;
    }
    //root - left - right
    preOrder() {
        let result = [];
        let traverse = (node) => {
            result.push(node.data);
            // if left go left
            if (node.left) traverse(node.left);
            // if right go right
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return result;
    }

    // left - root - right
    inOrder() {
        let result = [];
        let traverse = (node) => {

            // if left go left
            if (node.left) traverse(node.left);
            result.push(node.data);
            // if right go right
            if (node.right) traverse(node.right);
        }
        traverse(this.root)
        return result;
    }

    //left - right - root
    postOrder() {
        let result = [];
        let traverse = (node) => {

            // if left go left
            if (node.left) traverse(node.left);
            // if right go right
            if (node.right) traverse(node.right);
            result.push(node.data);
        }
        traverse(this.root)
        return result;
    }
    max() {
      if (!this.root) {
          return 'tree empty'
      };
      let result = this.root.data;

      let recursive = (node) => {
          if (node.left) recursive(node.left);
          if (node.right) recursive(node.right);
          if (node.data > result) result = node.data;
      };

      recursive(this.root);
      return result;
  };
}

module.exports = BinaryTree;
