class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.length = 0;
    }
  
    insertFirstNode(value) {
      const node = new Node(value);
  
      if (!this.head) {
        this.head = node;
        return this;
      }
  
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      return this;
    }
  
    insertLastNode(value) {
      const node = new Node(value);
  
      if (!this.head) {
        this.head = node;
        return this;
      }
  
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      return this;
    }
  
    getAt(index) {
      let current = this.head;
      let nodeIndex = 0;
  
      while (current) {
        if (nodeIndex === index) {
          return current.value;
        }
        current = current.next;
        nodeIndex++;
      }
      return null;
    }
  
    deleteAt(index) {
      if (!this.head) {
        return null;
      }
  
      if (index === 0) {
        this.head = this.head.next;
        return this;
      }
  
      let current = this.head;
      let previous = null;
      let nodeIndex = 0;
  
      while (current && nodeIndex !== index) {
        previous = current;
        current = current.next;
        nodeIndex++;
      }
  
      if (current) {
        previous.next = current.next;
      }
      return this;
    }
  
    log() {
      let current = this.head;
      while (current) {
        console.log(current);
        current = current.next;
      }
    }
  }
  
  // Example usage
  const ll = new LinkedList();
  ll.insertFirstNode(5);
  ll.insertFirstNode(10);
  ll.insertFirstNode(15);
  ll.insertLastNode(20);
  console.log(ll.getAt(2)); // Output: 15
  ll.deleteAt(1);
  ll.log();
  