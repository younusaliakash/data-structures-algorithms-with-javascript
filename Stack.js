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
}

let newStack = new Stack()
newStack.push("The man in black")
newStack.push("The man in black 2")
newStack.push("The man in black 3")
newStack.pop()
console.log(newStack)