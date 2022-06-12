'use strict';
const LinkedList =require("../code-challenges/Extending an Implementation/linkedlist");

describe("link list", () => {
  test("create a linklist", () => {
      let list = new LinkedList();
      expect(list.head).toEqual(null);
      list.insertFirstNode(7);
      expect(list.head.data).toEqual(7)
  })

  test("test the append ",()=>{
    let list = new LinkedList();
    list.insertFirstNode(1);
    list.insertFirstNode(2);
    list.append(100)
    expect(list.length).toBe(3)
  })
  test("test insertbefore ",()=>{
    let list = new LinkedList();
    list.insertFirstNode(2);
    list.insertFirstNode(1);
    list.insertBefore(1,100)
    expect(list.head.data).toBe(100)
  })
  test("test insertAfter ",()=>{
    let list = new LinkedList();

    list.insertFirstNode(1);
    list.insertAfter(1,100)
    expect(list.length).toBe(2)
  })
  test("insert lastnode", () => {
    let ll = new LinkedList();
    ll.insertFirstNode(1);
    ll.insertLastNode(500);
    expect(ll.length).toBe(2);
 })
 describe("print all linkedlist data ", ()=>{
  test(" print data ",()=>{
    let list = new LinkedList();
    list.insertFirstNode(6);
    list.insertLastNode(5);
    list.toString()
    expect(list.tail.data).toBe(5)
  })

  })

});

