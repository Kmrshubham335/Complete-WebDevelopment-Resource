1. Asynchronous Function Definition:
   - Function Name: `getData`
   - Description: An asynchronous function that returns a promise. It simulates an asynchronous operation using a `setTimeout` of 5 seconds. Upon completion, it logs messages and resolves the promise with a value (2000).

2. Main Function Definition:
   - Function Name: `main`
   - Description: The main function that serves as the entry point of the program. It logs an initial message and a synchronous line. It then awaits the result of the asynchronous `getData` function and logs additional messages before and after the asynchronous operation.

3. Execution Flow:
   - The `main` function is invoked.
   - Logs an initial message and a synchronous line immediately.
   - Calls the asynchronous function `getData` using `await`.
   - During the wait period (5 seconds), control returns to the event loop, allowing other synchronous operations to proceed.
   - After the asynchronous operation is completed, the function logs messages indicating the waiting period, the retrieval of data, and the completion of the `main` function.

4. Output:
   - "Hii i am in the main function"
   - "We are the synchronous line"
   - "Hii i am async function"
   - "I will wait for 3 sec to execute because I am in setTimeout function"
   - "I will wait for the data from the getData Function after that I will be executed 2000"
   - "Data has been retrieved"

5. Overall Explanation:
   - The program demonstrates the asynchronous nature of the `getData` function, which allows the main function to continue with synchronous operations while waiting for the asynchronous operation to complete. The `await` keyword is used to pause the execution of the `main` function until the asynchronous operation is resolved.
---------------------------------------------------------------------------------------------------------------
