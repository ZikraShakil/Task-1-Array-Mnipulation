// Import the 'readline' module to handle user input
const readline = require('readline');

// Create an interface for reading from and writing to the console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to find unique elements in an array
function getUniqueElements(inputArray) {
  // Initialize an empty array to store unique elements
  let uniqueArray = [];

  // Iterate through each element in the input array
  for (let i = 0; i < inputArray.length; i++) {
    // Check if the current element is not already in the unique array
    if (uniqueArray.indexOf(inputArray[i]) === -1) {
      // If not present, add the element to the unique array
      uniqueArray.push(inputArray[i]);
    }
  }

  // Return the array containing unique elements
  return uniqueArray;
}

// Prompt the user to enter numbers separated by spaces
rl.question('Enter numbers separated by spaces: ', (input) => {
  // Convert the input string into an array of numbers
  const inputArray = input.split(' ').map(Number);

  // Check if all elements in the array are integers
  if (inputArray.every(Number.isInteger)) {
    // If all elements are integers, find and display unique elements
    const result = getUniqueElements(inputArray);
    console.log("Original Array:", inputArray);
    console.log("Unique Elements:", result);

    // Close the readline interface
    rl.close();
  } else {
    // If the input contains non-integer values, display an error message
    console.log("Invalid input. Please enter valid integers separated by spaces.");

    // Close the readline interface
    rl.close();
  }
});

// Event listener for the 'close' event of the readline interface
rl.on('close', () => {
  // Exit the process with a status code of 0 (success)
  process.exit(0);
});
