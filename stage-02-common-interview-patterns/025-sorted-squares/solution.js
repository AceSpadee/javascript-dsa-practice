function sortedSquares(numbers) {
    let left = 0;
    let right = numbers.length - 1;
    const sorted = [];
    let insertIndex = numbers.length - 1;

    while (left <= right) {
        const leftSquare = numbers[left] ** 2
        const rightSquare = numbers[right] ** 2

        if (leftSquare >= rightSquare) {
            sorted[insertIndex] = leftSquare
            left++
        } else {
            sorted[insertIndex] = rightSquare
            right--
        }

        insertIndex--
    }

    return sorted
}

export default sortedSquares;