$(document).ready(function() {

	//what does this do? this assigns values to the face cards
	var convert_value_to_string = function(value) {
		if (value > 10) {
			switch (value) {
				case 11:
				return 'Jack';
				break;
				case 12:
				return 'Queen';
				break;
				case 13:
				return 'King';
				break;
			}
		}
		return value.toString();
	}

	//what does this do? this builds out the deck 
	var deck = [];
	var suits = ['hearts', 'diamonds', 'spades', 'clubs'];
	for (var i = 0; i<suits.length; i++) {
		var suit = suits[i];
		for (var j = 0; j<13; j++) {
			deck.push({number: j+1, suit: suit});
		}
	}
	
	//This shuffles the deck using a random number generator in Javascript
	var shuffle = function(deck) {
	    var newDeck = [];
	    for (var i = 0; i < deck.length; i++) {    
	        var rand = Math.floor(Math.random() * (i + 1));  
	        newDeck[i] = newDeck[rand];
	        newDeck[rand] = deck[i];
	    }
	    return newDeck;
	}  //shuffle is tested and works 

	//Now call the shuffle function and save the result of what shuffle returns into your deck variable
	
	var cards_player_1 = [];
	var cards_player_2 = [];

//deck shuffles correctly with shuffle(deck); invoked 

	// write a function called deal that will evently divide the deck up between the two players
	var deal = function(deck){
		for(i=0; i<deck.length; i++){
			if(deck.length%2 === 0){
				cards_player_1.push(deck[i]); 
				deck.splice(i, 1);  
			}else{
				cards_player_2.push(deck[i]); 
				deck.splice(i, 1);
			}

		}
		return deck; 
	}

	deck = deal(deck); 
	
	//create a function (algorithm) called "war" that takes two cards as parameters, compares them and returns a winner. A tie should return false.
	var war = function(card1, card2){
		if(card1 > card2){
			//card1 > card 2; 
			//push to player 1 deck  
		}elseif{
			//card2 > card 1;
			//push to player 2 deck
		}else{
			//card1 === card2; 
			return: false; 
		}
	}
	
	var advance = function(){
		//take the top two cards and display them
		if (cards_player_1.length) {
			var card_1 = cards_player_1[0];
			var card_2 = cards_player_2[0];
			$("#opp-card").html(convert_value_to_string(card_1.number)+" "+card_1.suit);
			$("#opp-card-count").html(cards_player_1.length);
			$("#my-card").html(convert_value_to_string(card_2.number)+" "+card_2.suit);
			$("#my-card-count").html(cards_player_2.length);
			
		}
	}
	
	
	//create a play function
		//compare the cards
		//give the winner both cards (at end of deck)
	var play = function(){
		
		war(card1, card2); //compares cards 

		giveCards(); //gives winner both cards 

		//this function (defined below) will continue to the next turn
		advance();
	}
	

	advance();
	
	$(".btn").click(function() {
		play();
	});
});
