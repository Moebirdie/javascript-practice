//players choose powerball numbers - five numbers from 1 to 69  and a powerball number cost:$2 
//players choose a powerball number - one from 1 to 26 included above for a total of 6 numbers to match
//Power play multiplyer - multiplies winnings by 2, 3,4,5 or 10
    //jackpot not affected by multiplier
    //never higher than 2 for 2nd prize
    //picked out of hat before the main drawing of the 6 numbers
//prizes
    //jackpot - match all 6 numbers - prize: full amount
    //match 5 numbers - prize: 1 million
    //match 4 numbers + powerball - 50,000
    //match four numbers - 100
    //match three numbers = powerball - 100
    //match three numbers - 7
    //match two numbers + powerball - 7
    //match one number + powerball - 4
    //match powerball - 4


    var playerNumArray = [];
    var pbNumArray = []; 
    var playerPBNum = null;
    var pbPBNum = null;


//function validatePlayerArray(numArray) {
//    for (var i = 0; i < numArray.length; i++) {
//        if (numArray[i] < 1 || numArray[i] > 69) {
//            return false;
//        }
//      }
//        return true;
//    }

function validatePlayerNums() {
    if (this < 1 || this > 69 ) {
        return false;
    } 
  return true; 
}
   

function playerNumbers() {
    var numsPlayer1 = prompt("Please enter your FIRST number from 1 and 69 \n\n");

    var numsPlayer2 = prompt("Please enter your SECOND number from 1 and 69 \n\n");
    var numsPlayer3 = prompt("Please enter your THIRD number from 1 and 69 \n\n");
    var numsPlayer4 = prompt("Please enter your FOURTH number from 1 and 69 \n\n");
    var numsPlayer5 = prompt("Please enter your FIFTH number from 1 and 69 \n\n");
    var numsPlayerPB = prompt("Please enter your POWERBALL number from 1 and 26 \n\n");

    playerNumArray.push(numsPlayer1,numsPlayer2,numsPlayer3,numsPlayer4,numsPlayer5);
    var isValid = validatePlayerArray(playerNumArray);
    console.log(numsPlayer,playerNumArray,isValid);    
    if (!isValid) {
        playerNumArray = [];
        return playerNumbers();
    }
    return playerNumArray;
}

    function playerPowerball() {

    } 

    function pbMultiplier() {

    }

    function pbNumbers() {

    }
    function pbPowerball() {

    }

   
    var playerNums = playerNumbers();
    var playerPbNum = playerPowerball();
    var Multiplier = pbMultiplier();
    var pbNums = pbNumbers();
    var pbPowerBall = pbPowerball(); 

    
    var jackpot = "51 million dollars";
    var fiveNumMatch = "1 million dollars";
    var fourNumPlusMatch = "50,000 dollars";
    var fourNumMatch = "100 dollars";
    var threeNumPlusMatch = "100 dollars";
    var threeNumMatch = "7 dollars";
    var twoNumPlusMatch = "7 dollars";
    var oneNumPlusMatch = "4 dollars";
    var powerballOnly = "4 dollars";

