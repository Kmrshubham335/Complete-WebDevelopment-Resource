// Selecting all HTML elements with the class "bt" (representing tic-tac-toe boxes),
// reset button, new game button, message element, and message container.
let boxes = document.querySelectorAll(".bt");
let reset_btn = document.querySelector("#reset");
let new_Gamebtn = document.querySelector("#new_button");
let msg = document.querySelector("#msg");
let contain = document.querySelector(".msg_container");

// Variable to track the current turn, initialized to true for player 'O'.
let turn0 = true;

// Array representing the winning patterns in the tic-tac-toe game.
let winning_pattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 7],
    [6, 7, 8],
];

// Looping through each tic-tac-toe box to add a click event listener.
// This is necessary because there are multiple boxes.
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Button was clicked");

        // Alternating between 'O' and 'X' symbols based on the current turn.
        if (turn0) {
            box.innerHTML = "O";
            turn0 = false;
        } else {
            box.innerHTML = "X";
            turn0 = true;
        }

        // Disabling the clicked box to prevent further clicks.
        box.disabled = true;

        // Checking for a winner or draw after each move.
        check_winner();
    });
});

// Function to disable all tic-tac-toe boxes.
const disable = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

// Function to enable all tic-tac-toe boxes and clear their content.
const enable = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerHTML = "";
    }
};

// Function to reset the game state, enabling boxes, clearing content, and resetting the turn to 'O'.
const reset = () => {
    turn0 = true;
    enable();
    // Hiding the message container.
    contain.classList.add("hide");
};

// Function to display the winner in the message element, show the message container,
// and disable all tic-tac-toe boxes.
const show_winner = (winner) => {
    msg.innerHTML = `The winner is ${winner}`;
    contain.classList.remove("hide");
    disable();
};

// Function to display a draw message in the message element, show the message container,
// and disable all tic-tac-toe boxes.
const show_draw = () => {
    msg.innerHTML = "It's a draw!";
    contain.classList.remove("hide");
    disable();
};

// Function to check for a winner or draw based on the current board state.
const check_winner = () => {
    let draw = true; // Variable to track if the game is a draw.

    for (let pattern of winning_pattern) {
        // Checking the values at specified positions on the board.
        let pos1_val = boxes[pattern[0]].innerText;
        let pos2_val = boxes[pattern[1]].innerText;
        let pos3_val = boxes[pattern[2]].innerText;

        // If the values at specified positions match and are not empty, declare a winner.
        if (pos1_val != "" && pos2_val != "" && pos3_val != "") {
            if (pos1_val == pos2_val && pos2_val == pos3_val) {
                console.log("Winner", pos1_val);
                // Display the winner and disable further moves.
                show_winner(pos1_val);
                return; // Exit the function if there's a winner.
            }
        }
    }

    // Check if all boxes are filled to determine if the game is a draw.
    for (let box of boxes) {
        if (box.innerText === "") {
            draw = false;
            break;
        }
    }

    // If the game is a draw, display a message and disable further moves.
    if (draw) {
        console.log("It's a draw!");
        show_draw();
    }
};

// Adding event listeners for the new game button and reset button to trigger the reset function.
new_Gamebtn.addEventListener('click', reset);
reset_btn.addEventListener('click', reset);
