
function DeckConstructor() {
	var suits = ['Heart','Diamond','Club','Spade'];
	var values = ['Ace','2','3','4','5','6','7','8','9','10','Jack','Queen','King'];
	var deck = [];

	this.showDeck = function(){
		console.log(deck);
		console.log('Length', deck.length);
	}
	var createDeck = function(){
		deck = [];
		for (var i = 0; i <= suits.length-1; i++) {
			for (var x = 0; x <= values.length-1; x++) {
				var card = {};
				card.suit = suits[i];
				card.value = values[x];
				deck.push(card);
			}
		}
		return this;
	}
	this.shuffle = function(){
		var numberOfShuffles = Math.floor((Math.random()*100)+50);
		for (var i = 0; i <= numberOfShuffles.length; i++) {
			var randInt = Math.floor(Math.random() * deck.length);
			var randInt2 = Math.floor(Math.random() * deck.length);
			var temp = deck[randInt];
			deck[randInt] = deck[randInt2];
			deck[randInt2] = temp;
		}
		return this;
	}
	createDeck();
	this.reset = createDeck;
	
	this.deal = function(){
		return deck.pop();
	}
}
function PersonConstructor(name){
	this.name = name;
	this.hand = [];
}
PersonConstructor.prototype.takeCard = function(deck){
	var card = deck.deal();
	this.hand.push(card);
	return this;
}


var deck1 = new DeckConstructor();
deck1.shuffle();

var luis = new PersonConstructor('Luis');
luis.takeCard(deck1).takeCard(deck1);

deck1.showDeck();
console.log(luis.hand);


// person1.takeCard()