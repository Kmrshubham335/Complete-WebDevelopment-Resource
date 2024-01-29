//Random color generator
const gen_color = () => {
    var letter = "0123456789ABCDEF"
    var col = "#"
    for (var i = 0; i < 6; i++) {
        col += letter[Math.floor(Math.random() * 16)];
    }
    return col
}
let a = setInterval(() => {
    document.querySelector(".container").style.background = gen_color()
}, 5000)

const inputBox = document.querySelector('.input-text');
const listContainer = document.getElementById("list-container")
document.title = "To-Do List"

// Function to add a task to the to-do list
function addTask() {
    // Check if the input box is empty
    if (inputBox.value === '') {
        alert("You must write something");
    } else {
        // Create a new list item (li) and set its content to the input value
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

        // Append the new list item to the list container
        listContainer.appendChild(li);

        // Create a close (delete) button (span) for the list item
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Unicode 'times' symbol
        li.appendChild(span);
    }

    // Clear the input box after adding a task
    inputBox.value = "";

    // Save the updated data to localStorage
    saveData();
}

// Event listener for click events on the list container
listContainer.addEventListener('click', function (e) {
    // Check if the clicked element is a list item (li)
    if (e.target.tagName === "LI") {
        // Toggle the "checked" class to mark/unMark the task as completed
        e.target.classList.toggle("checked");

        // Save the updated data to localStorage
        saveData();
    }
    // Check if the clicked element is the close (delete) button (span)
    else if (e.target.tagName === "SPAN") {
        // Remove the parent list item when the close button is clicked
        e.target.parentElement.remove();

        // Save the updated data to localStorage
        saveData();
    }
}, false);

// Function to save the current state of the to-do list to localStorage
function saveData() {
    localStorage.setItem("Data", listContainer.innerHTML);
}

// Function to retrieve and display data from localStorage
function showData() {
    listContainer.innerHTML = localStorage.getItem("Data");
}

// Initially, load and display data from localStorage
showData();
