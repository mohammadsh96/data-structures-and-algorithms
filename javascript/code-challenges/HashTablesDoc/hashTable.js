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
  append(value) {
      const node = new Node(value);
      if (!this.head) {
          this.head = node;
          return;
      }
      let current = this.head;
      while (current.next) {
          current = current.next;
      }
      current.next = node;
  }
  // returning the all the values  from the linkedList
  values() {
      let values = [];
      let current = this.head;
      while (current) {
          values.push(current.value);
          current = current.next;
      }
      return values;
  }
}

class Hashmap {
  constructor(size) {
      this.size = size;
      this.map = new Array(size);
  }
  makeHash(key) {
      const asciicodeSum = key.split("").reduce((acc, cur) => {
          return acc + cur.charCodeAt(0);
      }, 0);
      const multiPrime = asciicodeSum * 599;
      const theIndex = multiPrime % this.size;
      console.log(theIndex)
      return theIndex;
  }
  add(key, value) {
      const hash = this.makeHash(key);
      // 11 >>> [{'esam', '401d15 student'}>{}]
      // 11
      // 3 >> [{}>{}]
      if (!this.map[hash]) {
          this.map[hash] = new LinkedList();
          this.size++
      }
      this.map[hash].append({ [key]: value });
  }
  get(key) {
    const hash = this.makeHash(key);
    if (this.map[hash]) {
      console.log(key);
      console.log(this.size);

      for (let i = 0; i < this.size; i++) {
        console.log((this.map[hash]).head.value);
        const find =(this.map[hash]).head.value
        console.log(find);
        if (this.map[hash][key]=== key) {
          return this.map[hash];
        }
      }
    }
    return undefined;
    }
}

const myhashmap = new Hashmap(10);
myhashmap.add('esam', '401d15 student');
myhashmap.add('ahmad', '401d15 student');
myhashmap.add('mohamad', '401d15 student');
myhashmap.add('samah', '401d15 student');
myhashmap.add('laith', '401d15 student');
myhashmap.add('shihab', '401d15 student');
myhashmap.add('cat', '401d15 student');
myhashmap.add('dog', '401d15 student');

// console.log(myhashmap.map[8]);
// console.log(myhashmap.map[8].head.next);

// console.log(myhashmap);
myhashmap.map.forEach((ll) => {
  console.log(ll.values()[0][['cat']]);
})
console.log(myhashmap.get('laith'));
