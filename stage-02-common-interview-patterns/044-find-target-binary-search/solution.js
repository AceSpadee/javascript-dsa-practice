function findTarget(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);

        if (numbers[middle] === target) {
            return middle
        }

        if (target < numbers[middle]) {
            right = middle - 1
        } else {
            left = middle + 1
        }
    }

    return -1
}

export default findTarget;