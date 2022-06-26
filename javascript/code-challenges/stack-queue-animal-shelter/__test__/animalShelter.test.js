'use strict';

const Node = require('../node');
const Queue = require('../queue')
const AnimalShelter = require('../AnimalShelter')
describe('Node Module test', () => {

    it('test the constructor()', () => {
        let value = 2
        let newNode = new Node(value);
        expect(newNode.value).toBe(value);
        expect(newNode.next).toBeNull();
    })
})
describe('Stack Test', () => {

  it('Can successfully enqueue into a queue', () => {
      let queue = new Queue();
      queue.enqueue(9);

      expect(queue.peek()).toBe(9);
      expect(queue.front.value).toBe(9);
  });

  it('Can successfully enqueue multiple values into a queue', () => {
      let queue = new Queue();
      queue.enqueue(9);
      queue.enqueue(7);
      queue.enqueue(5);
      queue.enqueue(3);

      expect(queue.peek()).toBe(9);
      expect(queue.front.value).toBe(9);
      expect(queue.back.value).toBe(3);
  });

  it('Can successfully dequeue out of a queue the expected value', () => {
      let queue = new Queue();
      queue.enqueue(9);
      queue.enqueue(7);
      queue.enqueue(5);
      queue.enqueue(3);

      expect(queue.peek()).toBe(9);

      expect(queue.dequeue()).toBe(9);

      expect(queue.front.value).toBe(7);
      expect(queue.back.value).toBe(3);
      expect(queue.dequeue()).toBe(7);
      expect(queue.peek()).toBe(5);
  });

  it('Can successfully peek into a queue, seeing the expected value', () => {
      let queue = new Queue();
      queue.enqueue(9);
      queue.enqueue(7);
      queue.enqueue(5);
      queue.enqueue(3);

      expect(queue.peek()).toBe(9);
      expect(queue.front.value).toBe(9);
      expect(queue.back.value).toBe(3);
  });

  it('Can successfully peek into a queue, seeing the expected value', () => {
      let queue = new Queue();
      queue.enqueue(9);
      queue.enqueue(7);
      queue.enqueue(5);
      queue.enqueue(3);

      expect(queue.dequeue()).toBe(9);
      expect(queue.dequeue()).toBe(7);
      expect(queue.dequeue()).toBe(5);
      expect(queue.dequeue()).toBe(3);
      expect(queue.dequeue()).toBe('empty queue');

  });

  it('Can successfully instantiate an empty queue', () => {
      let queue = new Queue();

      expect(queue).toBeInstanceOf(Queue);
  });

  it('Can successfully instantiate an empty queue', () => {
      let queue = new Queue();

      expect(queue.dequeue()).toBe('empty queue');
      expect(queue.peek()).toBe('empty queue');
  });
  it('return size = 0 if isEmpty', () => {
    let queue = new Queue();

    expect(queue.isEmpty()).toBe(true);

});

});
describe('animalShelter test', () => {

  it('Can successfully enqueue dog', () => {
      let animalShelter = new AnimalShelter();
      let dog = {
          name: 'name',
          animalType: 'dog',
      }
      expect(animalShelter.enqueue(dog)).toMatchObject(dog);
  });

  it('Can successfully enqueue cat', () => {
      let animalShelter = new AnimalShelter();
      let cat = {
          name: 'name',
          animalType: 'cat',
      }
      expect(animalShelter.enqueue(cat)).toMatchObject(cat);
  });

  it('enqueue if animal type not cat or dog', () => {
      let animalShelter = new AnimalShelter();
      let horse = {
          name: 'name',
          animalType: 'horse',
      }
      expect(animalShelter.enqueue(horse)).toBe('The animal type must be a cat or a dog');
  });

  it('Can successfully dequeue dog', () => {
      let animalShelter = new AnimalShelter();
      let dog = {
          name: 'name',
          animalType: 'dog',
      }
      let cat = {
          name: 'name',
          animalType: 'cat',
      }
      animalShelter.enqueue(dog);
      animalShelter.enqueue(cat);
      expect(animalShelter.dequeue('dog')).toMatchObject(dog);
  });

  it('Can successfully dequeue cat', () => {
      let animalShelter = new AnimalShelter();
      let cat = {
          name: 'name',
          animalType: 'cat',
      }
      let dog = {
          name: 'name',
          animalType: 'dog',
      }
      animalShelter.enqueue(cat);
      animalShelter.enqueue(dog);
      expect(animalShelter.dequeue('cat')).toMatchObject(cat);
  });

  it('dequeue if animal type not cat or dog', () => {
      let animalShelter = new AnimalShelter();
      let horse = {
          name: 'name',
          animalType: 'horse',
      }
      animalShelter.enqueue(horse);
      animalShelter.dequeue('horse');
      expect(animalShelter.enqueue(horse)).toBe('The animal type must be a cat or a dog');
      expect(animalShelter.dequeue('horse')).toBeNull();
  });
});
