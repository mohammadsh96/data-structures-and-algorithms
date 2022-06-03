'use strict';
const Node = require('./Node');

class LinkedList {
    constructor() {
        this.head = null;
        this.length =0 ;

        // tail
    }

    insertFirstNode(data) {
      this.head = new Node(data, this.head);
      this.length++;
  }
  insertLastNode(data) {

    const newNode = new Node(data);

    if (!this.head) {
        this.head = newNode;
    } else {
        let currentNode = this.head;

        while (currentNode.next) {
            currentNode = currentNode.next;
        }

        currentNode.next = newNode;
    }

    this.length++;
}
insertNodeAtIndex(data, index) {
  if (this.length < index) {
      console.log("index is greater than size of list");
      return null ;
  }

  const node = new Node(data);

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
getNodeAtIndex(index) {
  if (index > this.length) {
      console.log("index is greater than size of list");
      return null;
  }

  let currentNode = this.head;
  let counter = 0;

  while (counter < index) {
      currentNode = currentNode.next;
      counter++;
  }
  // console.log(`Node data at index(${index}) is ${currentNode.data}`);
return currentNode.data ;

}
includes(values) {
  let isIncludes = false;
  let currentNode = this.head;
  while (currentNode) {

    if (currentNode.data === values) {
      isIncludes = true;
}
      currentNode = currentNode.next;
  }
  return isIncludes;
}

removeNodeAtIndex(index) {
  if (index > this.length) {
      console.log("index is greater than size of list");
      return null;
  }

  if (!this.head) {
      console.log("List is empty");
      return null;
  }

  if (index === 0) {
      this.head = null;
  } else {
      let previousNode;
      let currentNode = this.head;
      let counter = 0;

      while (counter < index) {
          previousNode = currentNode;
          currentNode = previousNode.next;

          counter++;
      }

      if (currentNode.next) {
          previousNode.next = currentNode.next;
      }
      //  else {
      //     previousNode.next = null;
      // }
  }

  this.size--;

  console.log(
      `Removed node at index(${index}) and current linked list is: })`
  );
}
clear() {
  //for each of the nodes, remove at index

  let index = 0;

  while (index < this.length) {
      console.log(`removing at index: ${index}`);
      this.removeNodeAtIndex(index);
      this.length--;
      index++;
  }
}
// printListData() {
//   let currentNode = this.head;
//   let output ='';

//   while (currentNode) {
//  output = ` ${output}${currentNode.data} ->  ` ;

//       currentNode = currentNode.next;
//   }
//   console.log(`${output}null`);
// }
toString() {
  let currentNode = this.head;
  let output ='';

  while (currentNode) {
 output = ` ${output}${currentNode.data} ->  ` ;

      currentNode = currentNode.next;
  }
  console.log(`${output}null`);
}


}




module.exports=LinkedList ;
