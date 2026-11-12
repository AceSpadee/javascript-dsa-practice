function findLastOccurrence(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    let result = -1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);

        if (numbers[middle] === target) {
            result = middle
            left = middle + 1
        } else if (target < numbers[middle]) {
            right = middle - 1
        } else {
            left = middle + 1
        }
    }

    return result
}

export default findLastOccurrence;