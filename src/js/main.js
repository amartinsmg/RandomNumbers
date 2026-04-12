import "../css/style.css";
import randomNumbers from "./random_numbers";
import roundTo from "./round_to";

// Handles the form submit event to generate random numbers based on user input.

function main() {
  const minInput = document.querySelector("#input-min"),
    maxInput = document.querySelector("#input-max"),
    howManyInput = document.querySelector("#input-how-many"),
    duplicationYesInput = document.querySelector("#input-duplication-y"),
    decimalYesInput = document.querySelector("#input-decimal-y"),
    decimalInputs = document.querySelectorAll('input[name="decimal"]'),
    decimalPlacesInput = document.querySelector("#input-decimal-places"),
    sortYesInput = document.querySelector("#input-sort-y"),
    form = document.querySelector("#main-form"),
    outputEl = document.querySelector("#out"),
    copyBtn = document.querySelector("#copy-btn");

  // Handles the 'change' event on the inputs that indicate if decimal numbers are allowed, and enables or disables the 'decimal-places' input

  decimalInputs.forEach((input) => {
    input.addEventListener("change", () => {
      decimalPlacesInput.disabled = !decimalYesInput.checked;
    });
  });

  /**
    @brief Handles the form submit event.
    @param e - The event object.
  */

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const min = parseFloat(minInput.value),
      max = parseFloat(maxInput.value),
      howMany = parseInt(howManyInput.value),
      duplication = duplicationYesInput.checked,
      decimal = decimalYesInput.checked,
      decimalPlaces = parseInt(decimalPlacesInput.value),
      sort = sortYesInput.checked,
      numbers = randomNumbers(min, max, howMany, duplication, decimal, sort);
    outputEl.innerHTML = decimal
      ? numbers.map((n) => roundTo(n, decimalPlaces)).join(", ")
      : numbers.join(", ");

    copyBtn.removeAttribute("disabled");
  });

  // Handles the 'click' event on the 'Copy to Clipboard' button to copy the output to the clipboard.

  copyBtn.addEventListener("click", () => {
    const output = outputEl.innerHTML,
      btnText = copyBtn.innerHTML;
    navigator.clipboard.writeText(output);
    copyBtn.innerHTML = "Copied!";
    setTimeout(() => {
      copyBtn.innerHTML = btnText;
    }, 1200);
  });
}

// Executes the main function on page load.

window.addEventListener("load", main);
