CommonJS is a module system for JavaScript that allows developers to organize their code into reusable modules. It was initially designed for server-side JavaScript environments, such as Node.js, but it can also be used in browser-based applications with the help of bundlers like Webpack or Browserify.

In CommonJS, each module is encapsulated and has its own scope, which means that variables and functions defined within a module are not accessible outside of it unless explicitly exported. Similarly, modules can import and use functionality from other modules by importing them.

Here's an example of a CommonJS module:

```javascript
// math.js
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

module.exports = {
  add,
  subtract
};
```

In the above example, we define two functions `add` and `subtract` within the `math.js` module. The `module.exports` object is used to export these functions so that they can be used in other modules.

To use the `math.js` module in another module, we can import it using the `require` function:

```javascript
// app.js
const math = require('./math.js');

console.log(math.add(2, 3)); // Output: 5
console.log(math.subtract(5, 2)); // Output: 3
```

In the `app.js` module, we import the `math.js` module using the `require` function and assign it to the `math` variable. We can then use the exported functions `add` and `subtract` from the `math` object.

CommonJS modules are synchronous, which means that the dependencies are resolved and loaded at runtime. This makes it easy to reason about the order of execution and ensures that all dependencies are available before a module is executed.

It's important to note that CommonJS is not natively supported in modern browsers. To use CommonJS modules in a browser environment, you need to use a bundler like Webpack or Browserify to bundle the modules into a single file that can be executed in the browser.

CommonJS provides a simple and straightforward way to organize and modularize JavaScript code, making it easier to manage dependencies and promote code reusability.