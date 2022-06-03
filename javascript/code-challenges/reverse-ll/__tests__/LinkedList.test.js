'use strict';
const LinkedList =require("../../ New-Implementation/LinkeList");
const supertest =require("supertest")

describe("link list", () => {
  test("create an empty linklist", () => {
      let list = new LinkedList();
      expect(list.head).toEqual(null);
      expect(list.removeNodeAtIndex(0)).toBeNull()
      list.insertFirstNode(7);
      expect(list.head.data).toEqual(7)
  })
  test("insert to head of linklist working", () => {
      let list = new LinkedList();
      list.insertFirstNode('one');
      expect(list.head.data).toEqual('one');
      list.insertFirstNode('two');
      expect(list.head.data).toEqual('two');
      list.insertFirstNode(10);
      expect(list.head.data).toEqual(10);
  })
  test('testing the length', ()=>{
    let list = new LinkedList();
expect(list.length).toEqual(0)
list.insertFirstNode('one')
expect(list.length).toEqual(1)
  })
  test('mohammad mood', ()=>{
    let mohammad = "happay";
    expect(mohammad).toEqual("happay")
      })
      test('testing air conditioning', ()=>{
        let mohammad = new LinkedList;
        expect(mohammad.head).toEqual(null)
          })

})

                describe("insert Node at the index # ", ()=>{
             test("it insertNodeAtIndex()" , ()=>{
              let list = new LinkedList();
              list.insertLastNode(5);
             list.insertNodeAtIndex(34,1);
             list.insertNodeAtIndex(34,0);
              expect(list.getNodeAtIndex(1)).toEqual(5)
           })
            })
            describe("insert Node at the index greater than length ", ()=>{
              test("it insertNodeAtIndex()" , ()=>{
               let list = new LinkedList();
               list.insertLastNode(5);
               list.insertFirstNode(6);
               list.insertFirstNode(7);
               list.insertFirstNode(8);
               expect(list.insertNodeAtIndex(34,10)).toBeNull()
            })
             })

                   describe("remove Node At index", ()=>{
                       test("removeNodeAtindex 1 ",()=>{
                        let list = new LinkedList();
                        list.insertFirstNode(6);
                        list.insertFirstNode(7);
                        list.insertFirstNode(8);
                        list.insertLastNode(5);
                        list.insertNodeAtIndex(34,1);
                        list.removeNodeAtIndex(2)
                         expect(list.getNodeAtIndex(0)).toEqual(8)
                         expect(list.getNodeAtIndex(1)).toEqual(34)
                         expect(list.getNodeAtIndex(2)).toEqual(6)
                         expect(list.getNodeAtIndex(3)).toEqual(5)
                         expect(list.getNodeAtIndex(8)).toBeNull()
                         expect(list.removeNodeAtIndex(8)).toBeNull()

                       })
                     })
// describe("with indexin the middle using to string", ()=>{
//                       test("getByIndex zero ",()=>{
//                         const ll =LinkedList.fromValue(10 , 20 ,30 ,40 , 50)
//                       expect(ll.getByIndex(2)).toString(30)

//                       })
//                     })
                    describe("incloudes a certian index value ", ()=>{
                      test(" check if incloudes a Searchvalue  ",()=>{
                        let list = new LinkedList();
                        list.insertFirstNode(6);
                        list.insertFirstNode(7);
                        list.insertFirstNode(8);
                        list.insertLastNode(5);
                        expect(list.getNodeAtIndex(0)).toEqual(8)
                      expect(list.includes(8)).toBeTruthy()

                      })
                    })
                    describe("clear all linkedlist data ", ()=>{
                      test(" clear data ",()=>{
                        let list = new LinkedList();
                        list.insertFirstNode(6);
                        list.insertFirstNode(7);
                        list.insertFirstNode(8);
                        list.insertLastNode(5);
                        list.toString()
                        list.clear()
                        expect(list.head).toBeNull()


                      })
                    })
