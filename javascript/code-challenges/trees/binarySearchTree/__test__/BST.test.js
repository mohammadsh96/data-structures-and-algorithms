'use strict';

const { TestScheduler } = require("jest");
const BST=require("../binary-search-tree")

describe("Binary Search Tree", () => {

  test(  "can create a binary search tree", () => {

    let BB =new BST();

    BB.Add(2);

    expect(BB.Contains(2)).toBe(true);


  })
  test("can add a new node " ,()=>{

    let BB =new BST();

    BB.Add(2);
    BB.Add(4);BB.Add(5);BB.Add(6);

    expect(BB.Contains(4)).toBe(true);
    expect(BB.root.value).toBe(2)
  })
  test(  "test left and right", () => {

    let BB =new BST();

    BB.Add(2);
    BB.Add(3)
    expect(BB.root.left).toBeNull();


  })
  test(  "test left and right", () => {

    let BB =new BST();

    BB.Add(2);
    BB.Add(1)
    expect(BB.root.left.value).toBe(1);
    expect(BB.Contains(5)).toBe(false);

  })
})
