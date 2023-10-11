const Node = function (value) {

  // returns simple object with two properties to serve as a node
  return {
    value: value,
    next: null,
  };
}

const LinkedList = function (head = null) {

  // factory function for creating LinkedLists && methods to manipulate them

  return {
    head: head,
    append: function (value) {
      let lastNode = this.head;
      if (lastNode){
      while ( lastNode.next !== null ){
        lastNode = lastNode.next;
      }
      lastNode.next = Node(value);
      } else {
      this.head = Node(value);
    }; 
    },
    prepend: function (value) {
      if ( this.head !== null ){
        let prevHead = this.head;
        let newHead = Node(value);
        this.head = newHead;
        newHead.next = prevHead;
      }  
    },
    size: function () {
      let counter = 0;
      let node = this.head;
      while ( node !== null ){
        counter++;
        node = node.next;
      }
      return counter;
    },
    tail: function () {
      let node = this.head;
      while ( node.next !== null ){
        node = node.next;
      }
      return node;
    },
    at: function (index) {
      let i = 0;
      let node = this.head;
      while ( i < index){
        if ( node.next ){
        node = node.next;
        i++;
        } else {
          console.log('Index out of bounds');
          return;
        }
      }
      return node;
    },
    pop: function () {
      let node = this.head;
      while ( node.next.next ){
        node = node.next;
      }
      console.log(node.next.value)
      node.next = null;
    },
    contains: function (value) {
      let node = this.head;
      while ( node ){
        if ( node.value.toLowerCase() === value.toLowerCase()){
          return true;
        }
        node = node.next;
      }
      return false;
    },
    find: function (value) {
      let node = this.head;
      let i = 0;
      while ( node.next ){
        if ( node.value === value ){
          return i;
        }
        node = node.next;
        i++;
      }
      return null;
    },
    toString: function () {
      let node = this.head;
      let string = '';
      while ( node.next ){
        string += '( ' + node.value + ' ) -> ';
        node = node.next;
      }
      string += '( ' + node.value + ' ) -> null'
      return string;
    },
    insertAt: function(index,value) {
      let node = this.head;
      let i = 0;
      while ( i < index - 1){
        if ( node.next ){
        node = node.next;
        i++;
        } else {
        console.log('ERROR: Index out of bounds');
        }
      }
      let newNode = Node(value);
      newNode.next = node.next;
      node.next = newNode;
    },
};
};


const employeeList = LinkedList();
employeeList.append('John');

employeeList.head = Node('John');
console.log(employeeList.head);

employeeList.prepend('Jane');
console.log(employeeList.head);

employeeList.append('Bob');
console.log(employeeList.tail());

console.log(employeeList.size());
console.log(employeeList.find('Jane'));
console.log(employeeList.at(0));
console.log(employeeList.contains('bob'));
console.log(employeeList.toString());
employeeList.pop();
console.log(employeeList.toString())

employeeList.insertAt(1,'Blaire');
employeeList.insertAt(3,'Bob')
console.log(employeeList.toString());

employeeList.insertAt(5,'Tiffany');






