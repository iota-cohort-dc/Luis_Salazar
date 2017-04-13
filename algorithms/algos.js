//algo challange
function acronym(str){
var newStr=" ";
for (var i = 0; i<str.length; i++) {
	if(str[i]==" " && str[i+1] !== " "){
		newStr[newStr.length]=str[i+1]
	}
	newStr = newStr.toUpperCase()
}
// return newStr;
console.log(newStr);
}
acronym("Hello World cool")
//***************************

function Listnode(val){
	this.val = val;
	this.next = null;
}
function SLL(){
	this.head = null;
	this.addFront = function(val){
		if(!this.head){
			this.head = new Listnode(val);
			return this
		}
		var node = new Listnode(val);
		node.next = this.head;
		this.head = node;
		return this;
	}
	this.splitOnValue = function(num){
		if (!this.head){
			return false;
		}
		var current = this.head;
		var temp = null;
		while(current){
			if(current.val == num){
				temp = current.next;
				current.next = null;
			}

			if(current.next.val == num){
				temp = current.next;
				current.next = null;
			}
			current = current.next;
		}
		var list = new SLL();
		list.head = temp;
		return list.head;
	}
}

// var list = new SLL();

// list.addFront(3);
// list.addFront(4);
// list.addFront(5);
// list.addFront(6);
// list.addFront(7);
// list.addFront(8);

// console.log(list.splitOnValue(5));
// console.log(list.head);
// ****************************************
// REVERSE LIST (NOT WORKING...)
function Listnode(val){
	this.val = val;
	this.next = null;
}
function SLL(){
	this.head = null;
	this.addFront = function(val){
		if(!this.head){
			this.head = new Listnode(val);
			return this
		}
		var node = new Listnode(val);
		node.next = this.head;
		this.head = node;
		return this;
	}
	this.reverseList = function(list){
		if(!this.head){
			return false;
		}
		var current = this.head;
		var temp = current.next;
		var mark = temp.next;
		current.next = null;
		while(temp){
			temp.next = current;
			current = temp;
			temp = mark;
			mark = temp.next;
		}
		this.head = current;
		return this;
	}
}
var list = new SLL();

list.addFront(3);
list.addFront(4);
list.addFront(5);
list.addFront(6);
list.addFront(7);
list.addFront(8);

console.log(list.head);
console.log(list.reverseList(list));

// *****************************************
// DETECT LOOP IN LIST
this.findLoop = function(val){
	if(!this.head){
		return false;
	}
	var current = this.head;
	var temp = this.temp;
	while(current != null && temp != null && temp.net != null){
		current = current.next;
		temp = temp.next.next;
		if(current == temp){
			return false;
		}
	}
	return this;
}









