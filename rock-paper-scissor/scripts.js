//User selects choice
//Computer selects choice
//Winner decided
//first decide who is the winner
//then assign a +1 to that winner's total
//then display on alert popup
//restart game loop if yes maintaining totals

var winsarray = [0];
var lossarray = [0];

function playGame() {

function userSelection() {
    var userChoice = prompt("Enter R for Rock, S for Scissor, or P for Paper");
    return userChoice;
}

function computerSelection() {
    var index = (Math.floor(Math.random() * 3));
    var options = ["R", "S", "P"];
    alert("The computer chose: " + options[index]);
    return options[index];
}

function declareWinner() {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    };
    if (userChoice === "R" && computerChoice === "S") {
        return "😁 You are a winner! ";
    };
    if (userChoice === "R" && computerChoice === "P") {
        return "☹️ You lose!";
    };
    if (userChoice === "P" && computerChoice === "S") {
        return "☹️ You lose!";
    };
    if (userChoice === "P" && computerChoice === "R") {
        return "😁 You are a winner!";
    };
    if (userChoice === "S" && computerChoice === "R") {
        return "☹️ You lose!";
    };
    if (userChoice === "S" && computerChoice === "P") {
        return "😁 You are a winner!";
    }
}

function countwins() {
    if (winner.includes(winnertext)) {
      return winsarray.push(1);   
    } else {
        return winsarray.push(0);
    }
}

function countloss() {
    if (winner.includes(losetext)) {
       return lossarray.push(1);
    }  else {
        return lossarray.push(0);
    }  
}

function wintotal() {
    let sum = 0;
    for (var i = 0; i < winsarray.length; i++) {
     sum += winsarray[i];
    }
    return sum;
}

function losstotal() {
    let sum = 0;
    for (var i = 0; i < lossarray.length; i++) {
     sum += lossarray[i];
    } 
     return sum;
}

function scores() {
    alert("Wins: " + totalwins +"\nLosses: " + totallosses );
    if (confirm("Do you want to play again?")) {
       playGame();
    } else {
        document.getElementById("thankyou").innerHTML = "Thanks for playing!  <br><br>If you'd like to play again, reload the page."
    }
}

var userChoice = userSelection();
var computerChoice = computerSelection();
var winner = declareWinner();

declareWinner(userChoice, computerChoice);
alert("This round: " + winner);

var winnertext = "winner";
var losetext = "lose";
var wins = countwins();
var loss = countloss();
var totalwins = wintotal();
var totallosses = losstotal();
var totalscores = scores();
     
console.log(winsarray);
console.log(lossarray);
console.log(totalwins);
console.log(totallosses);
console.log(wins);
console.log(loss);
}

playGame();
