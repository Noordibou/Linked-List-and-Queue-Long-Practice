// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // There are bugs in this method! Fix them!!!

        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);

        if (this.length > 0) {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this;
        // Write your hypothesis on the time complexity of this method here
    }

    addToTail(val) {
        const newTail = new DoublyLinkedNode(val);
        if (this.length > 0) {
            this.tail.next = newTail;
            newTail.prev = this.tail;
            this.tail = newTail;
        } else {
            this.head = newTail;
            this.tail = newTail;
        }

        this.length++;
        return this;
    }

    removeFromHead() {
        if (!this.head) return;
        const oldHead = this.head;
        this.head = oldHead.next;
        if (this.head) {
            this.head.prev = null;
        }
        this.length--;
        return oldHead.value;
    }

    removeFromTail() {
        if (!this.tail) return;
        const oldTail = this.tail;
        this.tail = this.tail.prev;
        if (this.tail) {
            this.tail.next = null;
        }
        this.length--;
        return oldTail.value;
        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        if (!this.head) return;
        return this.head.value;
    }

    peekAtTail() {
        if (!this.tail) return undefined;
        return this.tail.value;
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
