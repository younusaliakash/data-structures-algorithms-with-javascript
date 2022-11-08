
//Array Implementation
class Queue {
    constructor(){
        this.queue = []
    }

    add(data){
        this.queue.push(data)
        return this;
    }

    pop(){
        this.queue.shift()
    }
}

let newQueue =  new Queue()
newQueue.add("Ruhan")
newQueue.add("Tuhan")
newQueue.add("Borhan")
console.log(newQueue)
// newQueue.pop()
// console.log(newQueue)


//Linked list implementation

class Node {
    constructor(data){
        this.data =  data;
        this.next = null;
    }
}

class Queue2 {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0
    }

    enqueue(value){
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode
        }

        this.length++;
        return this;

    }

    deQueue(){
        if(!this.head){
            return null;
        }

        let tempHead = this.head;

        this.head = this.head.next;
        this.length--

        return tempHead;


    }
}

let newQueue2 = new Queue2()

newQueue2.enqueue("Rarim")
newQueue2.enqueue("Karim")
newQueue2.enqueue("Romim")
console.log(newQueue2)


console.log(newQueue2.deQueue())