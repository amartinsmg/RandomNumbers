import "./main.css";
import randomNumbers from "./random_numbers";

// This is the main function that handles the form submit event to generate random numbers based on user input.

function main() {
  const MinInput = $("#input-min"),
    MaxInput = $("#input-max"),
    HowManyInput = $("#input-how-many"),
    DuplicationInput = $("#input-duplication-y"),
    DecimalInput = $("#input-decimal-y"),
    SortInput = $("#input-sort-y"),
    Form = $("#main-form"),
    OutputDiv = $("#out");

  /**
    This function handles the form submit event.
    @param e - The event object.
  */
  Form.on("submit", (e) => {
    e.preventDefault();
    const MIN = parseFloat(MinInput.val()),
      MAX = parseFloat(MaxInput.val()),
      HOW_MANY = parseInt(HowManyInput.val()),
      DUPLICATION = DuplicationInput.is(":checked"),
      DECIMAL = DecimalInput.is(":checked"),
      SORT = SortInput.is(":checked"),
      Numbers = randomNumbers(MIN, MAX, HOW_MANY, DUPLICATION, DECIMAL, SORT);
    OutputDiv.html(Numbers.join(", "));
  });
}

// Execute the main function on page load.

$(document).ready(main);
