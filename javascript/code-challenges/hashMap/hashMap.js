'use strict';
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
  insert(value) {
    let node = new Node(value);
    let current = this.head;
    if (!current) {
      this.head = node;
      return;
    }
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }
}
class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
  }
  _hash(key) {
    let asciiSum = key.split('')
      .reduce((acc, char) => {
        return acc + char.charCodeAt(0);
      }, 0);
    return (asciiSum * 599) % this.size;
  }
  add(key, value) {
    let hash = this._hash(key);
    if (!this.buckets[hash]) {
      this.buckets[hash] = new LinkedList();
    }
    let data = { [key]: value };
    this.buckets[hash].insert(data);
  }
  contains(key) {
    let hash = this._hash(key);
    return !!this.buckets[hash];
  }
  get(key) {
    let hash = this._hash(key);
    let bucket = this.buckets[hash];
    let current = bucket.head;
    while (current) {
      if(current.value[key]) { return current.value[key]; }
      else if (current.next === null) { return null; }
      else { current = current.next; }
    }
  }
}
let table = new HashTable(1024);
table.add('Jason', 'boomshackalacka');
table.add('asonJ', 'banana');
module.exports = {
  Node,
  LinkedList,
  HashTable,
};
