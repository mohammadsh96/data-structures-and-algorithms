# Trees

A tree is a data structure where a node can have zero or more children. Each node contains a value. Like graphs, the connection between nodes is called edges. A tree is a type of graph,


## testing

to test binary tress run : `npm test Binary-tree`  >> other test here  [index.BT.js](./index.BT.js)
to test binary Search tress run : `npm test BST `   >> other test here  [index.BST.js](./index.BST.js)


## Challenge

1-Create a Binary Tree class
Define a method for each of the depth first traversals:
pre order
in order
post order which returns an array of the values, ordered appropriately.


2-Create a Binary Search Tree class
This class should be a sub-class (or your languages equivalent) of the Binary Tree Class, with the following additional methods:
`Add`
Arguments: value
Return: nothing
Adds a new node with that value in the correct location in the binary search tree.
`Contains`
Argument: value
Returns: boolean indicating whether or not the value is in the tree at least once.

## Approach & Efficiency
Print the node's data(root)
Recursively traverse left subtree
Recursively traverse right subtree

## API
The Big O time complexity of a Binary Trees is O(n)
The Big O Space complexity of a Binary Trees is O(n)
The Big O time complexity of a Binary Search Tree’s insertion and search operations is O(h)
he Big O space complexity of a BST search would be O(1)

### code


![binary tree](binary-tree.js)
![binary search tree](binary-search-tree.js)