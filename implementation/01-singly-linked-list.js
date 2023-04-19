// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        const newNode = new SinglyLinkedNode(val);

        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!

        this.length++;
        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);
        if (!this.head) {
            this.head = newNode;
            return this;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;

        return this;

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromHead() {
        if (!this.head) return undefined;
        const oldHead = this.head;
        this.head = this.head.next;
        this.length--;
        return oldHead;
    }

    removeFromTail() {
        if (!this.head) return undefined;
        this.length--;
        if (this.length === 0) {
            const oldHead = this.head;
            this.head = null;
            return oldHead;
        }
        let curr = this.head;
        while (curr.next.next) {
            curr = curr.next
        }
        const oldTail = curr.next;
        curr.next = null;
        // console.log(this)

        return oldTail;
    }

    peekAtHead() {
        if (!this.head) return undefined;
        return this.head.value;
    }

    print() {
        if (!this.head) return;
        let curr = this.head;
        while (curr) {
            console.log(curr.value)
            curr = curr.next
        }

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
