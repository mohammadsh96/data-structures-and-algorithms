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
  sum() {
    let summ= 0
    let traverse = (node) => {
        if (node.left) {
         summ =summ + node.left.data;
          traverse(node.left);
        }

        if (node.right){
          summ =summ + node.right.data;
          traverse(node.right);}
    }
    traverse(this.root);
    summ = summ+this.root.data
    return summ;
  }

  count() {
    let sum= 0
      let traverse = (node) => {
        if (node.left) {
        if(node.left.data === "file"){
sum ++
          }
          traverse(node.left);
        }

        if (node.right){
          if(node.right.data === "file"){
            sum ++
                      }
          traverse(node.right);}
    }
    traverse(this.root);
return sum;

  }
compare(tree1 ,tree2 ){

let x =tree1.count()
let y =tree2.count()

if(x==y)return true; else return false;
}

}

module.exports = BinaryTree;
