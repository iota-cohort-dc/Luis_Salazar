//algo challange
//***************************

function Listnode(val){
	this.val = val;
	this.next = null;
}
function SLL(){
	this.head = null;
	this.addBack = function(val){
		var node = new Listnode(val);
		if(!this.head){
			this.head = node;
			return this;
		}
		var current = this.head;
		while(current.next){
			current = current.next;
		}
		current.next = node
		return this;
	};
}

var list = new SLL();

list.addBack(1);
list.addBack(2);
list.addBack(3);
list.addBack(4);
list.addBack(5);

console.log(list.head);
console.log('***************')
console.log('***************')
console.log(swapPairs(list))


// ****************************************
// ADD FRONT
	this.addFront = function(val){
		if(!this.head){
			this.head = new Listnode(val);
			return this
		}
		var node = new Listnode(val);
		node.next = this.head;
		this.head = node;
		return this;
	};
// ****************************************
	this.addBack = function(val){
		var node = new Listnode(val);
		if(!this.head){
			this.head = node;
			return this;
		}
		var current = this.head;
		while(current.next){
			current = current.next;
		}
		current.next = node
		return this;
	};
// ****************************************
// REVERSE LIST (NOT WORKING...)

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
// *****************************************
// DETECT LOOP IN LIST (Not tested yet)
this.findLoop = function(val){
	if(!this.head){
		return false;
	}
	var current = this.head;
	var temp = this.head;
	while(current != null && temp != null && temp.next != null){
		current = current.next;
		temp = temp.next.next;
		if(current == temp){
			return false;
		}
	}
	return this;
}
// ******************************************
//SPLIT ON VAL (Not working...)
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
//********************************************
//APPEND VAL (WORKS)
	this.appendVal = function(val,after){
		if(!this.head){
			return false;
		}
		var current = this.head;
		var node = new Listnode(val);
		while(current){
			if (current.val == after) {
				node.next = current.next;
				current.next = node;
				return this;
			}
			if (current.next == null){
				current.next = node;
				return this;
			}
			current = current.next;
		}
	};
//**********************************************
//REMOVE VAL (WORKS)
	this.removeVal = function(val){
		if(!this.head){
			return false;
		}
		var current = this.head;
		while(current){
			if(current.next == val){
				current.next = current.next.next;
				return this;
			}
			else{
				console.log('Val not found');
				return this;
			}
		}
	};
//*******************************************
//Concat List
	function concat(list1,list2){
		if(!list1.head){
			return list2.head;
		}
		if(!list2.head){
			return lis1.head;
		}
		var current = list1.head;
		var second = list2.head;
		while(current){
			if(current.next == null){
				current.next = second;
				return list1.head;
			}
			current= current.next;
			if(current.next == null){
				current.next = second;
				return list1.head;
			}
		}
	};
//**********************************************
//ZIP LIST
	function zipIt(list1,list2){
		if(!list1.head){
			return list2.head;
		}
		if(!list2.head){
			return list1.head;
		}
		var current = list1.head;
		var second = list2.head;
		var temp;
		var temp2;
		while(current){
			if(current.next && second.next != null){
				temp = current.next;
				temp2 = second.next;
				current. next = second
				second.next = temp;
				current = temp;
				second = temp2;
			}
			if(current.next == null){
				current.next = second;
				return list1.head;
			}
			if(second.next == null){
				second.next = current.next;
				current.next = second;
				return list1. head;
			}
			
		}
	}
//**************************************************
//REMOVE DUPLICATE (NOT WORKING.....)
	function removeDupe(list){
		if(!list.head){
			return false;
		}
		var current = list.head;
		while(current){
			var temp = current.next;
			var marker = current;
			while(temp){
				if(temp.val == current.val){
					if (temp.next){
						current.next = temp.next;
						marker.next = temp.next
						temp = current.next;
					}
					else{
						marker.next = null;
					}
				}
				if(temp.next != null){
					marker = temp;
					temp = temp.next;
				}
				else{
					break;
				}
			}
			current = current.next;
		}
	}
//***********************************************
//STACK PUSH
this.push = function(val){
	if(!this.top){
		this.top = new Listnode(val);
		return this
	}
	var node = new Listnode(val);
	var current = this.top;
	while(current.next){
		current = current.next;
	}
	current.next = node;
	return this;
}

//***********************************************
//STACK POP
	this.pop = function(){
		if(!this.top){
			return false;
		}
		var val;
		current = this.top
		while(current.next){
			temp = current
			current = current.next
		}
		val = current;
		temp.next = null;
		return this;
	}
// **********************************************
// Swap pairs
function swapPairs(list){
	if(!list.head){
		return false;
	}
	var current = list.head;
	var temp;
	if(current.next){
		temp = current.next;
	}
	else{
		return false;
	}
	if(temp.next){
		list.head = temp;
		current.next = temp.next;
		temp.next = current;
	}
	else{
		list.head = temp;
		temp.next = current;
		return list;
	}
	temp = current;
	current = current.next;
	while(current.next){
		temp.next = current.next;
		temp = temp.next;
		if(temp.next == null){
			temp.next = current;
			current.next = null;
			return list;
		}
		current.next = temp.next;
		temp.next = current;
		temp = current;
		current = current.next;
	}
	return list;
}











