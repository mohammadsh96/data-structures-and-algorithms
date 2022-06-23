'use strict';

const PseudoQueue = require('../pseudoQueue')


describe( " testing Stack-queue-pesudo" ,()=>{
test("Stack-queue-pesudo" , ()=>{
let pq = new PseudoQueue();
pq.enqueue(1);
pq.enqueue(1);
pq.enqueue(1);
pq.enqueue(1);
pq.dequeue();
expect(pq.isEmpty()).toBe(false);
}) ;


test("Stack-queue-pesudo 2" , ()=>{

  let pq = new PseudoQueue();

expect(pq.isEmpty()).toBe(true);

})
test("Stack-queue-pesudo 2" , ()=>{

  let pq = new PseudoQueue();
  pq.dequeue();
expect(pq.dequeue()).toBe('the queue is empty');

})

})
describe( " testing propety of the class" ,()=>{
  test("Stack-queue-pesudo" , ()=>{
  let pq = new PseudoQueue();
  pq.enqueue(5);
  pq.enqueue(1);
  pq.enqueue(8);
  pq.enqueue(1);
  pq.dequeue();
  expect(pq.front.value).toEqual(1);
  })
})
describe( " testing propety of the class" ,()=>{
  test("Stack-queue-pesudo" , ()=>{
  let pq = new PseudoQueue();
  pq.enqueue(5);
  pq.enqueue(1);
  pq.enqueue(8);
  pq.enqueue(1);
  pq.dequeue();
  expect(pq.rear).toBeNull();
  expect(pq.length).toBe(3);
  })
  it(' test the printElements method i use for check results', () => {
    let pq = new PseudoQueue();
    pq.enqueue(1);
    pq.enqueue(8);
    pq.enqueue(1);



    expect(pq.printElements()).toBe(true);
  });
})
