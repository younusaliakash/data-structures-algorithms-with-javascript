//Array Implementation
class Stack{
    constructor(){
        this.stackItem = []
    }


    //add new stack item
    push(item) {
        this.stackItem.push(item)
    }

    //remove last item from stack item
    pop(){
        this.stackItem.pop()
        return this;
    }

    //helper functions
    //last item of the stack
    latestItem(){
        return this.stackItem[this.stackItem.length -1]
    }

    //is empty
    isEmpty(){
        if(this.stackItem.length == 0){
            return true;
        }else{
            return false;
        }
    }

    //to string
    tostring(){
        let text = ""

        for(let i = 0 ; i < this.stackItem.length; i++){
            if( i === this.stackItem.length - 1){
                text += `${this.stackItem[i]}`
            } else{
                text += `${this.stackItem[i]},`
            }
        }

        return text;

        // return this.stackItem.join("-")
    }
}

// let newStack = new Stack()
// newStack.push("The man in black")
// newStack.push("The man in black 2")
// newStack.push("The man in black 3")
// newStack.pop()
// console.log(newStack)
// console.log(newStack.latestItem())
// console.log(newStack.tostring())


//Stack with linked list implementation
class Node {
    constructor(data){
        this.data =  data;
        this.next = null;
    }
}

class Stack2 {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0
    }

    push(value){
        let newNode = new Node(value);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else{
            let tempHead = this.head

            this.head = newNode;
            this.head.next = tempHead;
        }

        this.length++

        return this;
    }

    pop(){
        if(!this.head) return null;

        let tempHead = this.head;
        this.head =  this.head.next

        this.length--

        return tempHead;
    }
}


let newStack = new Stack2();
newStack.push(10)
newStack.push(20)
newStack.push(30)
console.log(newStack)
console.log(newStack.pop())