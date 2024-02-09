ECMAScript (ES) modules are the official standard format to package JavaScript code for reuse. Modules are defined using a variety of import and export statements.
When creating a module, the "export" keyword is used to ensure that the functionality defined in the module can be used in other programs. Here's a simple example:
```javascript
// lib.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
```

To use the functions in another program, we would always use the "import" statement:

```javascript
// app.js
import { add, subtract } from './lib.js';

console.log(add(2, 3)); // Output: 5
console.log(subtract(5, 2)); // Output: 3
```

The import statement is used to import bindings which are exported by another module. Imported modules are in strict mode whether you declare them as such or not. The import statement cannot be used in embedded scripts unless the script has a type="module".

There is also the possibility to import the whole module, without listing the specific contents, using the * syntax:

```javascript
// app.js
import * as lib from './lib.js';

console.log(lib.add(2, 3)); // Output: 5
console.log(lib.subtract(5, 2)); // Output: 3
```

ES modules are statically imported, meaning that imports are resolved and handled before the code is actually executed. This has several advantages, like enabling better tooling (static analysis, tree shaking), predictable behavior, and performance improvements.