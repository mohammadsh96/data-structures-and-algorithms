'use strick';
class Node
{
    constructor(value)
    {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
  constructor(root = null) {
    this.root = root;
  }

  Add(value) {
    let current = this.root;
    if (!current) {
      this.root = new Node(value);
    }
    else {
      while (current) {
        if (value < current.value) {
          if (!current.left) {
            current.left = new Node(value);
            break;
          }
          current = current.left;
        }
        else {
          if (!current.right) {
            current.right = new Node(value);
            break;
          }
          current = current.right;
        }
      }
    }
  }

  Contains(value) {
    let current = this.root;
    while (current) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
}

module.exports = BST;




