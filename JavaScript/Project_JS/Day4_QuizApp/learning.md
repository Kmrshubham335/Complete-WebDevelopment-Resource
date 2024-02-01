## (1) startQuiz function:
```javascript
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}
```
**Purpose:**
Resets the quiz by setting the currentQuestionIndex to 0 and the score to 0.
Updates the innerHTML of the nextButton to "Next".
Initiates the quiz by calling showQuestion().

## (2) showQuestion function:
```javascript
function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + "." + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}
```
**Purpose:**
Resets the state of the quiz using the resetState function.
Retrieves the current question object from the questions array.
Updates the questionElement to display the current question.
Dynamically creates buttons for each answer option, sets their text and class, and appends them to the answerButton element.
Adds event listeners to each button to handle the selection of answers.

## (3) resetState function:
```javascript
function resetState() {
  nextButton.style.display = "none";
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}
```
**Purpose:**
Hides the nextButton.
Clears the contents of the answerButton element by removing all its child nodes.

## (4) selectAnswer function:
```javascript
function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButton.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}
```
**Purpose:**
Takes the event (e) as a parameter.
Checks if the selected answer is correct by comparing the dataset.correct property.
Adds CSS classes to the selected button based on correctness.
Disables all buttons and highlights the correct answer.
Updates the score if the selected answer is correct.
Displays the nextButton.

## (5) showScore function:
```javascript
function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}
```
**Purpose:**
Resets the state of the quiz.
Updates the questionElement to display the user's score.
Updates the nextButton innerHTML to "Play Again" and displays it.

## (6) handleNextButton function:
```javascript
function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}
```
**Purpose:**
Increments the currentQuestionIndex.
Checks if there are more questions.
If yes, calls showQuestion to display the next question.
If no, calls showScore to display the final score.

###### (7) Event Listener for nextButton:
```javascript
nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});
```
**Purpose:**
Listens for a click event on the nextButton.
Calls handleNextButton or startQuiz based on whether there are more questions or if the quiz is completed.





