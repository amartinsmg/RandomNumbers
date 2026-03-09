import "./main.css";
import randomNumbers from "./js/random_numbers";
import roundTo from "./js/round_to";

// Handles the form submit event to generate random numbers based on user input.

function main() {
  const minInput = $("#input-min"),
    maxInput = $("#input-max"),
    howManyInput = $("#input-how-many"),
    duplicationYesInput = $("#input-duplication-y"),
    decimalYesInput = $("#input-decimal-y"),
    decimalInputs = $('input[name="decimal"]'),
    decimalPlacesInput = $("#input-decimal-places"),
    sortYesInput = $("#input-sort-y"),
    form = $("#main-form"),
    outputEl = $("#out"),
    copyBtn = $("#copy-btn");

  // Handles the 'change' event on the inputs that indicate if decimal numbers are allowed, and enables or disables the 'decimal-places' input

  decimalInputs.on("change", () => {
    decimalPlacesInput.prop("disabled", !decimalYesInput.is(":checked"));
  });

  /**
    @brief Handles the form submit event.
    @param e - The event object.
  */

  form.on("submit", (e) => {
    e.preventDefault();
    const min = parseFloat(minInput.val()),
      max = parseFloat(maxInput.val()),
      howMany = parseInt(howManyInput.val()),
      duplication = duplicationYesInput.is(":checked"),
      decimal = decimalYesInput.is(":checked"),
      decimalPlaces = parseInt(decimalPlacesInput.val()),
      sort = sortYesInput.is(":checked"),
      numbers = randomNumbers(min, max, howMany, duplication, decimal, sort);
    outputEl.html(
      decimal
        ? numbers.map((n) => roundTo(n, decimalPlaces)).join(", ")
        : numbers.join(", "),
    );
    copyBtn.prop("disabled", false);
  });

  // Handles the 'click' event on the 'Copy to Clipboard' button to copy the output to the clipboard.

  copyBtn.on("click", () => {
    const output = outputEl.text(),
      btnText = copyBtn.text();
    navigator.clipboard.writeText(output);
    copyBtn.text("Copied!");
    setTimeout(() => {
      copyBtn.text(btnText);
    }, 1200);
  });
}

// Executes the main function on page load.

$(document).ready(main);
