const LinkedList =require("../javascript/code-challenges/ New-Implementation/LinkeList")
const Node =require("./code-challenges/ New-Implementation/Node")

const linkedList = new LinkedList();
linkedList.insertFirstNode(5);
linkedList.insertFirstNode(8);
linkedList.insertLastNode(2);
linkedList.insertFirstNode(90);
linkedList.insertNodeAtIndex(34, 1);
linkedList.insertNodeAtIndex(57, 4);
linkedList.insertNodeAtIndex(33, 4);
// linkedList.printListData();
// linkedList.getNodeAtIndex(2);
// linkedList.getNodeAtIndex(4);
// linkedList.removeNodeAtIndex(2);
linkedList.toString();

// linkedList.clear();

// linkedList.printListData();
linkedList.includes(5);
linkedList.includes(8);
linkedList.includes(3);
linkedList.includes(4);
