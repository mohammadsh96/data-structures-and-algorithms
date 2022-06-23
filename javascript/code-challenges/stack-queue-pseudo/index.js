'use strict';

const pseudoQueue =require('./pseudoQueue');
const pq = new pseudoQueue();
pq.enqueue(5);
pq.enqueue(6);
pq.enqueue(8);
pq.enqueue(88);
pq.enqueue(7);
pq.printElements();
console.log("-----------");
console.log( "removing the first enqueued value : ", pq.dequeue());
console.log("-----------");
pq.printElements();
