'use strict';
const NewNode = require('../Extending an Implementation/NewNode');

class LinkedList {
  constructor() {
    //this.root = null
    this.head   = null;
    this.tail = null
    this.length = 0;
  }
  //in each method what do you need to keep track of / what node and when you get tot he desired node do you need to make a new node and assign its next to it and remove or change th enext of the previous node

  insertFirstNode(data) {
    this.head = new NewNode(data, this.head);
    this.length++;
}

  insertLastNode(data) {
    const newNode = new NewNode(data);
    if (!this.head) {
        this.head = newNode;
    } else {
        let currentNode = this.head;

        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = newNode;
    }
    this.head = newNode;
    this.length++;
}

toString() {
  let currentNode = this.head;
  let output ='';

  while (currentNode) {
 output = ` ${output}${currentNode.data} ->  ` ;

      currentNode = currentNode.next;
  }
  console.log(`${output}null`);
  // console.log(` this is the tail ${this.tail.data}`);
}

  append(data) {

    if(!this.head) {

      this.head = new NewNode(data);
      this.length = this.length + 1;
    }else{
      let current = this.head;


      while(current.next) {
        current = current.next;
      }

      current.next = new NewNode(data);
      this.length = this.length + 1;

    }
  }

  insertBefore(data, newValue) {
    let newNode = new NewNode(newValue);
    let currentNode = this.head;
    let previousNode = null;
    while (currentNode) {
      if (currentNode.data === data) {
        if (previousNode === null) {
          this.head = newNode;
          newNode.next = currentNode;
        } else {
          previousNode.next = newNode;
          newNode.next = currentNode;
        }
        this.length++;
this.tail=newNode;

        return;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
  }
  insertLastNode(data) {

    const newNode = new NewNode(data);

    if (!this.head) {
        this.head = newNode;
    } else {
        let currentNode = this.head;

        while (currentNode.next) {
            currentNode = currentNode.next;
        }

        currentNode.next = newNode;
    }
    this.tail=newNode;

    this.length++;
}


  insertAfter(data, newValue) {
    let newNode = new NewNode(newValue);
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.data === data) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        this.length++;
        this.tail=newNode ;
        return;
      }
      currentNode = currentNode.next;
    }
  }
}

module.exports = LinkedList;
