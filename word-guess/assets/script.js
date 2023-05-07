var words = [code, banana, haircut, flower, technology]
var timer = document.querySelector('#timer');
var displaybox = document.querySelector('#displaybox');
var displaywins = document.querySelector('#wins');
var displaylosses = document.querySelector('#losses');
var startButton = document.querySelector('startButton');

function displayMessage() {
    if (win ) {
        setMessageImage source = winning;
    } else {
        setMessageImage source = lost;
    }
}  

function countwinslosses() { //use local storage
    if win {
        wincount++
        add to local storage and disply in box
    } else {
        losscount++
        add to local storage and disply in box
    }
}

function countdown() {
    console.log('countdown function');
    var secondsLeft = 78;
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft;
        if(secondsLeft === 0) {
          // Stops execution of action at set interval
          clearInterval(timerInterval);
          // Calls function to create and append image
          displayYouLoseMessage();
        }
      }, 1000);
}

function activeWord() {
    var wordIndex = Math.floor(Math.random()*words.length);
    return words[wordIndex]; // or just start with word[0] and have a word counter
    for each letter in the word; 
    
        var boxDiv = document.createElement("div");
        displayBox.appendChild(boxDiv);
        boxDiv.setAttribute("style", "border-bottom: 2px solid #000");
        boxDiv.setAttribute(data-letter,i)
        boxDiv.setAttribute(data-state,"hidden"); ??
} 


    <div class="box" data-letter="1" data-state="hidden"></div>
      <div class="box" data-number="2" data-state="hidden"></div>
      <div class="box" data-number="3" data-state="hidden"></div>
      <div class="box" data-number="4" data-state="hidden"></div>
      <div class="box" data-number="5" data-state="hidden"></div>
      <div class="box" data-number="6" data-state="hidden"></div>

function keyup() {
    var key = key.event;
    on keyup find all letters where the data-letter matches the keyup value 
    write letter to textContent
    remove border of box
    if all letters are revealed, you win 
    push word from active array to used array
     if not keep playing 
}

function wingame() {
    maybe bubble up to this if last word is completed and total wins > total losses
    if no more words in active array, you win the game
}

funciton initwords() {
   push words from used array to active array
   active array should contain all words, used array should be empty
}

//function constructWord() {
//    for (let index = 0; index < word.length; index++) {
//        var spanEl = document.createElement ('span')
//        spanEl.textContent = word [index]
//       textAreaEl.appendChild(spanEl)
//    }
//}
gameStart ()
startButton.addEventListener("click", countdown)





document.addEventListener('keydown', function (event) {
    // var alphabetCharacters = 'abcdefghijklmnopqrstuvwxyz '.split(
    //     ''
    //   );
    var key = event.key
    var element = event.target
    if ( element.dataset.letter ='c'){
    element.dataset.state = "show";
    element.textContent =element.dataset.letter}
    })