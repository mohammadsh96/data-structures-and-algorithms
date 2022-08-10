"use strict";

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  //to insert one node only  after the head or the head if  it was null
  insertFirstNode(value) {
    if (!this.head) {
      this.head = new Node(value);
      this.head.next = null;
      this.length++;
      return this.head;
    } else {
      let newNode = new Node(value);
      this.head.next = newNode;
      newNode.next = null;
      this.length++;
      return newNode;
    }
  }

  insertNextNode(value) {
    if (this.length > 1) {
      let currentNode = this.head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      let newNode = new Node(value);
      currentNode.next = newNode;
      newNode.next = null;
      return newNode;
    } else {
      console.log("errorrrrr");
    }
  }
  sumOfNodes() {
    if (!this.head) {
      return 0;
    } else {
      let currentNode = this.head;
      let sum = 0;
      while (currentNode) {
        if (typeof currentNode.value === "number") {
          sum = sum + currentNode.value;
        }
        currentNode = currentNode.next;
      }
      let output = ` sum of nodes = ${sum} `;

      return output;
    }
  }

  toString() {
    let currentNode = this.head;
    let output = "";

    while (currentNode) {
      output = ` ${output}${currentNode.value} ->  `;

      currentNode = currentNode.next;
    }
    console.log(`${output}null`);
  }
}
let ll = new LinkedList();

ll.insertFirstNode(6);
ll.insertFirstNode(7);
ll.insertNextNode(8);
ll.insertNextNode("mohammad");
ll.insertNextNode(9);
ll.toString();

console.log(ll.sumOfNodes());
