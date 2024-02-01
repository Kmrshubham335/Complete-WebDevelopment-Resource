# IIFE (Immediately Invoked Function Expression):
IIFE, which stands for Immediately Invoked Function Expression, is a design pattern in JavaScript used to create a private scope for variables and prevent them from polluting the global scope. It involves defining and executing a function immediately after its creation. The typical structure looks like this:
```javascript
(function() {
    // Your code here
})();
```
Encapsulation:The function is enclosed within parentheses, creating a function expression that is immediately invoked.
Anonymous Function:The function is anonymous, meaning it doesn't have a name, as it is intended for immediate execution.
Invocation:The trailing () immediately invokes the function, causing it to execute right after being defined.

Example of IIFE:
```javascript
(function() {
    var localVar = "IIFE Example";
    console.log(localVar);
})();
```
Variable localVar:Inside the IIFE, there's a variable localVar declared. This variable is local to the function, not accessible outside.
Console Output:The console.log(localVar) statement prints the value of localVar to the console, demonstrating immediate execution.

**Use Case:**
###### Preventing Global Pollution:
Variables declared inside the IIFE are confined to the function scope, minimizing the risk of naming conflicts.
```javascript
(function() {
    var internalVar = "Not Global";
    console.log(internalVar);
})();
```
 The following line would throw an error because internalVar is not defined globally.
console.log(internalVar);

**Encapsulation:**
IIFE can be used to create a private scope for operations, maintaining modularity and organization.

```javascript
var result = (function() {
    var privateVar = 10;
    return privateVar * 2;
})();
```

console.log(result);
// Outputs 20
// The following line would throw an error because privateVar is not accessible.
// console.log(privateVar);

-------------------------------------------------------------------------------------------
# Scope in JavaScript

## Block Scope 

###### the let and const keywords introduced block-scoped variables. These variables are scoped to the nearest enclosing pair of curly braces {}. 

```javascript
if (true) {
    // Block scope
    let blockVar = "I am in a block";
    console.log(blockVar); // Accessible
}

// The following line would throw an error because blockVar is not defined outside the block.
// console.log(blockVar);
```
### Local Scope

 Variables declared inside a function or block have local scope.
They are only accessible within that function or block.

```javascript
function exampleFunction() {
    // Local scope
    let localVar = "I am local";
    console.log(localVar); // Accessible
}

exampleFunction();
// The following line would throw an error because localVar is not defined globally.
// console.log(localVar);
```

## Global Scope:
Variables or functions declared outside of any function or block have a global scope.
They are accessible throughout the entire script, including inside functions.

```javascript
// Global scope
let globalVar = "I am global";

function exampleFunction() {
    console.log(globalVar); // Accessible
}

exampleFunction();
console.log(globalVar); // Accessible
```







