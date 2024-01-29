addTask Function:
Checks if the input box is empty and displays an alert if it is.
Creates a new list item (li) with the input value and appends it to the list container.
Creates a close (delete) button (span) for the list item.

Event Listener for Click Events:
Listens for click events on the list container.
If a list item (LI) is clicked, it toggles the "checked" class to mark/unMark the task as completed.
If the close button (SPAN) is clicked, it removes the parent list item.

saveData Function:
Saves the current state of the to-do list (HTML content) to localStorage.

showData Function:
Retrieves and displays data from localStorage when the page initially loads.