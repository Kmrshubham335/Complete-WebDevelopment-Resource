function passwordValidator(password) {
  // Check if the password is at least 8 characters long
  if (password.length < 8) {
    return false;
  }

  // Check if the password contains both uppercase and lowercase letters
  if (!/[A-Z]/.test(password) || !/[a-z]/.test(password)) {
    return false;
  }

  // Check if the password includes at least one digit
  if (!/\d/.test(password)) {
    return false;
  }

  // If all criteria are met, return true
  return console.log("Password is valid");
}
passwordValidator("As3647123@")