'use strict';
const Node = require("./node")

class Queue {
  constructor() {
    this.elements = {};
    this.head = 0;
    this.tail = 0; //this.length

  }
  enqueue(element) {

this.elements[this.tail] = element;
    this.tail++;
    return element;


  }
  dequeue() {
    const item = this.elements[this.head];
    delete this.elements[this.head];
    this.head++;
    return item;
  }
  peek() {
    return this.elements[this.head];
  }
  get length() {
    return this.tail - this.head;
  }
  get isEmpty() {
    return this.length === 0;
  }
  isEmpty(){
   
    if(this.tail === 0 ) {
        console.log(true)
         return true;
    }
    else {
        console.log(false);
        return false;}
}

  toString() {


    for ( let index = 0; index < this.tail; index++) {
console.log(this.elements[index]);

    }

console.log("this is the Back of the Queue  : " , this.elements[this.tail -1 ]);

console.log("this is the Front of the Queue  : " , this.elements[this.head ]);
  }
}

module.exports = Queue;
