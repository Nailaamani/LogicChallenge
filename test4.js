/**
 * Direction:
 * Find missing number from the list
 *
 * Expected Result:
 * 8
 */
const numbers = [9, 6, 4, 2, 3, 5, 7, 0, 1];

function result(numbers) {
  count = 9;
  var missing = [];

  for (let i = 1; i <= count; i++) {
    if (numbers.indexOf(i) === -1) {
      missing.push(i)
    }
  }

  return missing;
}

console.log(result(numbers));
