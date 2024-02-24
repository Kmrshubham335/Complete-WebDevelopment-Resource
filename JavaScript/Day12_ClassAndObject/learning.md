### Classes in JavaScript:

#### Example 1: Creating a Simple Class

```javascript
class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  sound() {
    console.log(`${this.name} makes a sound.`);
  }
}

const cat = new Animal("Whiskers", "Cat");
cat.sound(); // Output: Whiskers makes a sound.
```

In this example, we create a class `Animal` with a `constructor` method that initializes properties `name` and `species`, and a method `sound` which logs a generic sound message.

#### Example 2: Inheritance with Classes

```javascript
class Dog extends Animal {
  constructor(name, breed) {
    super(name, "Dog");
    this.breed = breed;
  }

  wagTail() {
    console.log(`${this.name} wags its tail happily.`);
  }
}

const goldenRetriever = new Dog("Buddy", "Golden Retriever");
goldenRetriever.sound(); // Output: Buddy makes a sound.
goldenRetriever.wagTail(); // Output: Buddy wags its tail happily.
```

In this example, we create a subclass `Dog` which inherits from the `Animal` class. It has its own property `breed` and method `wagTail`. We use `super()` to call the parent class constructor.

### Objects in JavaScript:

#### Example 1: Object Literal

```javascript
const car = {
  make: "Toyota",
  model: "Camry",
  year: 2022,
  drive() {
    console.log(`Driving ${this.make} ${this.model}`);
  }
};

console.log(car.make); // Output: Toyota
car.drive(); // Output: Driving Toyota Camry
```

In this example, we create an object `car` using object literal syntax. It has properties `make`, `model`, `year`, and a method `drive`.

#### Example 2: Creating Objects Dynamically

```javascript
function createPerson(name, age) {
  return {
    name,
    age,
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  };
}

const person1 = createPerson("Alice", 30);
const person2 = createPerson("Bob", 25);

person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
person2.greet(); // Output: Hello, my name is Bob and I am 25 years old.
```

In this example, we define a function `createPerson` that dynamically creates person objects with properties `name`, `age`, and a `greet` method.