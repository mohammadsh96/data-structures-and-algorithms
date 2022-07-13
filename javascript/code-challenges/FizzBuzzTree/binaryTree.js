'use strict';

class BinaryTree {
    constructor(root) {
        this.root = root;
    }

    preOrder() {
        let result = [];

        let recursive = (node) => {
            result.push(node.value);
            if (node.left) {
                recursive(node.left);
            }

            if (node.right) {
                recursive(node.right);
            }
        }

        recursive(this.root);

        return result;
    }

    inOrder() {
        let result = [];

        let recursive = (node) => {
            if (node.left) {
                recursive(node.left);
            }
            result.push(node.value);

            if (node.right) {
                recursive(node.right);
            }
        }

        recursive(this.root);

        return result;
    }

    postOrder() {
        let result = [];

        let recursive = (node) => {
            if (node.left) {
                recursive(node.left);
            }
            if (node.right) {
                recursive(node.right);
            }
            result.push(node.value);
        }

        recursive(this.root);

        return result;
    }

}

module.exports = BinaryTree;
