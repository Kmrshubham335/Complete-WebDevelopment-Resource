1. `console.log("2" + 2)`: 
   - In JavaScript, the `+` operator is used for both addition and concatenation.
   - Here, `"2"` is a string because it's enclosed in double quotes.
   - `2` is a number.
   - When we use the `+` operator with a string and a number, JavaScript implicitly converts the number to a string and then concatenates the two strings together.
   - So `"2"` (as a string) gets concatenated with `2` (converted to a string), resulting in `"22"`.

2. `console.log(1 + 2 + "2")`:
   - Here, `1` and `2` are both numbers.
   - JavaScript evaluates expressions from left to right.
   - It starts by performing the addition `1 + 2`, which equals `3`.
   - Then, it implicitly converts `3` to a string and concatenates it with `"2"`.
   - So `3` (as a string) gets concatenated with `"2"`, resulting in `"32"`.

3. `console.log(1 + "2" + 2)`:
   - Here, `1` and `2` are both numbers.
   - `"2"` is a string because it's enclosed in double quotes.
   - JavaScript evaluates expressions from left to right.
   - It starts by concatenating `1` (as a number) with `"2"`, resulting in `"12"`.
   - Then, it concatenates `"12"` with `2`.
   - So `"12"` (as a string) gets concatenated with `2` (converted to a string), resulting in `"122"`.

In summary, when using the `+` operator in JavaScript:

- If both operands are numbers, it performs addition.
- If one or both operands are strings, it performs concatenation. If any operand is a string, JavaScript converts all operands to strings and concatenates them together.
