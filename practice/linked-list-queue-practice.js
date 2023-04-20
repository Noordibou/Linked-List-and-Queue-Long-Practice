// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        return this.head;
    }

    listLength() {
        //    O(n);
        let length = 0;
        if (!this.head) return length;

        let curr = this.head;
        length++;
        while (curr.next) {
            length++
            curr = curr.next;
        }
        return length;
    }


    sumOfNodes() {
        let sum = 0;
        if (!this.head) return sum;
        sum = this.head.value;
        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
            sum += curr.value;
        }
        return sum;
    }

    averageValue() {
        if (!this.head) return;
        let sum = this.sumOfNodes()
        let length = this.listLength();
        const average = sum / length;
        return average;
    }

    findNthNode(n) {
        if (this.listLength() < n) return;
        let count = 0;
        let curr = this.head;
        while (count < n) {
            curr = curr.next;
            count++;
        }
        return curr;
    }

    findMid() {
        const length = this.listLength();
        let midPoint = ((length / 2)-1);
        if ((length % 2) !== 0) {
            midPoint = Math.ceil(midPoint);
            // console.log(length, midPoint)
        }
        
        let nth = this.findNthNode(midPoint);
        return nth;
    }


    reverse() {
        // Returns a new reversed version of the linked list
        // Try implementing it by returning a new linked list then returning
        // the original linked list reversed in place
        // Does the time complexity change? How about space complexity?

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

}

class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(head = null) {
        this.head = head;
        this.tail = head;
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return this.head;
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
        // How do the implementation for singly and doubly vary if at all?

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

    reverse() {
        // Returns a new reversed version of the linked list

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}