function displayCard(e) {
   if(e.target.classList == ("card")){
        e.target.classList.add("open","show");
        arr.push(e.target);    //adds array to the container
        match(e);
        
    } 
    
// this function flips the card to display its contents
}
function match(){
    if(arr.length == 2){
            if(arr[0].innerHTML == arr[1].innerHTML ){
            arr[0].classList.add("match");
            arr[1].classList.add("match");
            arr = [];
            congratulations(); // if two cards are same this  functions assigns them the class match and changes their background color 
         }
         else {
            setTimeout( function () { 
                arr[0].classList.remove("open","show");
                arr[1].classList.remove("open","show");
                arr = [];
            }, 400);        // if two cards dont match this function turns them back
        } 
        for(i = 0; i < moves.length; i++)
            moves[i].innerHTML++;      // this peice of code increments the number once every two cards are clicked
    } 
    
    // this function checks for a match of the cards
}

function restartGame(){
    let cardSelector = document.querySelectorAll('.card');
    for ( var i = 0; i < cardSelector.length; i++){
        cardSelector[i].classList.remove("open", "show", "match");    // selects the elements having class name match and removes the open, show and match class from the elements
    }

    for(i = 0; i < moves.length; i++)
        moves[i].innerHTML = "0";  //this function resets the no of moves to zero
    
    // this function Resets the game from the start
}
function congratulations() {
    if(matchedCard.length == 16){
        testContainer.style.display = "flex";
    }
    // this function displays once a user matches all the cards and a congratulatory note gets displayed
}
function reSet2 (){
    document.getElementById('testContainer').style.display = "none";
    let cardSelector = document.querySelectorAll('.card');
    for ( var i = 0; i < cardSelector.length; i++){
        cardSelector[i].classList.remove("open", "show", "match");
    }

    for(i = 0; i < moves.length; i++)
        moves[i].innerHTML = "0";
    // this function resets the game when play agaain element from the congratulations page is pressed
}


let card = document.querySelectorAll('.card')
let deck = document.querySelector('.deck');
let moves = document.querySelectorAll('.moves')
let reSet = document.querySelector('.restart')
let matchedCard = document.getElementsByClassName('match')
let testContainer = document.getElementById('testContainer')
let playAgain = document.querySelector('.playAgain')
deck.onclick = displayCard;
let arr = [];
reSet.onclick = restartGame;
playAgain.onclick = reSet2;


function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


