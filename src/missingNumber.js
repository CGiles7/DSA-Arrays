/**
 * Implement a brute force algorithm for finding the missing number in an array
 */
function missingNumberBruteForce(numbers) {
    const n = numbers.length + 1;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = numbers.reduce((acc, num) => acc + num, 0);
    return expectedSum - actualSum;
}

function missingNumberSum(numbers) {
    let n = numbers.length + 1;
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = 0;

    for (let i = 0; i < numbers.length; i++) {
        actualSum += numbers[i];
    }

    return expectedSum - actualSum;
}

module.exports = { missingNumberBruteForce, missingNumberSum };
