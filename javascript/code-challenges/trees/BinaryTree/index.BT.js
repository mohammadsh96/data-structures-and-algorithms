'use strict';
const Node = require("../node")
const BinaryTree = require("./binary-tree")

let tree = null;

let one = new Node(5);
let two = new Node(4);
let three = new Node(2);
let four = new Node(0);
let five = new Node(88);
let six = new Node(11);
let seven = new Node(42);
let eight = new Node(77);
let nine = new Node(3);

one.left = two;
one.right = three;
two.left = six;
six.right = seven;
seven.left = eight;
seven.right = nine;
three.left = four;
three.right = five;

tree = new BinaryTree(one);

let preOrder = tree.preOrder();
console.log('pre order: ', preOrder);
//pre order > 5, 4, 11, 42, 77, 3, 2,  0,  88


let inOrder = tree.inOrder();
console.log('in order: ', inOrder);
//pre order > 11, 77, 42, 3, 4, 5,  0,  2, 88


let postOrder = tree.postOrder();
console.log('post order: ', postOrder);
//pre order > 77, 3, 42, 11, 4, 0, 88,  2,  5
console.log("this is the maximum value in the tree :",tree.max());
