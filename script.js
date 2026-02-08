// Step 1: Select DOM elements using const
/*const celsius = document.getElementById("celsius");
const convertBtn = document.getElementById("convertBtn");
const result = document.getElementById("result");*/

const elements = {
  input: document.getElementById("celsius"),
  button: document.getElementById("convertBtn"),
  result: document.getElementById("result"),
}

/*const celsius = elements.input;
const convertBtn = elements.button;
const result = elements.result;*/
const {input, button, result} = elements;

// Step 2: Create conversion function using arrow syntax
let celsiusToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;

// Step 3: Create function to display result

// - Takes celsius value as parameter
// - Converts it using celsiusToFahrenheit
// - Uses template literal to create result message
// - Displays result in the result div
// Example message: "25°C is equal to 77°F"

let displayResult = (celsiusValue) => {
  result.textContent = `${celsiusValue}°C is equal to ${celsiusToFahrenheit(celsiusValue)}°F`;
};

// Step 4: Add event listener to button

convertBtn.addEventListener("click", () => displayResult(celsius.value));

// BONUS: Add Enter key support
celsius.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    displayResult(celsius.value);
  }
});
