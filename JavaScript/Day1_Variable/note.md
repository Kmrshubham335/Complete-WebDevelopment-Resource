If we define any variable with var then it  is globally scope but not have block scope.

And if we define any variable with let then variable scope will be globally and have block scope too.
But in the case of const, why do we need to use block scope?

```javascript
const a = 10;
console.log(a); // output: 10
let b = 20;
if (true) {
    const c = 30;
    } else {
        console.log(c); // Uncaught ReferenceError: c is not defined
        }
output : undefined
```
why we can't access outside of this block ???
we are using block scope here so that we can declare variables inside the block which are only accessible within that particular block

