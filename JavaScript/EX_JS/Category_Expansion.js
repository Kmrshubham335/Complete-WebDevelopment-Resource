//Random Name generator

let rand = Math.random();
let first, second, third;

//first word generated
if (rand <= 0.33) {
  first = "Shop";
} else if (rand >= 0.33 && rand <= 0.66) {
  first = "Another";
} else {
  first = "word";
}

//Second word
if (rand <= 0.33) {
  second = "Happy";
} else if (rand >= 0.33 && rand <= 0.66) {
  second = "Fast";
} else {
  second = "Sparkling";
}

//third words

if (rand <= 0.33) {
  third = "Hub";
} else if (rand >= 0.33 && rand <= 0.66) {
  third = "Express";
} else {
  third = "Creations";
}

console.log(`${first} ${second} ${third}`);
