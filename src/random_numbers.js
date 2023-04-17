/**
  Generates an array of random numbers within a range with optional parameters.
  The function generates an array of random numbers between a minimum and maximum value,
  with optional parameters to specify the length of the array, whether the numbers can be
  duplicated or not, if decimal numbers are allowed and if the array should be sorted.
    @param min - The minimum value of the range. Must be a number.
    @param max - The maximum value of the range. Must be a number greater than min.
    @param length - Optional parameter to specify the length of the array. Must be a number.
    @param duplication - Optional parameter to specify whether the array can have duplicated values. Must be a boolean.
    @param decimal - Optional parameter to specify whether decimal numbers are allowed. Must be a boolean.
    @param sort - Optional parameter to specify whether the array should be sorted. Must be a boolean.
    @return - An array of random numbers within the specified range and with the specified properties.
*/

function randomNumbers(min, max, length, duplication, decimal, sort) {
  let range = max - min,
    n,
    numbers = duplication ? [] : new Set();
  if ((length > range && !duplication) || min >= max) return [];
  while ((duplication ? numbers.length : numbers.size) < length) {
    n = min + Math.random() * range;
    if (!decimal) n = Math.round(n);
    duplication ? numbers.push(n) : numbers.add(n);
  }
  if (!duplication) numbers = Array.from(numbers);
  if (sort) numbers = numbers.sort((a, b) => a - b);
  return numbers;
}

export default randomNumbers;
