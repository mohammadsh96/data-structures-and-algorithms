'use strict';

const Queue = require('./queue');

class AnimalShelter {
    constructor() {
        this.dog = new Queue();
        this.cat = new Queue();
    }

    enqueue(animal) {
        if (animal.animalType === 'dog') {
            this.dog.enqueue(animal);
            return animal;
        } else if (animal.animalType === 'cat') {
            this.cat.enqueue(animal);
            return animal;
        } else {
            return ('The animal type must be a cat or a dog');
        }
    }
    dequeue(pref) {
        if (pref === 'dog') {
            return this.dog.dequeue(pref);
        } else if (pref === 'cat') {
            return this.cat.dequeue(pref);
        } else {
            return null;
        }
    }

}

let animalShelter = new AnimalShelter();

let dog = {
    name: 'name',
    animalType: 'dog',
}

let cat = {
    name: 'name',
    animalType: 'cat',
}

let horse = {
    name: 'name',
    animalType: 'cat',
}

let dog2 = {
    name: 'name2',
    animalType: 'dog',
}

animalShelter.enqueue(dog2);
animalShelter.enqueue(dog);
animalShelter.enqueue(cat);
animalShelter.enqueue(horse);


console.log(animalShelter.enqueue(dog));
console.log(animalShelter.enqueue(cat));
console.log(animalShelter.enqueue(horse));
console.log(animalShelter.dequeue('dog'));
console.log(animalShelter.dequeue('horse'));

module.exports = AnimalShelter;
