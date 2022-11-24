function radomNumbers(min, max, length, duplication, decimal, sort) {
  let dif = max - min,
    n,
    numbers = duplication ? [] : new Set();
  if (length > max && !duplication) return [];
  while ((duplication ? numbers.length : numbers.size) < length) {
    n = min + Math.random() * dif;
    if (!decimal) n = Math.round(n);
    duplication ? numbers.push(n) : numbers.add(n);
  }
  if (!duplication) numbers = Array.from(numbers);
  if (sort) numbers = numbers.sort((a, b) => a - b);
  return numbers;
}

function main() {
  const MinInput = $("#input-min"),
    MaxInput = $("#input-max"),
    HowManyInput = $("#input-how-many"),
    DuplicationInput = $("#input-duplication-y"),
    DecimalInput = $("#input-decimal-y"),
    SortInput = $("#input-sort-y"),
    Form = $("#main-form"),
    OutputDiv = $("#out");
  Form.on("submit", (e) => {
    e.preventDefault();
    const MIN = parseFloat(MinInput.val()),
      MAX = parseFloat(MaxInput.val()),
      HOW_MANY = parseInt(HowManyInput.val()),
      DUPLICATION = DuplicationInput.is(":checked"),
      DECIMAL = DecimalInput.is(":checked"),
      SORT = SortInput.is(":checked"),
      Numbers = radomNumbers(MIN, MAX, HOW_MANY, DUPLICATION, DECIMAL, SORT);
    OutputDiv.html(Numbers.join(", "));
  });
}

$(document).ready(main);
