'use strict';
const Node = require('./node')

class Stack {
  constructor() {
      this.top = null;
  }

  push(value) {
      let node = new Node(value);
      if (!this.top) {
          this.top = node;
          node.next = null;

      }
      else {
          node.next = this.top;
          this.top = node;

      }

  }
  pop() {
      if(this.top){
        let top2 = this.top;
        this.top = this.top.next;
        return top2.value;


      }else{
        throw new Error(" Can not pop() when Stack is empty! ")

      }
  }
  peek() {
      if (!this.top) throw new Error(" Can not peek() when Stack is empty! ")
      return this.top.value;
  }
  isEmpty(){
      if(!this.top) {
          console.log(true)
           return true;
      }
      else {
          console.log(false);
          return false;}
  }
//   printElements() {

//     let currentNode = this.top;
//     let output ='';

//     while (currentNode) {
//    output = ` ${output}${currentNode.value} ->  ` ;

//         currentNode = currentNode.next;
//     }
//     console.log(`${output}null`);
// }
}

module.exports = Stack;
