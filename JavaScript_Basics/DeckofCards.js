class Deck {
  constructor(){
    this.cardList = newList();
  }
  display(){
    console.log(cardList.length);
    return this;
  }
  Reset(){
    this.cardList = newList();
    return this; 
  }
  
  Deal(player) {
    player.hand.push(cardList[cardList.length-1]);
    cardList.pop();
    return this; 
  }
  
  Shuffle() {
    for(let i = 0; i<= 51; i++){
      let randTemp = Math.floor(Math.random() * 52);
      let temp = cardList[i]; 
      cardList[i] = cardList[randTemp];
      cardList[randTemp] = temp;
    }
    return this; 
  }
}

class Card {
  constructor(suit, value){
    this.suit = suit; 
    this.value = value;
  }
}

function newList(){
cardList = [];
suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
values = ["Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King"];
for(let s in suits){
  for(let v in values){
    var crd = new Card(suits[s], values[v]);
    cardList.push([crd.value, crd.suit]);
  }
}
return cardList;
}

class Player {
  constructor(name){
    this.name = name;
    this.hand = [];
  }
  Hand(){
    console.log(this.hand);
    return this;
  }
  takeCard() {
    deck1.Deal(this);
    return this;
  }
  
  discard(num){
    this.hand.splice(num-1, 1);
    return this;
  }
}

var deck1 = new Deck();
deck1.Shuffle();
var player1 = new Player('Eric');
player1.takeCard().takeCard().takeCard(); 
player1.Hand();
player1.discard(3);
