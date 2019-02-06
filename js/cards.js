
/////////////////////
// CARD DECK GAME //
///////////////////

let types =  ["spades", "hearts", "clubs", "diams"];
var cardFace = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
var players = [];
var cards = [];

// startGame
// build cards
// shuffle cards
// deal cards (to players);

startDeal = () => {
   cards = [];
   players = [];

    // we took the value of players in orded to create the number of players
   let playerNums = Number(document.getElementById('players').value);

   for (let i = 0; i < playerNums;i++) {
       players[i] = [];
   }
   
   buildCards(cards);
   shuffleCards(cards);
   
}

// build the cardDeck
buildCards = card => {
    for (let t in types) {
        let bgColor = types[t] === 'hearts' || types[t] === 'diams' ? 'red' : 'black';
        for (let c in cardFace){
            // starting to create the cardDeck
            let cardDeck = {
                cardType  : types[t],
                cardNum   : cardFace[c],
                cardColor : bgColor
            }
            card.push(cardDeck);
        }
    }
    return card;
};

// shuffle the cards
shuffleCards = card => {    
    for (let i = 0; i < card.length; i++) {
        let random = Math.floor(Math.random() * (i + 1))   // inclusively 52th
        let initCard = card[i];
        card[i] = card[random];
        card[random] = initCard;
    }
    return card;
}

// give cards to players
dealCards = () => {
    
}
