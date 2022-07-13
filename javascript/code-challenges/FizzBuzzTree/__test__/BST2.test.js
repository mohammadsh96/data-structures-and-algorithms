'use strict';

let BinarySearchTree = require('../binarySearchtree')

describe('Trees test', () => {
    it('Can successfully instantiate an empty tree', () => {
        let newBinary = new BinarySearchTree();
        expect(newBinary.root).toEqual(null);
    });

    it('Can successfully instantiate a tree with a single root node', () => {
        let newBinary = new BinarySearchTree();
        newBinary.add(12);
        expect(newBinary.root.value).toEqual(12);
        expect(newBinary.contains(12)).toEqual(true);
    });

    it('Can successfully add a left child and right child to a single root node', () => {
        let newBinary = new BinarySearchTree();
        newBinary.add(5);
        newBinary.add(3);
        newBinary.add(7);
        expect(newBinary.root.value).toEqual(5);
        expect(newBinary.root.left.value).toEqual(3);
        expect(newBinary.root.right.value).toEqual(7);
    });

    it('Can successfully return a collection from a preorder traversal', () => {
        let expextedTree = [21, 11, 3, 7, 12, 31, 62, 53, 75, 80]
        let newBinary = new BinarySearchTree();
        newBinary.add(21);
        newBinary.add(31);
        newBinary.add(11);
        newBinary.add(3);
        newBinary.add(7);
        newBinary.add(62);
        newBinary.add(53);
        newBinary.add(75);
        newBinary.add(12);
        newBinary.add(80);
        expect(newBinary.preOrder()).toEqual(expextedTree);
    });

    it('Can successfully return a collection from an inorder traversal', () => {
        let expextedTree = [3, 7, 11, 12, 21, 31, 53, 62, 75, 80]
        let newBinary = new BinarySearchTree();
        newBinary.add(21);
        newBinary.add(31);
        newBinary.add(11);
        newBinary.add(3);
        newBinary.add(7);
        newBinary.add(62);
        newBinary.add(53);
        newBinary.add(75);
        newBinary.add(12);
        newBinary.add(80);
        expect(newBinary.inOrder()).toEqual(expextedTree);
    });

    it('Can successfully return a collection from a postorder traversal', () => {
        let expextedTree = [7, 3, 12, 11, 53, 80, 75, 62, 31, 21]
        let newBinary = new BinarySearchTree();
        newBinary.add(21);
        newBinary.add(31);
        newBinary.add(11);
        newBinary.add(3);
        newBinary.add(7);
        newBinary.add(62);
        newBinary.add(53);
        newBinary.add(75);
        newBinary.add(12);
        newBinary.add(80);
        expect(newBinary.postOrder()).toEqual(expextedTree);
    });

});
