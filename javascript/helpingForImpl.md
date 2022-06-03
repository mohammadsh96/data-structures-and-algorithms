
```js
// In this article, we will be implementing the LinkedList data structure in Javascript. LinkedList is the dynamic data structure, as we can add or remove elements at ease, and it can even grow as needed. Just like arrays, linked lists store elements sequentially, but don’t store the elements contiguously like an array.
// Now, Let’s see an example of a Linked List Node:


// User defined class node
class Node {
    // constructor
    constructor(element)
    {
        this.element = element;
        this.next = null
    }
}
// As in the above code, we define a class Node having two properties: element and next. Element holds the data of a node while next holds the pointer to the next node, which is initialized to the null value.
// Now, let’s see an implementation of the Linked List class:


// linkedlist class
class LinkedList {
    constructor()
    {
        this.head = null;
        this.size = 0;
    }

    // functions to be implemented
    // add(element)
    // insertAt(element, location)
    // removeFrom(location)
    // removeElement(element)

    // Helper Methods
    // isEmpty
    // size_Of_List
    // PrintList
}
// The above example shows a Linked List class with a constructor and a list of methods to be implemented. Linked List class has two properties: i.e. head and size, where the head stores the first node of a List, and size indicates the number of nodes in a list.
// Let’s implement each of these functions:


// 1. add(element) – It adds an element at the end of the list.


// adds an element at the end
// of list
add(element)
{
    // creates a new node
    var node = new Node(element);

    // to store current node
    var current;

    // if list is Empty add the
    // element and make it head
    if (this.head == null)
        this.head = node;
    else {
        current = this.head;

        // iterate to the end of the
        // list
        while (current.next) {
            current = current.next;
        }

        // add node
        current.next = node;
    }
    this.size++;
}
// In the order to add an element at the end of the list we consider the following :

// If the list is empty then add an element and it will be head
// If the list is not empty then iterate to the end of the list and add an element at the end of the list
// 2. insertAt(element, index) – It inserts an element at the given index in a list.

// insert element at the position index
// of the list
insertAt(element, index)
{
    if (index < 0 || index > this.size)
        return console.log("Please enter a valid index.");
    else {
        // creates a new node
        var node = new Node(element);
        var curr, prev;

        curr = this.head;

        // add the element to the
        // first index
        if (index == 0) {
            node.next = this.head;
            this.head = node;
        } else {
            curr = this.head;
            var it = 0;

            // iterate over the list to find
            // the position to insert
            while (it < index) {
                it++;
                prev = curr;
                curr = curr.next;
            }

            // adding an element
            node.next = curr;
            prev.next = node;
        }
        this.size++;
    }
}
// In order to add an element at the given index of the list we consider three conditions as follows:

// if the index is zero we add an element at the front of the list and make it head
// If the index is the last position of the list we append the element at the end of the list
// if the index is between 0 or size – 1 we iterate over to the index and add an element at that index
// 3. removeFrom(index) – It removes and returns an element from the list from the specified index

// removes an element from the
// specified location
removeFrom(index)
{
    if (index < 0 || index >= this.size)
        return console.log("Please Enter a valid index");
    else {
        var curr, prev, it = 0;
        curr = this.head;
        prev = curr;

        // deleting first element
        if (index === 0) {
            this.head = curr.next;
        } else {
            // iterate over the list to the
            // position to removce an element
            while (it < index) {
                it++;
                prev = curr;
                curr = curr.next;
            }

            // remove the element
            prev.next = curr.next;
        }
        this.size--;

        // return the remove element
        return curr.element;
    }
}
// In order to remove an element from the list we consider three conditions:

// If the index is 0 then we remove the head and make the next node head of the list
// if the index is size – 1 then we remove the last element from the list and make prev the last element
// if it’s in between 0 to size – 1 we remove the element by using prev and the current node
// 4. removeElement(element) – This method removes element from the list. It returns the removed element, or if it’s not found it returns -1.


// removes a given element from the
// list
removeElement(element)
{
    var current = this.head;
    var prev = null;

    // iterate over the list
    while (current != null) {
        // comparing element with current
        // element if found then remove the
        // and return true
        if (current.element === element) {
            if (prev == null) {
                this.head = current.next;
            } else {
                prev.next = current.next;
            }
            this.size--;
            return current.element;
        }
        prev = current;
        current = current.next;
    }
    return -1;
}
// The above method is just a modification of removeFrom(index), as it searches for an element and removes it, rather than removing it from a specified location

//  Helper Methods

// Let’s declare some helper methods which are useful while working with LinkedList.


// 1. indexOf(element) – it returns the index of a given element if the element is in the list.


// finds the index of element
indexOf(element)
{
    var count = 0;
    var current = this.head;

    // iterate over the list
    while (current != null) {
        // compare each element of the list
        // with given element
        if (current.element === element)
            return count;
        count++;
        current = current.next;
    }

    // not found
    return -1;
}
// In this method, we iterate over the list to find the index of an element. If it is not present in the list it returns -1 instead.

// 2. isEmpty() – it returns true if the list is empty.

// checks the list for empty
isEmpty()
{
    return this.size == 0;
}
// In this method we check for the size property of the LinkedList class, and if it’s zero then the list is empty.

// 3. size_of_list() – It returns the size of list

// gives the size of the list
size_of_list()
{
    console.log(this.size);
}
3. printList() – It prints the contents of the list.

// prints the list items
printList()
{
    var curr = this.head;
    var str = "";
    while (curr) {
        str += curr.element + " ";
        curr = curr.next;
    }
    console.log(str);
}
// In this method, we iterate over the entire list and concatenate the elements of each node and print it.

// Note: Different helper methods can be declared in the LinkedList class as required.


// Implementation

// Now, let’s use the LinkedList class and its different methods described above.

// creating an object for the
// Linkedlist class
var ll = new LinkedList();

// testing isEmpty on an empty list
// returns true
console.log(ll.isEmpty());

// adding element to the list
ll.add(10);

// prints 10
ll.printList();

// returns 1
console.log(ll.size_of_list());

// adding more elements to the list
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);

// returns 10 20 30 40 50
ll.printList();

// prints 50 from the list
console.log("is element removed ?" + ll.removeElement(50));

// prints 10 20 30 40
ll.printList();

// returns 3
console.log("Index of 40 " + ll.indexOf(40));

// insert 60 at second position
// ll contains 10 20 60 30 40
ll.insertAt(60, 2);

ll.printList();

// returns false
console.log("is List Empty ? " + ll.isEmpty());

// remove 3rd element from the list
console.log(ll.removeFrom(3));

// prints 10 20 60 40
ll.printList();
Complete Code:


class Node {
    // constructor
    constructor(element) {
        this.element = element;
        this.next = null
    }
}
// linkedlist class
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // adds an element at the end
    // of list
    add(element) {
        // creates a new node
        var node = new Node(element);

        // to store current node
        var current;

        // if list is Empty add the
        // element and make it head
        if (this.head == null)
            this.head = node;
        else {
            current = this.head;

            // iterate to the end of the
            // list
            while (current.next) {
                current = current.next;
            }

            // add node
            current.next = node;
        }
        this.size++;
    }

    // insert element at the position index
    // of the list
    insertAt(element, index) {
        if (index < 0 || index > this.size)
            return console.log("Please enter a valid index.");
        else {
            // creates a new node
            var node = new Node(element);
            var curr, prev;

            curr = this.head;

            // add the element to the
            // first index
            if (index == 0) {
                node.next = this.head;
                this.head = node;
            } else {
                curr = this.head;
                var it = 0;

                // iterate over the list to find
                // the position to insert
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                // adding an element
                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }

    // removes an element from the
    // specified location
    removeFrom(index) {
        if (index < 0 || index >= this.size)
            return console.log("Please Enter a valid index");
        else {
            var curr, prev, it = 0;
            curr = this.head;
            prev = curr;

            // deleting first element
            if (index === 0) {
                this.head = curr.next;
            } else {
                // iterate over the list to the
                // position to removce an element
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                // remove the element
                prev.next = curr.next;
            }
            this.size--;

            // return the remove element
            return curr.element;
        }
    }

    // removes a given element from the
    // list
    removeElement(element) {
        var current = this.head;
        var prev = null;

        // iterate over the list
        while (current != null) {
            // comparing element with current
            // element if found then remove the
            // and return true
            if (current.element === element) {
                if (prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return current.element;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }


    // finds the index of element
    indexOf(element) {
        var count = 0;
        var current = this.head;

        // iterate over the list
        while (current != null) {
            // compare each element of the list
            // with given element
            if (current.element === element)
                return count;
            count++;
            current = current.next;
        }

        // not found
        return -1;
    }

    // checks the list for empty
    isEmpty() {
        return this.size == 0;
    }

    // gives the size of the list
    size_of_list() {
        console.log(this.size);
    }


    // prints the list items
    printList() {
        var curr = this.head;
        var str = "";
        while (curr) {
            str += curr.element + " ";
            curr = curr.next;
        }
        console.log(str);
    }

}

// creating an object for the
// Linkedlist class
var ll = new LinkedList();

// testing isEmpty on an empty list
// returns true
console.log(ll.isEmpty());

// adding element to the list
ll.add(10);

// prints 10
ll.printList();

// returns 1
console.log(ll.size_of_list());

// adding more elements to the list
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);

// returns 10 20 30 40 50
ll.printList();

// prints 50 from the list
console.log("is element removed ?" + ll.removeElement(50));

// prints 10 20 30 40
ll.printList();

// returns 3
console.log("Index of 40 " + ll.indexOf(40));

// insert 60 at second position
// ll contains 10 20 60 30 40
ll.insertAt(60, 2);

ll.printList();

// returns false
console.log("is List Empty ? " + ll.isEmpty());

// remove 3rd element from the list
console.log(ll.removeFrom(3));

// prints 10 20 60 40
ll.printList();
// Output:

//  true
//  10
//  1
//  undefined
//  10 20 30 40 50
//  is element removed ?50
//  10 20 30 40
//  Index of 40 3
//  10 20 60 30 40
//  is List Empty ? false
//  30
//  10 20 60 40

```
