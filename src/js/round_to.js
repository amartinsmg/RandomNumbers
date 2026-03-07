/**
  @brief Rounds a number to a specified number of decimal places
  @param num - The number to be rounded
  @param decimalPlaces - The number of decimal places to round to
  @return - The rounded number
*/

function roundTo(num, decimalPlaces) {
  let base10 = 10 ** decimalPlaces,
    result = Math.round(num * base10) / base10;
  return result;
}

export default roundTo;
