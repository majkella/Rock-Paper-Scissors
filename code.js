// Ask user to initiate the game (Optional)

// Define numerical values to Rock, Paper, Scissors

// Ask user to choose between Rock, Paper, Scissors
function playerPlay() {
    let input = prompt("Choose (R)ock, (P)aper, (S)cissors");
    let inputSanitised = input.slice(0,1).toLowerCase();
    if (inputSanitised === "r") {
        return "Rock";
    }
    else if (inputSanitised === "p") {
        return "Paper";
    }
    else if (inputSanitised === "s") {
        return "Scissors";
    }
    else {
        throw new Error("You haven't chosen (R)ock, (P)aper, (S)cissors. Refresh the page to start over");

    }
}
// Let program randomly choose Rock, Paper, or Scissors
function computerPlay() {
    const options = ["Rock","Paper","Scissors"];
    return options[Math.floor(Math.random()*options.length)];
}
//Store the result and inform user who won
function singleGame (computer, player) {
    if (computer === "Rock" && player ==="Paper"){
        console.log("You Win! Paper beats Rock");
        return 1;
    }
    else if (computer === "Paper" && player ==="Rock"){
        console.log("You Loose! Paper beats Rock");
        return 2;
    }
    else if (computer === "Rock" && player ==="Scissors"){
        console.log("You Loose! Rock beats Scissors");
        return 2;
    }
    else if (computer === "Scissors" && player ==="Rock"){
        console.log("You Win! Rock beats Scissors");
        return 1;
    }
    else if (computer === "Paper" && player ==="Scissors"){
        console.log("You Win! Scissors beats Paper");
        return 1;
    }
    else if (computer === "Scissors" && player ==="Paper"){
        console.log("You Loose! Scissors beats Paper");
        return 2;
    }
    else if (computer === player) {
        console.log("It's a draw");
    }
    else {
        throw new Error("You haven't chosen (R)ock, (P)aper, (S)cissors. Refresh the page to start over");
    }
}
//Game: Repeat the singleGame 5 times
function game() {
    let playerPoints = 0;
    let computerPoints = 0;
    for (let i = 0; i < 5; i++) {
        let winner = singleGame(computerPlay(),playerPlay());
        //Sum up the points for user and compare with the program
        if (winner===1) {
            playerPoints++;
        }
        else if (winner === 2) {
            computerPoints++;
        }
        console.log("Points:\nPlayer: " + playerPoints + "\nComputer: " + computerPoints); 
    }
    //Inform user who is the winner
        if (playerPoints > computerPoints) {
            console.log("Congratulations! You won!");
        }
        else if (playerPoints < computerPoints) {
            console.log("Bad luck! You lost");
        }
        else {
            console.log("It's a draw!");
        }
    //Ask to play another game
    let answer = prompt("Do you want to play again? y/n","n");
    answer = answer.slice(0,1).toLowerCase();
    switch (answer) {
        case "y":
            game();
        case "n":
            console.log("Goodbye");
            break
    }
}
// Launch game
game();