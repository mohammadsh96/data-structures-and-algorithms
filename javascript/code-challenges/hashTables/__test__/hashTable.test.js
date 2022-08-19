const HashTable = require('../hashTable')


describe("testing HashTable", ()=>{


test("create hashTAble",()=>{
  const ht = new HashTable();
  expect(ht.removeItem("nothing")).toBeNull()

})

})
describe('Stack test', () => {
  test('Can create  an empty Stack', () => {
    const ht = new HashTable();
  ht.add("Canada", "300");
ht.add("Germany", "100");
ht.add("Italy", "100");
ht.add("Amman", "100");
ht.add("Irbid", "100");
ht.add("Jordan",{"Age" :"100"});
ht.add("Jordan",{"space" :"89,000"});

    expect(ht.contains("Jordan")).toBe(true);
    expect(ht.removeItem("Jordan")).toEqual("deleted")
    expect(ht.search("anything")).toBeNull();
  });

})