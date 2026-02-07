// Step 1: Select DOM elements using const
const celsius = document.getElementById("celsius");
const convertBtn = document.getElementById("convertBtn");
const result = document.getElementById("result");

// Step 2: Create conversion function using arrow syntax
let celsiusToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;

// Step 3: Create function to display result
// TODO: Create an arrow function that:
// - Takes celsius value as parameter
// - Converts it using celsiusToFahrenheit
// - Uses template literal to create result message
// - Displays result in the result div
// Example message: "25°C is equal to 77°F"

let displayResult = (celsiusValue) => {
  result.textContent = `${celsiusValue}°C is equal to ${celsiusToFahrenheit(celsiusValue)}°F`;
};

// Step 4: Add event listener to button
// TODO: Add click event listener to button
// TODO: Get value from input
// TODO: Call your display function
convertBtn.addEventListener("click", () => displayResult(celsius.value));

// BONUS: Add Enter key support
// TODO: Add keypress event listener to input
// TODO: Trigger conversion when Enter is pressed
celsius.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    displayResult(celsius.value);
  }
});
