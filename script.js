// Array to store the game state
var board = ["", "", "", "", "", "", "", "", ""];

// Player turn
var player = "X";

// Winning combinations
var winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Function to add X or O to the board
function addToBox(element) {
    // Get the box id
    var boxId = element.getAttribute("id");

    // Check if the box is empty
    if (board[boxId] === "") {
        // Add the X or O to the board
        board[boxId] = player;

        // Update the box text
        element.classList.add(player.toLowerCase());
        element.innerHTML = player;

        // Check for a win
        var winner = checkWin();
        if (winner) {
            // Show the winner
            alert("Player " + winner + " wins !");

            // Reset the game
            resetGame();
        } else if (board.indexOf("") === -1) {
            // Check for a tie
            alert("It's a tie!");

            // Reset the game
            resetGame();
        } else {
            // Switch players
            player = player === "X" ? "O" : "X";
        }
    }
}

// Function to check for a win
function checkWin() {
    for (var i = 0; i < winningCombinations.length; i++) {
        var combo = winningCombinations[i];
        if (board[combo[0]] === player &&
            board[combo[1]] === player &&
            board[combo[2]] === player) {
            return player;
        }
    }
    return null;
}

// Function to reset the game
function resetGame() {
    // Reset the board
    board = ["", "", "", "", "", "", "", "", ""];

    // Reset the player
    player = "X";

    // Reset the boxes
    var boxes = document.querySelectorAll(".box");
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].classList.remove("x", "o");
        boxes[i].innerHTML = "";
    }
}
