function countTargetOccurrences(numbers, target) {
    let leftLowest = 0;
    let rightLowest = numbers.length - 1;
    let leftHighest = 0;
    let rightHighest = numbers.length - 1;
    let leftMost = -1;
    let rightMost = -1;
    let count = 0;

    while (leftLowest <= rightLowest) {
        let middle = Math.floor((leftLowest + rightLowest) / 2);

        if (target === numbers[middle]) {
            leftMost = middle
            rightLowest = middle - 1
        } else if (target < numbers[middle]) {
            rightLowest = middle - 1
        } else {
            leftLowest = middle + 1
        }
    }

    while (leftHighest <= rightHighest) {
        let middle = Math.floor((leftHighest + rightHighest) / 2);

        if (target === numbers[middle]) {
            rightMost = middle
            leftHighest = middle + 1
        } else if (target < numbers[middle]) {
            rightHighest = middle - 1
        } else {
            leftHighest = middle + 1
        }
    }

    if (leftMost === -1) {
        return 0
    }

    count = rightMost - leftMost + 1;

    return count
}

export default countTargetOccurrences;