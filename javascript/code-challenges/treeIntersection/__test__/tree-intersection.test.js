'use strict';
const BinaryTree = require('../../trees/BinaryTree/binary-tree');
const Node = require('../../trees/node');
const tree_intersection =  require('../../treeIntersection/tree-intersection');

describe("Binary Tree", () => {
    
      

    

    test('tree-intersection', () => {
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
      
      expect(tree_intersection(tree1, tree2)).toEqual(["folder", "folder", "folder", "file", "file", "file", "file", "file", "file", "file", "file", "file", "file", "folder", "folder", "folder", "file", "file", "file", "file", "file", "file", "file", "file", "file", "file", "file", "file", "file", "file", "file", "file2", "folder", "folder", "folder"]);
  });
  })