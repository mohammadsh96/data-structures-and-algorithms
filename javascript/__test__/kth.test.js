'use strict';
const LinkedList = require('../code-challenges/codeChallengeClass07/linkedList');

describe('Linked List Test', () => {
  test('Can create  an empty linkedlist', () => {
    let linkedList = new LinkedList();
    expect(linkedList.head).toBeNull();
  });

test(' if k is greater than the length of linkedlist', () => {
  let linkedList = new LinkedList();
  linkedList.insertFirstNode(8);
  linkedList.append(10)
  linkedList.append(15)
  linkedList.append(20)
  linkedList.append(30)
  linkedList.insertLastNode(33)
  expect(linkedList.kthFromEnd(7)).toBe('Exception');
});
test('if  k and the length of the list are the same', () => {
  let linkedList = new LinkedList();
  linkedList.insertFirstNode(8);
  linkedList.append(10)
  linkedList.append(15)
  linkedList.append(20)
  linkedList.append(30)
  linkedList.insertLastNode(33)
  expect(linkedList.kthFromEnd(3)).toBe(20);
});
test('if k is less than 0 ', () => {
  let linkedList = new LinkedList();
  linkedList.insertFirstNode(8);
linkedList.append(10)
linkedList.append(15)
linkedList.append(20)
linkedList.append(30)
linkedList.insertLastNode(33)
  expect(linkedList.kthFromEnd(-1)).toBe('Exception');
});
test('if the linked list length =1 ', () => {
  let linkedList = new LinkedList();
//   linkedList.insertFirstNode(8);

// linkedList.append(10)
// linkedList.append(15)
// linkedList.append(20)
// linkedList.append(30)
linkedList.insertLastNode(33)
  expect(linkedList.kthFromEnd(1)).toBe(33);
});
test('if k is  in the middle of the linked list', () => {
  let linkedList = new LinkedList();
  linkedList.insertFirstNode(8);
linkedList.append(10)
linkedList.append(15)
linkedList.append(20)
linkedList.append(30)
linkedList.insertLastNode(33)
  expect(linkedList.kthFromEnd(2)).toBe(30);
});
});
