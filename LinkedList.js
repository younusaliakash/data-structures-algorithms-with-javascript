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

    //size or Length

    length(){
        let length = 0;
        let node = this.head;

        while(node){
            length++
            node = node.next;
        }

        return length
    }

    //first node
    firstNode(){
        return this.head;
    }

    //last node 
    lastNode() {
        let lastItem = this.head;
        if(lastItem){
            while(lastItem.next){
                lastItem = lastItem.next;
            }
        }

        return lastItem;
    }

    //toString
    toString() {
        let node = this.head;
        let text = ""
        while(node){
            if(node.next === null){
                text += `${node.data}`
                
            } else{
                text += `${node.data},`
            }
            node = node.next;
        }

        return text;
    }

    //to Array
    toArray (){
        let node = this.head;
        let nodes = []
        while(node){
            nodes.push(node.data)
            node = node.next;
        }

        return nodes;

    }

    //is empty
    isEmpty(){
        let  node = this.head;

        if(node === null) {
            return true
        } else {
            return false
        }
    }

    //do empty
    empty(){
        this.head = null ;
        return this
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
console.log(newList.length())
console.log(newList.firstNode())
console.log(newList.lastNode())
console.log(newList.toString())
console.log(newList.toArray())
console.log(newList.isEmpty())
console.log(newList.empty())
console.log(newList.isEmpty())