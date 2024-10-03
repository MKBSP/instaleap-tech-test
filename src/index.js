// Letters array and index for cycling through them
let myLetters = ['A', 'B', 'C', 'D', 'E'];
let currentIndex = 0;

// Function to show the current letter
function showLetter() {
  document.getElementById("demo").innerHTML = myLetters[currentIndex];
}

// Move to the next letter in the array
function nextLetter() {
  currentIndex = (currentIndex + 1) % myLetters.length;
  showLetter();
}

// Move to the previous letter in the array
function previousLetter() {
  currentIndex = (currentIndex - 1 + myLetters.length) % myLetters.length;
  showLetter();
}

// Function to display the current time and seconds
function showTime() {
  let currentTime = new Date();
  let currentSecond = currentTime.getSeconds();
  
  // Display the current time
  document.getElementById("time").innerHTML = `Current time: ${currentTime.toLocaleTimeString()} <br> Seconds: ${currentSecond}`;
  
  // Determine if the second is odd or even
  let resultMessage;
  if (currentSecond % 2 === 0) {
    resultMessage = `The second is: ${currentSecond} (Even)`;
    document.getElementById("result").className = 'alert alert-success'; // Green for even
  } else {
    resultMessage = `The second is: ${currentSecond} (Odd)`;
    document.getElementById("result").className = 'alert alert-danger'; // Red for odd
  }
  
  // Display the result
  document.getElementById("result").innerHTML = resultMessage;
}

// Add event listeners for the buttons
document.getElementById("nextLetter").addEventListener("click", nextLetter);
document.getElementById("previousLetter").addEventListener("click", previousLetter);
document.getElementById("showTime").addEventListener("click", showTime);

// Show the first letter when the page loads
window.onload = showLetter;
