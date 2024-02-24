Event Loop in Asynchronous Programming
--------------------------------------
The event loop is a critical component in asynchronous programming that enables the execution of non-blocking co de. It manages the flow of execution in a program, ensuring that asynchronous tasks are handled efficiently.

Key Components of the Event Loop:
----------------------------------
1. Call Stack:
   - The call stack is a data structure that keeps track of function calls in the program. Functions are pushed onto the stack when called and popped off when they complete.

2. Callback Queue (or Task Queue):
   - The callback queue holds tasks or events that are ready to be executed. These tasks typically result from asynchronous operations like timers, I/O, or user interactions.

3. Event Loop:
   - The event loop continuously checks the call stack and the callback queue. If the call stack is empty, it takes tasks from the callback queue and pushes them onto the stack for execution.

How the Event Loop Works:
-------------------------

1. The main script is pushed onto the call stack and executed when the program starts.

2. Asynchronous operations initiate, and their corresponding callbacks are placed in the callback queue when ready.

3. The event loop continually checks the call stack. If it's empty, it takes tasks from the callback queue and pushes them onto the stack for execution.

4. Asynchronous tasks are executed, and the process repeats.

Example (JavaScript):
---------------------

```javascript
console.log("Start");

setTimeout(function() {
  console.log("Async task complete");
}, 1000);

console.log("End");

Output:
---------------
Start
End
Async task complete


Src of the gif:
-----------------
https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif