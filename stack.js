class _Node{
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor(){
        this.top = null;
    }
    push(data) {
        if (this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }
        const node = new _Node(data, this.top);
        this.top = node
    }
    pop() {
        const node = this.top;
        this.top = node.next;
        return node.data;
    }
    peek() {
        return this.top;
    }
    display() {
        const response = [];
        let selector = this.top
        while(selector !== null){
            response.push(selector.data)
            selector = selector.next
        }
        console.log(respone)
    }
    isEmpty(){
        return(this.top === null)
    }
}

function main(){
    starTrek.push('Kirk')
    starTrek.push('Spock')
    starTrek.push('McCoy')
    starTrek.push('Scotty')

    starTrek.pop('McCoy')
    starTrek.display()
}
main()

module.exports = Stack;