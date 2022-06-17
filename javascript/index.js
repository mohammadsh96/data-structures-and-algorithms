'use strict';

const LinkedList =require("./code-challenges/codeChallengeClass08/ZipLinkedList")
const list1 =new LinkedList();
const list2 =new LinkedList();
list1.insert(1)
list1.insert(2)
list1.insert(3)
list2.insert(7);
list2.insert(8);
list2.insert(9);
list1.toString();
list2.toString();

function zipLists(list1, list2){

  let current_1 = list1.head;
  let current_2 = list2.head;
  let newList = new LinkedList();
  if (current_1) newList.head = current_1;
  else if (current_2) newList.head = current_2;
  else throw new Error(`Can NOT zip two empty linked list`);

  while (current_1 && current_2){
    let temp_1 = current_1.next;
    let temp_2 = current_2.next;
    current_1.next = current_2;
    if (temp_1) current_2.next = temp_1;

    current_1 = temp_1;
    current_2 = temp_2;

  }
  console.log("after merge >>>>");
  newList.toString()
  return newList;
}


zipLists(list1, list2)


 
 
