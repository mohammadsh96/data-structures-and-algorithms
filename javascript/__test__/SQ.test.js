'use strict';
const Stack = require('../code-challenges/stack-and-queue/stack');
const queue = require('../code-challenges/stack-and-queue/queue');


describe('Stack test', () => {
  test('Can create  an empty Stack', () => {
    let SS = new Stack();
    expect(SS.top).toBeNull();
  });
test('can check if it is Empty or not ' ,()=>{
  let SS = new Stack();
  expect(SS.top).toBeNull();
});

test('can push value into the top proprty if top is has a value' ,()=>{
  let SS = new Stack();
  SS.push(1);
  SS.push(2);
  expect(SS.top.value).toEqual(2);

});
test('can push value into the top proprty if top is null ' ,()=>{
  let SS = new Stack();
  SS.push(1);
  expect(SS.top.value).toEqual(1);

});
test('can pop the top and return the value of it and  assign new top' ,()=>{
  let SS = new Stack();
  SS.push(1);
  SS.push(2);
  SS.push(3);
  SS.pop();
  expect(SS.pop()).toEqual(2);

});
// test('can not pop the top if it was null' ,()=>{
//   let SS = new Stack();
//   SS.pop();
//   if(!this.top) throw new Error(" Can not pop() when Stack is empty! ")
//   expect(() => {
//     SS.pop();
//   }).toThrow(" Can not pop() when Stack is empty! ")

// });
test('peek cmoethod can return the correct top' ,()=>{
  let SS = new Stack();
  SS.push(1);
  SS.push(2);
  SS.push(3);
  SS.pop();
  SS.peek();
  expect(SS.peek()).toEqual(2);

});
test('test isEmpty method' ,()=>{
  let SS = new Stack();
  SS.isEmpty();

  expect(SS.isEmpty()).toBeTruthy();

});
test('test isEmpty method' ,()=>{
  let SS = new Stack();
  SS.push(1);
  SS.push(2);
  SS.push(3);
  SS.isEmpty();

  expect(SS.isEmpty()).toBeFalsy();

});
});
describe('Queue test', () => {
  test('Can create  an empty Queue', () => {
    let QQ = new queue();
    expect(QQ.head).toEqual(0);
  });
test('can check if it is Empty or not ' ,()=>{
  let QQ = new queue();
  expect(QQ.isEmpty()).toBeTruthy();
});

test('can encode value into the rear proprty' ,()=>{
  let QQ = new queue();
  QQ.enqueue(1);
  QQ.enqueue(2);
  expect(QQ.enqueue(2)).toEqual(2);

});
test('can dequeue remove the front value' ,()=>{
  let QQ = new queue();
  QQ.enqueue(1);
  QQ.enqueue(2);
  QQ.dequeue();
  expect(QQ.dequeue()).toEqual(2);

});
test('peek can return the correct value of front' ,()=>{
  let QQ = new queue();
  QQ.enqueue(1);
  QQ.enqueue(2);
  QQ.dequeue();
  expect(QQ.peek()).toEqual(2);

});
test('can check if it is Empty or not ' ,()=>{
  let QQ = new queue();
  QQ.enqueue(1);
  QQ.enqueue(2);
  expect(QQ.isEmpty()).toBeFalsy();
});
test('peek can return the correct value of front' ,()=>{
  let QQ = new queue();

  expect(QQ.peek()).toBe();

});



});

