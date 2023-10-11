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
        if ( node.value.toLowerCase() === 
        value.toLowerCase()){
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

const container = document.getElementById('container');

const headerDiv = document.createElement('div');
headerDiv.className = 'header-div';
const header = document.createElement('h1');
header.className = 'header';

const description = document.createElement('p');
description.textContent = 'Welcome to the Linked List Project: Check out the below functions and more in the developer tools console.';


header.textContent = 'Linked List Project';
headerDiv.appendChild(header);
headerDiv.appendChild(description)

container.appendChild(headerDiv);

Object.fromEntries(Object.entries(LinkedList()).forEach(([key, value]) => {
  if (value !== null){
  const methodDisplay = document.createElement('div');
  methodDisplay.classList.add('method-display');
  const methodDisplayTitle = document.createElement('h3');
  methodDisplayTitle.innerText = key;
  methodDisplay.appendChild(methodDisplayTitle);
  const methodDisplayDescription = document.createElement('p');
  methodDisplayDescription.innerText = value;
  methodDisplay.appendChild(methodDisplayDescription);
  container.appendChild(methodDisplay);
  }
  

  
}));

const newWindowAlert = () => alert();

newWindowAlert();











