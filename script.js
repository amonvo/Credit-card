// Get all color elements with class 'color'
const colors = document.querySelectorAll('.color');

// Get the reset button element
const resetBtn = document.querySelector('.reset-btn');

// Get the original background color of the card details container
const originalColor = window.getComputedStyle(document.querySelector('.card-details')).backgroundColor;

// Add event listeners to each color element
colors.forEach(color => {
  color.addEventListener('click', () => {
    // Get the card details container element
    const cardDetails = document.querySelector('.card-details');

    // Change the background color of the card details container to the selected color
    cardDetails.style.backgroundColor = color.style.backgroundColor;
  });
});

// Add an event listener to the reset button
resetBtn.addEventListener('click', () => {
  // Get the card details container element
  const cardDetails = document.querySelector('.card-details');

  // Reset the background color of the card details container to the original color
  cardDetails.style.backgroundColor = originalColor;
});

// Function to update the cardholder name
function updateName() {
    // Get the input element for the cardholder name
    const nameInput = document.getElementById('name');

    // Get the value entered by the user in the input field
    const name = nameInput.value;

    // Get the element that displays the cardholder name
    const nameElement = document.querySelector('.name');

    // Update the cardholder name with the entered value if it's not empty
    if (name) {
        nameElement.textContent = name;
    }
}
