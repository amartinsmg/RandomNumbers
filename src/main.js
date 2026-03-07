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
    outputDiv = $("#out");

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
    outputDiv.html(
      decimal
        ? numbers.map((n) => roundTo(n, decimalPlaces)).join(", ")
        : numbers.join(", ")
    );
  });
}

// Executes the main function on page load.

$(document).ready(main);
