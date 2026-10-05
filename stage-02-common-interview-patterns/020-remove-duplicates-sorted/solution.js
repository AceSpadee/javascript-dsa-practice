function removeDuplicates(numbers) {
    if (numbers.length === 0 || numbers.length === 1) {
        return numbers
    }

    let insertIndex = 1

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] !== numbers[insertIndex - 1]) {
            numbers[insertIndex] = numbers[i]
            insertIndex += 1
        }
    }
    numbers.length = insertIndex
    return numbers
}

export default removeDuplicates;