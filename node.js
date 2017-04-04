


export default class Node = {
  constructor(myParent, val) {
    this.myParent = myParent;
    this.val = val;
  }
};


var walkUp = function(node) {
  // your implementation here
  console.log(node.val);
  if (node.myParent !== null) {
    node = node.myParent;
    walkUp(node);
  }
};

walkUp(ate);

// If we have a node that knows about its children:
var NodeWithChildren = class {
  constructor(myParent, val) {
    this.myParent = myParent;
    this.val = val;
    if (myParent !== null) {
      this.myParent.children.push(this);
    }
    this.children = [];
  }
};

// Trie
word = 'apple'
word[0] = a
let letters = word.split('');
this.children.push(letters);

for (let i = 0; i <= word.length; i++) {
  if (this.children[i] === instanceOf(Node)) {
    // check next letter in word
  }
  else {

  }
}
