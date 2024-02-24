
### `this` Keyword:

 `this` refers to the current execution context. Its value is determined by how a function is called and where it is called. Use cases:

1. **Global Context**: When used in the global scope or outside of any function, `this` refers to the global object (`window` in a browser, `global` in Node.js).

```javascript
console.log(this === window); // true in a browser
```

2. **Function Context**: Inside a function, `this` refers to the object that is calling the function. It's dynamically determined at runtime.

```javascript
const obj = {
  name: "Alice",
  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
};

obj.greet(); // Output: Hello, my name is Alice.
```

3. **Explicit Binding**: We can explicitly bind `this` to a particular object using methods like `call()`, `apply()`, or `bind()`.

```javascript
const obj1 = { name: "Alice" };
const obj2 = { name: "Bob" };

function greet() {
  console.log(`Hello, my name is ${this.name}.`);
}

greet.call(obj1); // Output: Hello, my name is Alice.
greet.call(obj2); // Output: Hello, my name is Bob.
```

### `new` Keyword:

The `new` keyword is used to create an instance of a user-defined object type or one of the built-in object types that has a constructor function.

```javascript
function Person(name) {
  this.name = name;
}
const alice = new Person("Alice");
console.log(alice.name); // Output: Alice
```

When we use `new`, several things happen:

1. A new empty object is created.
2. The constructor function is called with `this` bound to the new object.
3. Properties and methods are added to `this`.
4. The newly created object is returned.

 To use `new` when we want to create instances of constructor functions to avoid polluting the global namespace and ensure proper instantiation of objects.

