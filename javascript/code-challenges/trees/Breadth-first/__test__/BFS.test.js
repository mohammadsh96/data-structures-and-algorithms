'use strict';
const BinaryTree = require('../Breadth-first');
const Node = require("../../node")
let tree = null;

// describe("Breadth fisrt", () => {
//     beforeAll(() => {
//         let one = new Node(1);
//         let two = new Node(2);
//         let three = new Node(3);
//         let four = new Node(4);
//         let five = new Node(5);
//         let six = new Node(6);
//         let seven = new Node(7);
//         let eight = new Node(8);
//         let nine = new Node(9);

//         one.left = two;
//         one.right = three;
//         two.left = six;
//         six.right = seven;
//         seven.left = eight;
//         seven.right = nine;
//         three.left = four;
//         three.right = five;

//         tree = new BinaryTree(one);
//     });
describe("Breadth fisrt ", () => {
    test('breadthFirst method', () => {

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

      let result=[5,  4,  2, 11, 0, 88, 42, 77,  3]
        let res =tree.breadthFirst()
        expect(res).toEqual(result);

    });

  })
