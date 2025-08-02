<!-- Example HTML for context -->
<form>
  <p>What is 2 + 2?</p>
  <label><input type="radio" name="quiz" value="3"> 3</label><br>
  <label><input type="radio" name="quiz" value="4"> 4</label><br>
  <label><input type="radio" name="quiz" value="5"> 5</label><br>
  <button type="button" id="submit-answer">Submit Answer</button>
</form>
<p id="feedback"></p>

<script>
// Define the function
function checkAnswer() {
  const correctAnswer = "4"; // Correct answer
  const selectedOption = document.querySelector('input[name="quiz"]:checked');

  // Check if an option was selected
  if (selectedOption) {
    const userAnswer = selectedOption.value;
    const feedback = document.getElementById("feedback");

    if (userAnswer === correctAnswer) {
      feedback.textContent = "Correct! Well done.";
    } else {
      feedback.textContent = "That's incorrect. Try again!";
    }
  } else {
    // No option selected
    document.getElementById("feedback").textContent = "Please select an answer before submitting.";
  }
}

// Add event listener to the button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
</script>
