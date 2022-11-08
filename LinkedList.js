class LinkedList {
    constructor(head = null){
        this.head = head;
    }

    append(newNode) {
        let node = this.head;

        if(node === null){
            this.head = newNode;
            return this;
        }

        while(node.next){
            node = node.next;
        }

        node.next = newNode;
    }

}

class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

let newList =  new LinkedList()
let newNode = new Node(10)
console.log(newList.append(newNode))
console.log(newList.append(new Node (20)))
console.log(newList.append(new Node (30)))