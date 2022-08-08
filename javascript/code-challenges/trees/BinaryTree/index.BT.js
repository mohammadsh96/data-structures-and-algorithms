'use strict';
const Node = require("../node")
const BinaryTree = require("./binary-tree")


let tree = null;

let on = new Node("folder");
let tw = new Node("file");
let thre = new Node("file");
let fou = new Node("fil2");
let fiv = new Node("folder");
let si= new Node("file");
let seve = new Node("folder");
let eigh = new Node("file");
let nin = new Node("file");

on.left = tw;
on.right = thre;
tw.left = si;
si.right = seve;
seve.left = eigh;
seve.right = nin;
thre.left = fou;
thre.right = fiv;

tree = new BinaryTree(on);

// jjj
let tree1 = null;

let one = new Node("folder");
let two = new Node("file");
let three = new Node("file");
let four = new Node("file2");
let five = new Node("folder");
let six = new Node("file");
let seven = new Node("folder");
let eight = new Node("file");
let nine = new Node("file");

one.left = two;
one.right = three;
two.left = six;
six.right = seven;
seven.left = eight;
seven.right = nine;
three.left = four;
three.right = five;

tree1 = new BinaryTree(one);

let tree2 = null;
let onee = new Node("folder");
let twoe = new Node("file");
let threee = new Node("file");
let foure = new Node("file");
let fivee = new Node("folder");
let sixe = new Node("file");
let sevene = new Node("folder");
let eighte = new Node("file");
let ninee = new Node("file2");

onee.left = twoe;
onee.right = threee;
twoe.left = sixe;
sixe.right = sevene;
sevene.left = eighte;
sevene.right = ninee;
threee.left = foure;
threee.right = fivee;

tree2 = new BinaryTree(onee);

// let preOrder = tree.preOrder();
// console.log('pre order: ', preOrder);
// //pre order > 5, 4, 11, 42, 77, 3, 2,  0,  88


// let inOrder = tree.inOrder();
// console.log('in order: ', inOrder);
// //pre order > 11, 77, 42, 3, 4, 5,  0,  2, 88


// let postOrder = tree.postOrder();
// console.log('post order: ', postOrder);
// //pre order > 77, 3, 42, 11, 4, 0, 88,  2,  5
// console.log("this is the maximum value in the tree :",tree.max());

// let sum = tree.sum();
// console.log("sum = ", sum);

console.log(tree.compare(tree1,tree2))
