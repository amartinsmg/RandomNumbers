function randomNumbers(min, max, length, duplication, decimal, sort) {
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

export default randomNumbers;
