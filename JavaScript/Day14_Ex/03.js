// Function to reverse string
let input = prompt("Enter the String")
function reverseString(str) {
	const strRev = Array.from(str).reverse().join("");
	string = strRev + str
    console.log(string)
}

// Function call
reverseString(input);
reverseString("JavaScript");
reverseString("TypeScript");
