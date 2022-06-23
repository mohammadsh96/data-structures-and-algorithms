'use strict';
const Node = require('../stack-and-queue/node')


  class PseudoQueue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.length = 0;
    }
    isEmpty() {
        if (this.front === null || this.length === 0) {
            return true;
        } else {
            return false;
        }


    }
    enqueue(value) {

        let node = new Node(value);
        if (!this.front) {
          this.front = node;
            node.next = null;
            this.length++
        }
        else {
            node.next = this.front;
            this.front = node;
             this.length++
        }
    }
    dequeue() {
        if (this.isEmpty()) {
            return 'the queue is empty';
        } else {
          let temp =this.front;
            for (let index = 0; index < this.length; index++) {
              temp =temp.next;
if(temp.next.next == null ){
  let dequeued = temp.next;
temp.next =null;
this.length--
  return dequeued.value;
}

            }
        }
    }

    printElements() {

      let currentNode = this.front;
      let output ='';

      while (currentNode) {
     output = ` ${output}${currentNode.value} ->  ` ;

          currentNode = currentNode.next;
      }
      console.log(`${output}null`);
      return true
  }
}


module.exports = PseudoQueue;
