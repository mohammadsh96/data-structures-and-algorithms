# Singly Linked List

A linked list is a way to store a collection of elements. Like an array these can be character or integers. Each element in a linked list is stored in the form of a node.
A node is a collection of two sub-elements or parts. A data part that stores the element and a next part that stores the link to the next node.
A linked list is formed when many such nodes are linked together to form a chain. Each node points to the next node present in the order. The first node is always used as a reference to traverse the list and is called HEAD. The last node points to NULL.

## Challenge

my code :[LinkedList.js file](LinkeList.js)
creating a single Linked List with some methods to insert Data and seraching inside the LInked List data
and another Method to print all the data in the Linked List

and i add few other methods because i was practicing on it

## Approach & Efficiency
i tried to make the Big O as lowest as i can by using while loop instade of for loop as example
and making my code shorter as i could

## API
-insertFirstNode method : we need to check if the Linked List is empty or not so we can add the Head as a new Node if its empty.
-includes method : we need to loop throw the LinkedList and compare if the current node = to the value i am searching for
and return true if exist and false if else
-toString method :starting from the head we declare a var called output with initialize with "" empty string and looping thow each item in the List and store each node in the output variable with the previous value of output and print it with console.log



[back to challenge README file ](../../README.md)







