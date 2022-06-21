'use strict';

// const LinkedList =require("./code-challenges/codeChallengeClass08/ZipLinkedList")
// const list1 =new LinkedList();
// const list2 =new LinkedList();
// list1.insert(1)
// list1.insert(2)
// list1.insert(3)
// list2.insert(7);
// list2.insert(8);
// list2.insert(9);
// list1.toString();
// list2.toString();

// function zipLists(list1, list2){

//   let current_1 = list1.head;
//   let current_2 = list2.head;
//   let newList = new LinkedList();
//   if (current_1) newList.head = current_1;
//   else if (current_2) newList.head = current_2;
//   else throw new Error(`Can NOT zip two empty linked list`);

//   while (current_1 && current_2){
//     let temp_1 = current_1.next;
//     let temp_2 = current_2.next;
//     current_1.next = current_2;
//     if (temp_1) current_2.next = temp_1;

//     current_1 = temp_1;
//     current_2 = temp_2;

//   }
//   console.log("after merge >>>>");
//   newList.toString()
//   return newList;
// }


// zipLists(list1, list2)
// console.log(list1,list2);
// mergeSortedLL(list1, list2)
const Stack = require("./code-challenges/stack-and-queue/stack")
let myStack = new Stack();
console.log(" 👀↓↓↓↓↓↓👀 ")
console.log("          ")
console.log("testing Stack methods ");
console.log("          ")
console.log(" 1- Testing isEmpty method before enqueue ✔✔✔ ");
myStack.isEmpty();
console.log(" 2- Testing Push method  ✔✔✔");
  myStack.push( 5 );
  myStack.printElements();
  myStack.push( 10 );
  myStack.printElements();
  myStack.push( 12);
  myStack.printElements();
  myStack.push( 20 );
  myStack.printElements();
  myStack.push( 35 );
  myStack.printElements();
  console.log("          ")
  console.log(" 3- Testing Peek method ✔✔✔ ");
  console.log("          ")
  console.log("this is the top of the stack   : "  , myStack.peek());
  console.log("          ")
  console.log(" 4- Testing pop method ✔✔✔  ");
  console.log("          ")
  myStack.pop();
  console.log("          ")
  console.log(" the head removed ✔✔✔ ");
  console.log("          ")
  myStack.printElements();
// const Queue = require("./code-challenges/stack-and-queue/queue")
// console.log("          ")
// console.log("testing Queue methods ");
// console.log(" 👀↓↓↓↓↓↓👀 ")
// let myQueue= new Queue();
// console.log(" 1- Testing isEmpty method before enqueue ");
// console.log("↓↓↓↓↓↓");
// myQueue.isEmpty();
// myQueue.enqueue(10);
// myQueue.enqueue(20);
//  myQueue.enqueue(30);
// console.log("2- this is head by using peek : " , myQueue.peek());
// console.log("          ")
//  myQueue.enqueue(40);
// myQueue.dequeue();
// console.log(" ↓↓↓↓↓↓  this is current Queue class")
// console.log("          ")
// console.log(" ↓↓↓↓↓↓  this undefined because i removed the head by dequeue")
// myQueue.toString();
// console.log("          ")
// console.log(" 3- Testing is empty method after enqueue ");
// console.log("↓↓↓↓↓↓");
// myQueue.isEmpty();
