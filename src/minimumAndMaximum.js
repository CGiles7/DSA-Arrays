/**
 * Implement an algorithm that sorts the array then returns the minimum and maximum
 */
function minimumAndMaximumSort(numbers) {
    if (numbers.length === 0) {
      return [];
  }

  numbers.sort(function(a, b) {
      return a - b;
  });

  return [numbers[0], numbers[numbers.length - 1]];
}

/**
* Implement an algorithm that uses iteration to find the minimum and maximum
*/
function minimumAndMaximumIterate(numbers) {
if (numbers.length === 0) {
      return [];
  }

  let minNum = numbers[0];
  let maxNum = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] < minNum) {
          minNum = numbers[i];
      }
      if (numbers[i] > maxNum) {
          maxNum = numbers[i];
      }
  }

  return [minNum, maxNum];
}

module.exports = { minimumAndMaximumIterate, minimumAndMaximumSort };
