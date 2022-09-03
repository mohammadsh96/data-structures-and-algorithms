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
    if (this.length >= 1) {
      let currentNode = this.head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      let newNode = new Node(value);
      currentNode.next = newNode;
      newNode.next = null;
      this.length++;
      return newNode;
    } else {
      console.log("errorrrrr");
    }
  }
  insertNodeAtIndex(value, index) {
    if (this.length < index) {
      console.log("index is greater than size of list");
      return null;
    }

    const node = new Node(value);

    // if (!this.head) {
    //     // this.head = node;
    // } else
    if (index === 0) {
      const head = this.head;
      this.head = node;
      node.next = head;
    } else {
      let previousNode;
      let currentNode = this.head;
      let indexCounter = 0;

      while (indexCounter < index) {
        previousNode = currentNode;
        currentNode = previousNode.next;

        indexCounter++;
      }

      previousNode.next = node;
      node.next = null;

      if (currentNode) {
        node.next = currentNode;
      }
    }

    this.length++;
  }
  getByIndex(index) {
    // contact me !!!
    // linkedIn account : https://www.linkedin.com/in/mohammad-alshraideh-67820b186/

    let current = this.head;
    let currentIndex = 0;
    while (current.next) {
      if (currentIndex == index) {
        console.log(current.value);

        return current;
      }
      currentIndex++;

      current = current.next;
    }
  }
  deleteAnyNode(value) {
    // contact me !!!
    // linkedIn account : https://www.linkedin.com/in/mohammad-alshraideh-67820b186/

    if (!this.head) return null;
    let current = this.head;

    while (current.next) {
      if (current.value == value) {
        current.value = current.next.value;
        current.next = current.next.next;
      }
      current = current.next;
    }
    return current;
  }

  remove(data, position) {
    position = 0;
    if (this.length === 0) {
      console.log("List is already empty");
      return;
    }
    this.length--;
    let currNode = this.head;
    // Condition 1
    if (position <= 0) {
      this.head = this.head.next;
    }
    // Condition 2
    else if (position >= this.length - 1) {
      while (currNode.next.next != null) {
        currNode = currNode.next;
      }
      currNode.next = null;
    }
    // Condition 3
    else {
      let iter = 0;
      while (iter < position) {
        currNode = currNode.next;
        iter++;
      }
      currNode.next = currNode.next.next;
    }
  }
  sumOfNodes(LL) {
    // contact me !!!
    // linkedIn account : https://www.linkedin.com/in/mohammad-alshraideh-67820b186/

    if (!this.head) return 0;
    let sum = 0;
    let current = this.head;
    while (current) {
      if (typeof current.value == "number") {
        sum = sum + current.value;
      }
      current = current.next;
    }
    return sum;
  }

  countString() {
    // contact me !!!
    // linkedIn account : https://www.linkedin.com/in/mohammad-alshraideh-67820b186/

    if (!this.head) return "the LL is Empty";
    let res = [];
    let count = 0;
    let current = this.head;
    while (current.next) {
      if (typeof current.value === "string") {
        res.push(current.value);

        count++;
      }

      current = current.next;
    }
    if (count > 1) {
      console.log(
        `there are  : ${count}  String in the LL and they are :  (${res})`
      );
    }
    if (count <= 1) {
      console.log(
        `there is  only one  String in the LL and he/she is : (${res})`
      );
    }
    return count;
  }

  clear(){
this.head =null
  }
  incloudes(value) {
    if (!this.head) return "no head";
    let current = this.head;
    let state = true;
    while (current) {
      if (current.value === value) {
       return true
      } else {state = false;}
      current = current.next;
    }
    return state;
  }
reverseLL(){
  let current =this.head
  let previousNode =null ;

  while(current){
  let nextNode = current.next;
current.next = previousNode;
 previousNode =current
current =nextNode;

}
return previousNode;




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

  reverse() {
   let head =this.head
    let node = head,
        previous,
        tmp;

    while (node) {
      // save next before we overwrite node.next!
      tmp = node.next;

      // reverse pointer
      node.next = previous;

      // step forward in the list
      previous = node;
      node = tmp;
    }

    return previous;
  }


}
let ll = new LinkedList();

// ll.insertFirstNode(6);
ll.insertFirstNode(7);
ll.insertNextNode(8);
// ll.insertNextNode("someone");
// ll.insertNextNode("mohammad");
ll.insertNextNode(9);
ll.insertNextNode(45);

ll.toString();
ll.reverseLL();
ll.toString();

// ll.clear();
// ll.reverse()
// ll.toString()
// ll.getByIndex(0);

// console.log(ll.incloudes(null));

// console.log(ll.sumOfNodes());
// sumOfNodes(LL) {
//   // contact me !!!
// // linkedIn account : https://www.linkedin.com/in/mohammad-alshraideh-67820b186/

// if (!this.head) return 0;
// let sum = 0;
// let current = this.head;
// while (current) {
//   if (typeof current.value == "number") {
//     sum = sum + current.value;
//   }
//   current = current.next;
// }
// return sum;
// }
//  reverseLinkedList(list, previous){

//   //We need to use the the current setting of
//   //list.next before we change it. We could save it in a temp variable,
//   //or, we could call reverseLinkedList recursively
//   console.log(list);
//   if(list !== null && list.next !==null){
//     reverseLinkedList(list.next, list);
//   }
//   console.log("after recursion!")
//   console.log(list);
//   //Everything after 'list' is now reversed, so we don't need list.next anymore.
//   //We passed previous in as an argument, so we can go ahead and set next to that.
//   list.next = previous;
//  }
// function reverseLL(head){
//   let prev;
//   let next ;

//   while(head !==null){
//     next =head.next
//   head.next =prev;
//   prev=head;
//   head = next;


//   }
//   return prev;




//   }
//   reverseLL(ll)

