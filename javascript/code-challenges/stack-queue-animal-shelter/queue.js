'use strict';

const Node = require('./node')

class Queue {
    constructor() {
        this.front = null;
        this.back = null;
        this.queueSize = 0;
    }

    enqueue(value) {
        if (this.back === null && this.front === null) {
            this.front = new Node(value)
            this.back = this.front
        } else {
            const newNode = new Node(value);
            this.back.next = newNode;
            this.back = this.back.next;
        }
        this.queueSize++;
    }

    dequeue() {

        if (this.front !== null) {
            const result = this.front.value;
            this.front = this.front.next;
            if (this.front === null) {
                this.back = this.front;
            }
            this.queueSize--;
            return result;
        }
        return ('empty queue');
    }

    peek() {
        if (this.front !== null) {
            return this.front.value;
        }

        return ('empty queue');
    }

    isEmpty() {
        return this.queueSize === 0;
    }
}

module.exports = Queue;
