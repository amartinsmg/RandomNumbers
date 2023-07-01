import "./main.css";
import randomNumbers from "./random_numbers";
import roundTo from "./round_to";

// Handles the form submit event to generate random numbers based on user input.

function main() {
  const MinInput = $("#input-min"),
    MaxInput = $("#input-max"),
    HowManyInput = $("#input-how-many"),
    DuplicationYesInput = $("#input-duplication-y"),
    DecimalYesInput = $("#input-decimal-y"),
    DecimalInputs = $('input[name="decimal"]'),
    DecimalPlacesInput = $("#input-decimal-places"),
    SortYesInput = $("#input-sort-y"),
    Form = $("#main-form"),
    OutputDiv = $("#out");

  // Handles the 'change' event on the inputs that indicate if decimal numbers are allowed, and enables or disables the 'decimal-places' input

  DecimalInputs.on("change", () => {
    console.log(DecimalPlacesInput);
    DecimalPlacesInput.prop("disabled", !DecimalYesInput.is(":checked"));
  });

  /**
    @brief Handles the form submit event.
    @param e - The event object.
  */
  Form.on("submit", (e) => {
    e.preventDefault();
    const MIN = parseFloat(MinInput.val()),
      MAX = parseFloat(MaxInput.val()),
      HOW_MANY = parseInt(HowManyInput.val()),
      DUPLICATION = DuplicationYesInput.is(":checked"),
      DECIMAL = DecimalYesInput.is(":checked"),
      DECIMAL_PLACES = parseInt(DecimalPlacesInput.val()),
      SORT = SortYesInput.is(":checked"),
      Numbers = randomNumbers(MIN, MAX, HOW_MANY, DUPLICATION, DECIMAL, SORT);
    OutputDiv.html(
      DECIMAL
        ? Numbers.map((n) => roundTo(n, DECIMAL_PLACES))
        : Numbers.join(", ")
    );
  });
}

// Executes the main function on page load.

$(document).ready(main);
