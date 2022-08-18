class HashTable {
  constructor() {
    this.table = new Array(127);
    this.size = 0;
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }


//we should update the set method because we dont want to have index collision
  set(key, value) {
const index = this._hash(key);
if (this.table[index]) {
  for (let i = 0; i < this.table[index].length; i++) {
    // Find the key/value pair in the chain
    if (this.table[index][i][0] === key) {
      this.table[index][i][1] = value;
      return;
    }
  }
  // not found, push a new key/value pair
  this.table[index].push([key, value]);
} else {
  this.table[index] = [];
  this.table[index].push([key, value]);
}
this.size++;
}

// Next, update the get() method so that it will also check the second-level array with a for loop and return the right key/value pair:
get(key) {
const target = this._hash(key);
if (this.table[target]) {
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[target][i][0] === key) {
      return this.table[target][i][1];
    }
  }
}
return undefined;
}

// Finally, you need to update the remove() method so that it will loop over the second-level array and remove the array with the right key value using the splice() method:

remove(key) {
const index = this._hash(key);

if (this.table[index] && this.table[index].length) {
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[index][i][0] === key) {
      this.table[index].splice(i, 1);
      this.size--;
      return true;
    }
  }
} else {
  return false;
}
}
// With that, your HashTable class will be able to avoid any index number collision and store the key/value pair inside the second-level array.

// As a bonus, let's add a display() method that will display all key/value pairs stored in the Hash Table. You just need to use the forEach() method to iterate over the table and map() the values to a string as shown below:

display() {
this.table.forEach((values, index) => {
  const chainedValues = values.map(
    ([key, value]) => `[ ${key}: ${value} ]`
  );
  console.log(`${index}: ${chainedValues}`);
});
}


}

class HashTable {
constructor() {
  this.table = new Array(127);
  this.size = 0;
}

_hash(key) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash % this.table.length;
}

set(key, value) {
  const index = this._hash(key);
  if (this.table[index]) {
    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i][0] === key) {
        this.table[index][i][1] = value;
        return;
      }
    }
    this.table[index].push([key, value]);
  } else {
    this.table[index] = [];
    this.table[index].push([key, value]);
  }
  this.size++;
}

get(key) {
  const index = this._hash(key);
  if (this.table[index]) {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[index][i][0] === key) {
        return this.table[index][i][1];
      }
    }
  }
  return undefined;
}

remove(key) {
  const index = this._hash(key);

  if (this.table[index] && this.table[index].length) {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[index][i][0] === key) {
        this.table[index].splice(i, 1);
        this.size--;
        return true;
      }
    }
  } else {
    return false;
  }
}

display() {
  this.table.forEach((values, index) => {
    const chainedValues = values.map(
      ([key, value]) => `[ ${key}: ${value} ]`
    );
    console.log(`${index}: ${chainedValues}`);
  });
}
}

// Complete HashTable class implementation
// You can test the implementation by creating a new HashTable instance and do some insertion and deletion:

const ht = new HashTable();

ht.set("France", 111);
ht.set("Spain", 150);
ht.set("ǻ", 192);

ht.display();
// 83: [ France: 111 ]
// 126: [ Spain: 150 ],[ ǻ: 192 ]

console.log(ht.size); // 3
ht.remove("Spain");
ht.display();
// 83: [ France: 111 ]
// 126: [ ǻ: 192 ]

