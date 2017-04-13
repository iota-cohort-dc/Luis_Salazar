
function DeckConstructor() {
	var suits = ['Heart','Diamond','Club','Spade'];
	var values = ['Ace','2','3','4','5','6','7','8','9','10','Jack','Queen','King'];

	this.createDeck = function(){
		deck = [];
		for (var i = 0; i <= suits.length-1; i++) {
			for (var x = 0; x <= values.length-1; x++) {
				var card = [values[x],suits[i]];
				deck.push(card);
			}
		}
		// console.log(deck);
		return deck;
	}
	this.shuffle = function(arr){
  		var m = arr.length, t, i;
		// While there remain elements to shuffle…
		while (m) {
    		// Pick a remaining element…
    		i = Math.floor(Math.random() * m--);
    		t = arr[m];
    		arr[m] = arr[i];
    		arr[i] = t;
  		}
  		// console.log(arr);
  		return arr;
	}
	this.reset = function(){
		deck = [];
		this.createDeck();
		// console.log(deck);
		return deck;
	}
	this.dealCards = function(){
		// console.log('Delt Card')
		var cardDelt = deck.pop();
		// console.log('Delt Card',cardDelt);
		return this;
	}
	this.showDeck = function(){
		console.log(deck);
		return this;
	}
}

var deck1 = new DeckConstructor();
var d = deck1.createDeck()

deck1.shuffle(d);
deck1.dealCards().dealCards().dealCards().showDeck();

function Person(name){
	this.name = name;
	var hand = [];

	this. takeCard = function(){
		hand.push(deck1.dealCards());
		console.log('Your hand is:', hand);
		return this;
	}

}


var person1 = new Person("Henry");

person1.takeCard()