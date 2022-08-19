class HashTable {
  constructor(size=50) {
    this.values = {};
    this.length =  0;
    this.size =  size;
  }

  calculateHash(key) {
    return key.toString().length % this.size;
  }

  add(key, value) {
    const hash = this.calculateHash(key);
    if (!this.values.hasOwnProperty(hash)){
      this.values[hash] = {};
    }
    if (!this.values[hash].hasOwnProperty(key)) {
       this.length++;
    }
    this.values[hash][key] =[key , value];
  }

  search(key) {
     const hash = this.calculateHash(key);
     if (this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
       return this.values[hash][key];
     } else {
       return null;
     }
  }
  getItem(key){
const hash =this.calculateHash(key)
if(this.values[hash][key]){
  return this.values[hash][key];
}else return null;


  }
 contains(key){
    const hash =this.calculateHash(key)
    if(this.values[hash][key]){
      return true 
    }else return false;
    
    
      }

  removeItem(key){
    const hash =this.calculateHash(key)
if(!this.values[hash]){return null}
    if(this.values[hash][key]){
      delete this.values[hash][key]
      return "deleted";
    }else{
 return null;
    }
    
    
      }

  keys(){
    let list =[]
    for (const key in this.values) {
      if (this.values.hasOwnProperty(key)) {
        
        list.push(key);
      }
    }
    console.log(list);
    return `list of keys : ${list}`;
  }
  
}
    

//create object of type hash table
const ht = new HashTable();
//add data to the hash table ht
ht.add("Canada", "300");
ht.add("Germany", "100");
ht.add("Italy", "100");
ht.add("Amman", "100");

ht.add("Irbid", "100");
ht.add("Jordan",{"Age" :"100"});
ht.add("Jordan",{"space" :"89,000"});

//search
console.log(ht.search("Jordan")); //[ 'Jordan', { space: '89,000' } ]
console.log(ht); /*HashTable {values: { NaN:Canada: [Array],Germany: [Array],Italy: [Array],Amman: [Array],Irbid: [Array],Jordan: [Array] }},length: 6 size: 0}*/
console.log(ht.getItem("Irbid"));['100'] //[ 'Irbid', '100' ]
console.log(ht.removeItem("Jordan")) //deleted
console.log(ht.getItem("Jordan")); // null because it's deleted 
console.log(ht.contains("Jordan")); //false because it's deleted
ht.add("Jordan",{"Age" :"100"});
console.log(ht.contains("Jordan")); //true

console.log(ht.keys());

module.exports =HashTable;

