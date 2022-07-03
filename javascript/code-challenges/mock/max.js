class Node{
  constructor(value, next=null){
    this.value = value;
    this.next = next;
  }
}
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
getMax(){

let current=this.top
let maxElement=current.next;
while(maxElement.value !== null){
if(maxElement.value < maxElement.next.value){
maxElement.value= maxElement.next.value;
return maxElement.value;

}
else{

return maxElement.value;

}
}}
}

const ll =new Stack();

ll.push(5);
ll.push(21);
ll.push(20);
ll.push(17);
console.log(ll.getMax());
// ll.getMax()
